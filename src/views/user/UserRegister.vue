<!-- Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved. -->

<template>
  <div
    >
    <div
        :style="{
          border: '1px solid rgba(234,236,240,1)',
          boxShadow: '0px 0px 104px 0px rgba(22, 14, 105, 0.06)',
          borderTopLeftRadius: '18px',
          'z-index': 0,
          transform: 'rotate(0deg)',
          top: '199.0px',
          left: '37.01388888888889%',
          borderBottomLeftRadius: '18px',
          background: 'rgba(255,255,255,1)',
          width: '400px',
          borderBottomRightRadius: '18px',
          borderTopRightRadius: '18px',
          position: 'absolute',
          height: '580px',
        }"
    >
      <div
        :style="{
          'z-index': 2,
          top: '24.0px',
          left: '81.5px',
          width: '237px',
          position: 'absolute',
          height: '29px',
        }"
      >
        <o-text
          :font-weight="600"
          color="#000"
          text-align="center"
          type="text"
        font-size="18px"
        :text-style="{
          fontSize:'18px',
        }"
        >
          用户注册
        </o-text>
      </div>
      <div
        :style="{
          'z-index': 1,
          top: '133.0px',
          left: '44.0px',
          width: '312px',
          position: 'absolute',
          height: '0px',
        }"
      >
        <div
        >
          <o-form ref="Form"></o-form>
        </div>
      </div>
      <div
        :style="{
          'z-index': 3,
          top: '442.0px',
          left: '38.5px',
          width: '323px',
          position: 'absolute',
          height: '34px',
        }"
      >
        <o-submit-button
          type="primary"
          size="medium"
          :block="true"
        >
          注册
        </o-submit-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { userRegister } from '@/api/user/UserFunction';
import { h } from 'vue';
import { UserRegisterRequest } from '@/models/user/UserRegisterRequest';
import { useForm, OCaptchaInput, OPasswordInput, useRouter } from '@oceancode/ocean-wui';
import { UserLogin } from '@/meta/pages/user/index';
import { sendUserRegisterEmailCode } from '@/api/common/CommonFunction';

const router = useRouter();
const Form = useForm({
  props:{
    labelPlacement: "top",
    size: "medium",
  },
  items: [
    {
      label: '电子邮箱',
      prop: 'email',
      rules: {
        required: true,
        message: '电子邮箱不能为空',
      },
      component: {
        props: {
          showCount: true,
          rows: 3,
          maxlength: 64,
        },
        name: 'input',
      },
    },
    {
      label: '注册码',
      prop: 'code',
      showLabel: false,
      rules: {
        required: true,
        message: '注册码不能为空',
      },
      component: {
        props: {
          maxlength: 32,
        },
        render(param: any): any | void {
          return h(OCaptchaInput, {
            requireFields: ['email'],
            seconds: 60,
            onClick() {
              return sendUserRegisterEmailCode(param);
            }
          });
        },
      },
    },
    {
      label: '登录密码',
      prop: 'password',
      rules: {
        required: true,
      },
      component: {
        props: {
          maxlength: 32,
        },
        render(param: any): any | void {
          return h(OPasswordInput);
        },
      },
    },
  ],
  on: {
    submit(param: UserRegisterRequest, option: any): any | void {
      const res = userRegister(param);
      res.then(async (data) => {
        router.push({ name: UserLogin.ROUTER_NAME });
      });
      return res;
    },
  },
});
</script>