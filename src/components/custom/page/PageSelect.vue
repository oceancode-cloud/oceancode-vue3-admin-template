<template>
  <o-tree-select :consistentMenuWidth="false" :render-tag="renderTag" :multiple="multiple" clearable :options="loadOptions" key-field="id"  :on-update-value="handleUpdateValue" v-model="curVal"></o-tree-select>
</template> 
<script setup>
import { defineProps,ref,watch,defineEmits,computed,h} from 'vue'
import { deepTree } from '@oceancode/ocean-wui'
import { listPageGroupsTree,listPages,listPageGroupsByPageId,getPageBaseInfoById } from 'ocean-admin-api/api/page/PageFunction'
import PageLinkNameCom from './page-link-name.vue'
import { takeRight } from 'lodash'
import { PageType } from 'ocean-admin-api/models/page/PageType'
const props = defineProps({
  types: Array,
  pageGroupTypes:Array,
  modelValue: [String,Number],
  excludePageIds:Array,
  onUpdateValue: Function,
  children: String,
  pageId: String,
  multiple: Boolean,
  onLoad: Function
})
const curVal = ref(props.modelValue+'')
const emits = defineEmits(['update:modelValue'])
watch(
  ()=>props.modelValue,
  (val)=>{
    curVal.value = val
  }
)
async function loadOptions(param){
  const pageGroups = await listPageGroupsTree(param?.groupId);
  let resultList = [];
  let pages = [];
  if(!param?.groupId){
    resultList = pageGroups;
  }else{
    resultList = pageGroups.map(e=>e.children);
  }
  
  resultList.forEach(it=>{
    if(it.children){
      it.children.forEach(p=>{
        p.isLeaf = false;
        p.groupId = p.id
        p.id = 'group:'+p.id
      })
    }else{
      it.isLeaf = false;
      it.groupId = it.id
      it.id = 'group:'+it.id
    }
  })
  if(props.modelValue){
    const list = await listPageGroupsByPageId(props.modelValue);
    const dataList = list.map(it=>{
      return {
        id:'group:'+it.id,
        parentId: 'group:'+it.parentId,
        label: it.name,
        groupId: it.id,
      }
    })
    const targetList = deepTree(dataList)
    targetList.forEach(it=>{
      let item = resultList.find(p=>p.id===it.parentId)
      if(!item){
        for(const child of resultList){
          if(child.children){
            item = child.children.find(p=>p.id===it.parentId)
          }
          if(item){
            break;
          }
        }
      }
      if(item){
        if(!item.children){
          item.children =[]
        }
        item.children = item.children.push(it)
      }
    })

    const pageInfo = await getPageBaseInfoById(props.modelValue)
    let targetItem
    for(const it of resultList){
      if(it.id==='group:'+pageInfo.groupId){
        targetItem = it;
      }
      if(!targetItem){
        targetItem = (it.children||[]).find(p=>p.id==='group:'+pageInfo.groupId)
      }
      if(targetItem){
        break
      }
    }
    if(targetItem){
      if(!targetItem.children){
        targetItem.children = [];
      }
      targetItem.children.push({
        id:pageInfo.id,
        label: pageInfo.title+'('+pageInfo.pageId+')',
        name:  pageInfo.title+'('+pageInfo.pageId+')',
      })
    }
  }
  if(param?.groupId){
    const hasPage = (props.types || []).indexOf(PageType.PageType.PAGE)!=-1
    pages = await listPages(param.groupId)
    const createItem = (p)=>{
        return {
          id: p.id,
          label: p.title+'('+p.pageId+')',
          pageId: p.id,
          name: p.title+'('+p.pageId+')',
        }
      }
    pages.forEach(it=>{
      
      const item = createItem(it);
      pageGroups.push(item);
      let hasChild = !hasPage && it.children && it.children.length>0;
      if(props.pageId === it.id){
        hasChild = true;
      }
      if(hasChild){
        item.children = it.children.map(p=>{
          return createItem(p);
        })
      }
    })
  }
  return pageGroups;
  // if(props.onLoad){
  //   const data = props.onLoad()
  //   if(data){
  //     return res.concat(data)
  //   }
  // }
  return res
}

function handleUpdateValue(val,option){
  emits('update:modelValue',val)
  props.onUpdateValue && props.onUpdateValue(val,option)
}

function renderTag({option}){
  return h(PageLinkNameCom,{value:option})
}
</script>