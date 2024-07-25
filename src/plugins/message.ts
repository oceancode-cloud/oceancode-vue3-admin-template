import { PermissionPlugin,PluginType } from '@oceancode/ocean-wui'
export function messagePlugin():PermissionPlugin{
  return {
    name: PluginType.MESSAGE,
    warning(message){
      window['$nativeMessage'].warning(message)
    },
    error(message){
      window['$nativeMessage'].error(message)
    }
  }
}