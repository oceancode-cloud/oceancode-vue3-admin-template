import { useGlobal } from '@/store'
import { RequestPlugin,RequestConfig,ResultData,useUser,useRouter,ResultEnum,PluginType } from '@oceancode/ocean-wui'
import axios, { AxiosError, AxiosInstance, AxiosPromise } from 'axios'

function hasData(data:any):boolean{
  return (data.hasOwnProperty('data') || data.hasOwnProperty('results')) && data.hasOwnProperty('code')
}

const service: AxiosInstance =  axios.create({
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    const token = useUser().getToken()
    if (token) {
      config.headers['Authorization'] = ('Bearer ' + token) as any;
    }
    const projectId = useGlobal().getProjectId()
    if(projectId){
      config.headers['x-project-id'] = projectId
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

function get<T>(url: string,params:any,config?:RequestConfig):Promise<ResultData<T>> {
  return handleErrorWrapper(service.get(url,{params:params,...config}))
}
function post<T>(url: string,params:any,config?:RequestConfig):Promise<ResultData<T>> {
  return handleErrorWrapper(service.post(url,params,config))
}
function put<T>(url: string,params:any,config?:RequestConfig):Promise<ResultData<T>> {
  return handleErrorWrapper(service.put(url,params,config))
}

function _delete<T>(url: string,params:any,config?:RequestConfig):Promise<ResultData<T>> {
  return handleErrorWrapper(service.delete(url,{params:params,...config}))
}

function _postDownload<T>(url: string,  filename?: string,param: unknown,) {
  return handleErrorWrapper<T>(service.post(url, param, { responseType: 'arraybuffer' }), filename);
}
function parseResonseData(data: any): any {
  const resData = {
    code: data.code,
    message: data.message,
    success: false,
    data: data.results || data.data,
    total: data.total,
    toLogin: false,
  };
  if (resData.code === ResultEnum.SUCCESS) {
    resData.success = true;
  } else if (resData.code === ResultEnum.NOT_LOGIN) {
    resData.toLogin = false
  }

  return resData;
}


function downloadFile(res:any, fileName?:string) {
  const blob = new Blob([res.data]);
  if(res.headers['content-disposition']){
    const content = res.headers['content-disposition'];
    if(content.indexOf('=')!=-1){
      const name = content.substring(content.indexOf('=')+1);
      if(name){
        fileName = decodeURIComponent(name);
      }
    }
  }
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = (e) => {
    const a = document.createElement('a') as any;
    a.download = fileName;
    a.href = e.target.result;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
}

function handleErrorWrapper<T>(p: AxiosPromise,filename?:string): Promise<ResultData<T>> {
  return new Promise((resolve,reject)=>{
    p.then(response=>{
      if (response.request.responseType === 'arraybuffer') {
        downloadFile(response, filename);
        resolve({ success: true });
        return;
      }
      const data = response.data
      const resData = {
        code: data.code,
        message: data.message,
        success: false,
        data: data.results || data.data,
        total: data.total,
      } as ResultData
      if(!hasData(data)){
        return resolve({
          data: data,
          code: ResultEnum.SUCCESS,
          success: true
        })
      }

      if (resData.code === ResultEnum.SUCCESS) {
        resData.success = true;
        resolve(resData);
      } else if (resData.code === ResultEnum.NOT_LOGIN) {
        window['$message'].error('用户信息过期，请重新登录');
        useUser().toLogin()
      } else {
        const msg = '错误码:' + resData.code + ' ' + (resData.message || '');
        window['$message'].error(msg);
      }
    }).catch((error: AxiosError)=>{
      const response = error.response as any
      const status = response.status
      if(status===400){
        const data = response.data
        window['$message'].error({code:data.code,message:data.message})
      }else if(status===401){
        useUser().logout()
        useRouter().toLogin()
      }else if(status===403){
        const user = useUser();
        if(!user.isLogin()){
          useRouter().toLogin();
          return;
        }
        useUser().refreshPermission(true).finally(()=>{
          reject({ error: error, ...parseResonseData(response.data) })
        })
        return
      }
      reject({ error: error, ...parseResonseData(response.data) });
    })
  })
}



export function axoisRequest(){
  return {
    name: PluginType.REQUEST,
    get: get,
    put: put,
    post: post,
    delete: _delete,
    download:_postDownload,
  }
}