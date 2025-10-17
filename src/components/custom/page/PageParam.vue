<template>
  <o-group-items-input :data="value.pageParams" 
              add-label="新增"
              :on-create="handleCreate">
    <template #default="{option}">
        <template v-if="hasPageVar">
          <o-input-group>
            <o-button size="small">参数</o-button>
            <o-select size="small" v-model="option.id" :options="getVariables" label-field="name" value-field="id"></o-select>
          </o-input-group>
          <o-input-group>
            <o-button size="small">值</o-button>
            <o-select size="small" value-field="field" label-field="name" v-model="option.field" :options="()=>loadFields(option)"></o-select>
            <!-- <ModelSelect size="small" v-model:value="option.modelId" v-model:field="option.field"></ModelSelect> -->
            <!-- <ModelFieldsSelect :multiple="false" :model-id="modelId" size="small" v-model="option.id"></ModelFieldsSelect> -->
          </o-input-group> 
        </template>
        <template v-else>
          <o-input-group>
            <o-button size="small">类型</o-button>
            <o-select v-model="option.type" :options="typeList" size="small"></o-select>
          </o-input-group>
          <o-input-group>
            <o-button size="small">参数</o-button>
            <ModelFieldsSelect :multiple="false" :model-id="modelId" size="small" v-model="option.id"></ModelFieldsSelect>
          </o-input-group> 
          <o-input-group>
            <o-button size="small">别名</o-button>
            <o-input v-model="option.alias" size="small"></o-input>
          </o-input-group>
        </template>
    </template>
  </o-group-items-input>
</template>
<script setup>
import { defineProps,ref,onMounted} from 'vue'
import { listPageVariables } from 'ocean-admin-api/api/page/PageFunction'
import { ModelSelect } from '@/components';
import { listFunctionResultModelFields } from 'ocean-admin-api/api/function/MethodFunction'
const props = defineProps({
  value:Object,
  modelId: String,
  pageId: String,
  functionId:[String]
})
if(!props.value.pageParams){
  props.value.pageParams = []
}
const pageVariables = ref([])
const hasPageVar = ref(props.pageId ? true : false)

onMounted(async()=>{
  
})

const typeList = [
  {label:'Param',value:'param'},
  {label:'Query',value:'query'},
  {label:'Path',value:'path'}
]
async function getVariables(){
  if(props.pageId){
    if(pageVariables.value.length===0){
      const res = await listPageVariables(props.pageId);
      pageVariables.value = res.variables.map(e=>{
        e.alias = e.id;
        return e;
      })
      hasPageVar.value = true
    }
    
  }
  return pageVariables.value;
}

function handleCreate(){
  return {
    id: null,
    name: null,
    type: 'param',
    alias:null
  }
}

async function loadFields(option){
  const list = await listFunctionResultModelFields(props.functionId);
  const dataType = option.dataType;
  const alias = option.alias;
  const dataTypeList = [];
  if(alias==='projectId'){
    dataTypeList.push(...['String','Long','Integer'])
  }
  return list.filter(it=>{
    if(dataTypeList.length===0){
      return true;
    }
    if(!dataTypeList.includes(it.type)){
      return false;
    }
    return true;
  });
}
</script>