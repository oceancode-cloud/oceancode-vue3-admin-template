<template>
  <div>
     <div style="position:absolute;left:0;right:0;bottom:0;top:0;overflow-y:auto">
       <div style="top:0px;right:15px;bottom:0px;left:0px;position:absolute;">
          <o-box :left="52.0" left-unit="px" :top="55.0" top-unit="px" :width="290.0" :height="149.0" height-unit="px" >
            <o-container :border-style="{
                background: 'linear-gradient(90deg,rgba(81,113,253,1),rgba(201,122,253,1))',
              boxShadow: '0px 5px 10px 0px #c97afdFF',
              border: '0px solid #000',
              borderTopLeftRadius: '6px',
              borderTopRightRadius: '6px',
              borderBottomLeftRadius: '6px',
              borderBottomRightRadius: '6px',
            }">
            </o-container>
          </o-box>
          <o-box :left="98.0" left-unit="px" :top="57.0" top-unit="px" :width="492.0" :height="276.0" height-unit="px" >
            <o-query>
              <o-box :left="50.0" left-unit="px" :top="49.0" top-unit="px" :width="99.0" >
                <o-button type="default" size="medium" :block="true"  >
                  Default
                </o-button>
              </o-box>
              <o-box :top="158.0" top-unit="px" :right="117.0" right-unit="px" :width="157.0" >
                <o-input size="medium"  placeholder="请输入" >

                </o-input>
              </o-box>
            </o-query>
          </o-box>
          <o-box :left="351.0" left-unit="px" :top="215.0" top-unit="px" :width="290.0" :height="149.0" height-unit="px" >
            <o-container :border-style="{
                background: 'linear-gradient(90deg,rgba(81,113,253,1),rgba(201,122,253,1))',
              boxShadow: '0px 5px 10px 0px #c97afdFF',
              border: '0px solid #000',
              borderTopLeftRadius: '6px',
              borderTopRightRadius: '6px',
              borderBottomLeftRadius: '6px',
              borderBottomRightRadius: '6px',
            }">
            </o-container>
          </o-box>
          <o-box :left="52.0" left-unit="px" :top="219.0" top-unit="px" :width="290.0" :height="149.0" height-unit="px" >
            <o-container :border-style="{
                background: 'linear-gradient(90deg,rgba(61,173,246,1),rgba(115,123,252,1))',
              boxShadow: '0px 5px 10px 0px #737bfcFF',
              border: '0px solid #000',
              borderTopLeftRadius: '6px',
              borderTopRightRadius: '6px',
              borderBottomLeftRadius: '6px',
              borderBottomRightRadius: '6px',
            }">
            </o-container>
          </o-box>
          <o-box :left="357.0" left-unit="px" :top="384.0" top-unit="px" :width="290.0" :height="149.0" height-unit="px" >
            <o-container :border-style="{
                background: 'linear-gradient(90deg,rgba(61,173,246,1),rgba(115,123,252,1))',
              boxShadow: '0px 5px 10px 0px #737bfcFF',
              border: '0px solid #000',
              borderTopLeftRadius: '6px',
              borderTopRightRadius: '6px',
              borderBottomLeftRadius: '6px',
              borderBottomRightRadius: '6px',
            }">
            </o-container>
          </o-box>
          <o-box :left="49.0" left-unit="px" :top="388.0" top-unit="px" :width="290.0" :height="149.0" height-unit="px" >
            <o-container :border-style="{
                background: 'linear-gradient(90deg,rgba(234,103,124,1),rgba(239,155,95,1))',
              boxShadow: '0px 5px 10px 0px #ef9b5fFF',
              border: '0px solid #000',
              borderTopLeftRadius: '6px',
              borderTopRightRadius: '6px',
              borderBottomLeftRadius: '6px',
              borderBottomRightRadius: '6px',
            }">
            </o-container>
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
import { useForm, } from '@oceancode/ocean-wui'
import { addDictGroup, } from '@/services'
import AddDictForm from './dict-manager/AddDictForm.vue'

</script>
