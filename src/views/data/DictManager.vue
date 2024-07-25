<template>
  <div>
   <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
     <div style="top:0px;right:15px;bottom:0px;left:0px;position:absolute;">

          <o-box  :left="0.0" left-unit="px" :top="0.0" top-unit="px" :bottom="0.0" bottom-unit="px" :width="300.0" width-unit="px" >
            <o-category-group :data='loadDictGroup'  action="add-dict-form" title="类型" key-field="key" label-field="label"  >
            </o-category-group>
          </o-box>

          <o-box  :top="7.0" top-unit="px" :right="0.0" right-unit="px" :width="300.0" width-unit="px" >
            <o-search-input size="medium" search-text="搜索" value-field="name" :on-click-search="true" placeholder="请输入关键字" ></o-search-input>
          </o-box>

          <o-box  :left="386.0" left-unit="px" :top="7.0" top-unit="px" :width="60.0" width-unit="px" >
            <o-add-button type="primary" size="medium" :block="true"  action="add-dict-form" >
              新增
            </o-add-button>
          </o-box>

          <o-box  :left="306.0" left-unit="px" :top="7.0" top-unit="px" :width="72.0" width-unit="px" >
            <o-refresh-button type="default" size="medium" :block="true"   >
              刷新
            </o-refresh-button>
          </o-box>

          <o-box  :left="300.00000000000006" left-unit="px" :top="49.00000000000006" top-unit="px" :right="0.0" right-unit="px" :width="1140.0" width-unit="px" :height="276.0" height-unit="px" >
            <o-data-table ref="Table1721928709214"></o-data-table>
          </o-box>
        <o-dialog title="新增字典" action="add-dict-form" :width="444" :height="202" :overflow="false">
          <template #default="{options}">
            <AddDictForm :value="options"></AddDictForm>
          </template>
        </o-dialog>
     </div>
    </div>
  </div>
</template>
<script setup>
import { useDataTable,useForm, } from '@oceancode/ocean-wui'
import { deleteDictById,listDict,loadDictGroup,addDictGroup, } from '@/services'
import {  MyComponent,  } from '@/components'

import AddDictForm from './dict-manager/AddDictForm.vue'

const Table1721928709214 = useDataTable({  columns:[
    {
      title:'ID',
      key:'id',

      width: 100,      ellipsis: true,
    },
    {
      title:'值',
      key:'value',

      width: 100,      ellipsis: true,
    },
    {
      title:'备注',
      key:'remark',

      width: 100,      ellipsis: true,
    },
    {
      title:'创建时间',
      key:'created',

      traits:['timestamp',],
      width: 100,
    },
    {
      title:'更新时间',
      key:'updated',

      traits:['timestamp',],
      width: 100,
    },
    {
      title:'备注',
      key:'remark',

    },
    {
      title:'排序',
      key:'sort',

      width: 100,
    },
    {
      title:'操作',
      type:'action',
       actions:[
         {
           type:'edit',
           text:'编辑',
         },
         {
           type:'delete',
           text:'删除',
           onClick(row){
             return deleteDictById(row)
           },
         },
       ]
    }
  ],
  on:{
    load(params){            
      return listDict(params)
    }
  }
});
</script>
