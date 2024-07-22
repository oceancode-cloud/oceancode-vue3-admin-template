export function listTask(){
  return [
    {
      id:1,
      name:'每秒执行,总共5次',
      method:'taskDemoService.test()',
      cron:'间隔1秒执行',
    },
    {
      id:2,
      name:'cron任务，5秒执行一次',
      method:'taskDemoService.test()',
      cron:'0/5 * * * * ? '
    }
  ]
}

export function startOrStopTask(row){
  console.log('startOrStopTask',row)
}

export function deleteTaskById(row){
  console.log('deleteTaskById',row)
  return Promise.resolve()
}