<template>
  <div>
     <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
       <div style="top:0px;right:15px;bottom:0px;left:0px;position:absolute;">
          <o-box :left="47.0" left-unit="px" :top="151.0" top-unit="px" :width="930.0" :height="276.0" height-unit="px" >
            <o-data-table ref="Table1721318825010"></o-data-table>
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
<script lang="ts" setup>
import { useDataTable,useForm, } from '@oceancode/ocean-wui'
import { addDictGroup, } from '@/services'
import {  MyComponent,  } from '@/components'

import AddDictForm from './dict-manager/AddDictForm.vue'

const Table1721318825010 = useDataTable({  columns:[
    {
      title:'列1',
      key:'c1',

    },
    {
      title:'列2',
      key:'c2',

    },
    {
      title:'操作',
      type:'action',
       actions:[
         {
           type:'edit',
           action:'my-component',
           text:'编辑',
         },
       ]
    }
  ],
  on:{
    load(params){            
      return []
    }
  }
});
</script>
