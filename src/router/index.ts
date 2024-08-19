import { useRouter, useUser } from '@oceancode/ocean-wui';
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
const routerHistory = createWebHashHistory();
const router = createRouter({
    history: routerHistory,
    routes: routes
})


router.beforeEach(async(to,from,next)=>{
    const permissions = (to.meta?.permissions || []) as Array<string>
    const mustParams = (to.meta?.mustParams || []) as Array<string>
    const redirectName = to.query?.redirectName
    if(redirectName){
        if(redirectName===to.name){
            next({name:'NoPermission'})
            return
        }
    }
    for(const it of mustParams){
        const type = (it as any).type as string
        const id = (it as any).id as string
        let errorCode 
        if(type==='path' || type==='params'){
            const val = to.params[id] as any
            if(!val && val!=0 && val!=false){
                errorCode = 'parameter.missing'
            }
        }else if(type==='query'){
            const val = to.query[id] as any
            if(!val && val!=0 && val!=false){
                errorCode = 'parameter.missing'
            }
        }

        if(errorCode){
            next({
                name:'notFound',
                query:{
                    coce:errorCode,
                    from:to.name
                }
            })
            return
        }
    }
    for(const it of permissions){
        if(it==='login'){
            if(!useUser().isLogin()){
                useRouter().toLogin({query:{redirect:to.fullPath,redirectName:to.name}})
                return
            }
        }else if(it==='unlogin'){
            if(useUser().isLogin()){
                useRouter().toHome()
                return
            }
        }
    }
    next()
})
export default router
