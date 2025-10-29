import { useRouter } from '@oceancode/ocean-wui';
export function checkRouterProjectIdInParam(route){
  return route.params && route.params.projectId
}

export function checkRouterParams(route,keys:Array<string>){
  if(!route.params || !keys){
    return false
  }
  const it = keys.find(key=>!route.params[key])
  return it ? false : true
}

export function checkRouteExcludeRoutes(route,item){
  const meta = item.meta || {}
  const excludeRoutes = meta.excludeRoutes || []
  return excludeRoutes.indexOf(route.name)==-1
}

export function switchRouter(router: any) {
  if(!router){
    return;
  }
  useRouter().push(router);
}