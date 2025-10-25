<template>
  <o-input-group>
    <o-tree-select :disabled="disabled" :size="size" style="min-width:100px" :style="{width: hasField?'50%':'100%'}" :consistentMenuWidth="false" clearable :options="loadOptions" label-field="name" key-field="id" children-field="children" :on-update-value="handleUpdateValue" v-model="curVal"></o-tree-select>
    <o-select :multiple="multipleFields"  :disabled="disabled" :size="size" :key="curVal" label-field="name" value-field="field" v-if="hasField && curVal" style="width:50%" v-model="fieldId" :options="loadModelFields" :on-update-value="handleUpdateFieldValue"></o-select>
  </o-input-group>
</template>
<script setup>
import { defineProps,ref,watch,defineEmits,computed,h} from 'vue'
import { listModelGroupOptions,loadModelFieldOptions } from '@common-api/api/model/ModelFunction'
import ModelLinkName from './model-link-name.vue'
import { deepTree } from '@oceancode/ocean-wui'
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  types: Array,
  type: Number,
  multiple:{
    type:Boolean,
    default:false
  },
  value: [String,Number],
  field: [String,Number],
  onUpdateValue: Function,
  fieldRequired: {
    type: Boolean,
    default: false
  },
  fieldTypes:{
    type:Array,
  },
  size: [String],
  onFilterField:Function,
})
const curVal = ref(props.value || (props.multiple ? [] : ''));
const fieldId = ref(props.field)
const hasField = computed(()=>{

  return props.fieldRequired &&  curVal.value;
})
const multipleFields = computed(()=>{
  if(!props.multiple){
    return false;
  }
  return props.fieldRequired;
});
const emits = defineEmits(['update:field','update:value'])
watch(
  ()=>props.value,
  (val)=>{
    curVal.value = val
  }
)
watch(
  ()=>props.modelField,
  (val)=>{
    fieldId.value = val
  }
)
const modelTypes = computed(()=>{
  if(props.types && props.types.length>0) return props.types
  let types = []
  const type = props.type
  if(type===1){
    types = [3,2]
  }else if(type===3){
    types = [3,2]
  }else if(type===4){
    types = [3,2]
  }else if(type===5){
    types = [3,5,2]
  }else if(type===6){
    types = [3,6,2]
  }

  return types
})
async function loadOptions(option){
  const res = await listModelGroupOptions(option?.groupId,modelTypes.value || [],props.value)
  const list = [];
  (res?.data || []).forEach(e=>{
    e.isLeaf = false;
    e.groupId = e.id;
    e.id="group:"+e.id;
    list.push(e)
  });

  
  
  let modelGroups = (res?.modelGroups|| []);
  if(res.model){
    const it = modelGroups.find(e=>e.id===res.model.groupId)
    if(it){
      if(!it.children){
        it.children = [];
      }
      it.children.push({...res.model,isLeaf:true});
    }
  }
  modelGroups = deepTree(modelGroups.map(e=>{
    e.groupId = e.id;
    e.id = 'group:'+e.id;
    return e;
  }));
  modelGroups.forEach(e=>{
    const it = list.find(p=>p.id===e.id);
    if(it){
      it.children = e.children;
    }
  });

  (res?.models || []).forEach(e=>{
    list.push(e)
  })

  return list;
}

async function loadModelFields(){
  const list = await loadModelFieldOptions(curVal.value)

  return list.filter(e=>{
    if(props.fieldTypes){
      return props.fieldTypes.includes(e.type)
    }
    return true
  }).filter(it=>{
    if(props.onFilterField){
      return props.onFilterField(it);
    }
    return true;
  })
}

function handleUpdateValue(val,option){
  emits('update:value',val)
  fieldId.value = null;
  updateValue(val,null,option)
}

function updateValue(model,field,option){
  let params = model
  if(props.fieldRequired){
    params = {
      modelId: model,
      field: field,
    }
  }
  props.onUpdateValue && props.onUpdateValue(params,option)
}

function handleUpdateFieldValue(val,option){
  emits('update:field',val)
  updateValue(curVal.value,val,option)
}


function renderTag({option}){
  return h(ModelLinkName,{value:option})
}

</script>