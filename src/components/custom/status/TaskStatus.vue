<template>
  <div class="status-wrapper" :style="style">
    <div class="status-content">
      <div class="dot"></div>
      <div class="text" v-if="label">
        {{ label }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps,computed,inject, onMounted,watch } from 'vue';
import { useTask } from '@oceancode/ocean-wui';
const globalData = inject('globalData');
const addDestroyTask = inject('addDestroyTask');
const props = defineProps({
  label: {
    type: String,
  },
  size: {
    type: String,
    default:'medium'
  },
  type: {
    type: String,
    default:'success',
  },
  color: [String],
  onCheck: Function
});
watch(
  ()=>props.label,
  ()=>{
    process();
  }
)
const style = computed(()=>{
  const ret = {};
  let color = '#3dcca6';
  if(props.color){
    color = props.color;
  }else if(props.type==='warning'){
    color = '#f0a020'
  }else if(props.type==='error'){
    color= '#f66f6a';
  }else if(props.type==='info'){
    color = '#54a9f9'
  }else if(props.type==='default'){
    color = '#c9c9c9'
  }

  if(color){
    ret['--color'] = color;
  }

  let size = '14px'
  if(props.size==='medium') {
    size = '8px'
  }else if(props.size==='small'){
    size = '5px'
  }

  if(size){
    ret['--size'] = size;
  }
  
  return ret;
});
onMounted(async()=>{
  process();
})
async function process(){
  let task = globalData.task;
  if(!task) {
    task = useTask();
    globalData.task = task;
  }
  addDestroyTask(()=>task.clear());
  const res = await props.onCheck();
  if(res.id){
    task.add(res.id,3,()=>{
      props.onCheck(res)
      .then((data)=>{
        if(!data || !data.id){
          task.stop(res.id);
        }
      })
    }, true);
  }
}
</script>
<style lang="scss" scoped>
.status-wrapper{
  display: inline-block;
  .dot{
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background: var(--color);
    display: inline-block;
  }
  .status-content{
    display: flex;
    justify-items: center;
    align-items: center;
  }
  .text{
    margin-left: 3px;
    color:var(--color);
  }
}
</style>