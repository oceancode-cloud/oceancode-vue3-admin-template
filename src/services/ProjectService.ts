export function listUserProject(){
  console.log('listUserProject')
  return Promise.resolve([
    {
      id:1,
      name:new Date().getTime(),
      desc:'为仓颉编程语言开发者打造活跃、开放、高质量的社区环境'
    },
    {
      id:2,
      name:'redis-sdk',
      desc:'仓颉语言实现的Redis客户端SDK。接口设计兼容jedis接口语义，支持RESP2和RESP3协议，支持发布订阅模式，支持哨兵模式和集群模式。'
    },
    {
      id:3,
      name:'vue-devui',
      desc:'基于全新 DevUI Design 设计体系的 Vue3 组件库，面向研发工具的开源前端解决方案。'
    },
    {
      id:4,
      name:'hyperion',
      desc:'仓颉语言实现的TCP通信框架，支持添加自定义编解码器，积木式添加IoFilter处理入栈出栈消息。仓颉redis-sdk和activemq4cj项目使用了该框架。'
    },
    {
      id:2,
      name:'RuoYi-Vue',
      desc:'🎉 基于SpringBoot，Spring Security，JWT，Vue & Element 的前后端分离权限管理系统，同时提供了 Vue3 的版本'
    },
    {
      id:2,
      name:'工作区2'
    },
    {
      id:2,
      name:'工作区2'
    },
    {
      id:2,
      name:'工作区2'
    },
    {
      id:2,
      name:'工作区2'
    },
    {
      id:2,
      name:'工作区2'
    },
    {
      id:2,
      name:'工作区2'
    },
    {
      id:2,
      name:'工作区2'
    },
    {
      id:2,
      name:'工作区2'
    },
    {
      id:2,
      name:'工作区2'
    },
    {
      id:2,
      name:'工作区2'
    },
    {
      id:2,
      name:'工作区2'
    },
    {
      id:2,
      name:'工作区2'
    },
    {
      id:2,
      name:'工作区2'
    },
    {
      id:2,
      name:'工作区2'
    }
  ])
}

export function deleteProjectById(id){
  console.log('deleteProjectById',)
  return Promise.resolve()
}

export function routerToDashoardPage(row){
  console.log('routerToDashoardPage',row)
}