<template>
  <div>
   <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
     <div style="top:0px;right:15px;bottom:0px;left:0px;position:absolute;">

          <o-box  :left="158.2" left-unit="px" :top="11.0" top-unit="px" :width="492.0" width-unit="px" :height="49.0" height-unit="px" >
            <o-query>
              <template #default="{option}">
                <o-box :left="7.999981689453136" left-unit="px" :top="15.0" top-unit="px" :width="75.0" width-unit="px" >
                  <o-text 
                    text="数据查询"
                    :lines="1"
                    
                    :font-weight= "400"
                    color= "#000"
                    text-align= "center"
                    type= "text"
                    :text-style="{
                    fontSize: '14px',
                  }"></o-text>
                </o-box>
              <o-box :left="81.80000000000001" left-unit="px" :top="9.0" top-unit="px" :width="157.0" width-unit="px" >
                  <o-select :options="listConfigDataTypeDict" v-model="option.name" size="medium" :clearable="true" :multiple="false" label-field="label" value-field="value"  placeholder="请选择" >
                  </o-select>
                </o-box>
              </template>
            </o-query>
          </o-box>

          <o-box  :left="91.2" left-unit="px" :top="20.0" top-unit="px" :width="66.0" width-unit="px" >
            <o-add-button type="primary" size="medium" :block="true"  action="add-param-form" >
              新增
            </o-add-button>
          </o-box>

          <o-box  :left="0.0" left-unit="px" :top="20.0" top-unit="px" :width="71.0" width-unit="px" >
            <o-refresh-button type="default" size="medium" :block="true"   >
              刷新
            </o-refresh-button>
          </o-box>

          <o-box  :left="0.0" left-unit="px" :top="69.0" top-unit="px" :right="0.0" right-unit="px" :height="276.0" height-unit="px" >
            <o-data-table ref="Table1721907148649"></o-data-table>
          </o-box>
        <o-dialog title="编辑参数" action="edit-param-form" :width="444" :height="202" :overflow="false">
          <template #default="{options}">
            <EditParamForm :value="options"></EditParamForm>
          </template>
        </o-dialog>
        <o-dialog title="新增参数" action="add-param-form" :width="444" :height="202" :overflow="false">
          <template #default="{options}">
            <AddParamForm :value="options"></AddParamForm>
          </template>
        </o-dialog>
     </div>
    </div>
  </div>
</template>
<script setup>
import { useDataTable,useForm, } from '@oceancode/ocean-wui'
import { deleteConfigById,listConfigDataTypeDict,listConfig, } from '@/services'
import EditParamForm from './param-list/EditParamForm.vue'
import AddParamForm from './param-list/AddParamForm.vue'

const Table1721907148649 = useDataTable({  columns:[
    {
      title:'名称',
      key:'name',

      width: 100,      ellipsis: true,
    },
    {
      title:'keyName',
      key:'keyName',

      width: 100,      ellipsis: true,
    },
    {
      title:'数据类型',
      key:'dataType',

      width: 100,
      dict:listConfigDataTypeDict()

    },
    {
      title:'备注',
      key:'remark',

    },
    {
      title:'操作',
      type:'action',
       actions:[
         {
           type:'edit',
           action:'edit-param-form',
           text:'编辑',
         },
         {
           type:'delete',
           text:'删除',
           onClick(row){
             return deleteConfigById(row)
           },
         },
       ]
    }
  ],
  on:{
    load(params){            
      return listConfig(params)
    }
  }
});
</script>
