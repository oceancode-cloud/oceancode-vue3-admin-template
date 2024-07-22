<template>
  <div>
   <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
     <div style="top:0px;right:15px;bottom:0px;left:0px;position:absolute;">

          <o-box  :top="58.89" top-unit="px" :right="36.11999999999995" right-unit="px" :width="63.44" >
            <o-add-button type="primary" size="medium" :block="true"  action="add-project-form" >
              新增
            </o-add-button>
          </o-box>

          <o-box  :left="15.0" left-unit="px" :top="107.0" top-unit="px" :right="35.0" right-unit="px" :bottom="93.0" bottom-unit="px" :width="1390.0" :height="700.0" height-unit="px" >
            <o-container :border-style="{
              }">
              <o-data-list :router="(item)=>({name:'dashoard'})" :x-gap="8" :y-gap="8" preset="grid" :data="listUserProject" :cols="4" :item-width="299.0" :item-responsive="false">
                <template #default="{option}">
                  <o-box :absolute="false" :width="100" width-unit="%" :height="144.0" height-unit="px" >
                    <o-container :border-style="{
                        background: 'rgba(255,255,255,1)',
                      boxShadow: '0px 2px 6px 0px rgba(37, 43, 58, 0.12)',
                      borderTopLeftRadius: '12px',
                      borderTopRightRadius: '12px',
                      borderBottomLeftRadius: '12px',
                      borderBottomRightRadius: '12px',
                    }">
                    <o-box  :left="17.73" left-unit="px" :top="6.906363636363622" top-unit="px" >
                      <o-text 
                        :text="option.name"
                        :lines="1"
                        
                        font-weight= "700"
                        color= "#000"
                        text-align= "left"
                        type= "text"
                        :text-style="{
                        fontSize: '16px',
                      }"></o-text>
                    </o-box>
                    <o-box  :left="17.73" left-unit="px" :top="38.54272727272725" top-unit="px" :right="17.269999999999982" right-unit="px" :height="44.0" height-unit="px" >
                      <o-text 
                        :text="option.desc"
                        :lines="2"
                        height="44.0px"
                        font-weight= "400"
                        color= "rgba(59,62,85,1)"
                        text-align= "left"
                        type= "text"
                        :text-style="{
                        fontSize: '14px',
                      }"></o-text>
                    </o-box>
                    <o-box  :left="17.73" left-unit="px" :top="109.27000000000002" top-unit="px" :height="18.0" height-unit="px" >
                      <o-delete-icon :on-delete="()=>deleteProjectById(option)" :size="18" :center="true" color="rgba(252,8,8,1)" ></o-delete-icon>
                    </o-box>
                    </o-container>
                  </o-box>
                </template>
              </o-data-list>
            </o-container>
          </o-box>
        <o-drawer title="新增工作区" action="add-project-form" :width="444" :height="202" :overflow="false">
          <template #default="{options}">
            <AddProjectForm :value="options"></AddProjectForm>
          </template>
        </o-drawer>
        <o-dialog title="编辑工作区" action="edit-project-form" :width="444" :height="202" :overflow="false">
          <template #default="{options}">
            <EditProjectForm :value="options"></EditProjectForm>
          </template>
        </o-dialog>
     </div>
    </div>
  </div>
</template>
<script setup>
import { listUserProject,deleteProjectById, } from '@/services'
import { useForm, } from '@oceancode/ocean-wui'
import AddProjectForm from './home/AddProjectForm.vue'
import EditProjectForm from './home/EditProjectForm.vue'

</script>
