export function clearLog(){
  return Promise.resolve()
}

export function listLog(params){
  console.log(params)
  return Promise.resolve([
    {
      userId:1,
      username:'超级管理员',
      nickname:'超级管理员',
      url:'/admin/base/sys/log/',
      params:'{}',
      ip:'61.152.143.73',
      ipAddress:'中国上海',
      created:new Date().getTime()
    }
  ])
}