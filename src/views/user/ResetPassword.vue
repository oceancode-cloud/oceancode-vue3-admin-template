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
          top: '80.0px',
          left: '36.11111111111111%',
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
          top: '34.0px',
          left: '46.5px',
          width: '307px',
          position: 'absolute',
          height: '38px',
        }"
      >
        <o-text
          :font-weight="400"
          color="rgba(0, 0, 0, 0.88)"
          text-align="center"
          type="text"
        font-size="24px"
        :text-style="{
          fontSize:'24px',
        }"
        >
          重置密码
        </o-text>
      </div>
      <div
        :style="{
          'z-index': 1,
          top: '133.0px',
          left: '40.5px',
          width: '319px',
          position: 'absolute',
          height: '254px',
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
          top: '399.0px',
          left: '41.0px',
          width: '318px',
          position: 'absolute',
          height: '34px',
        }"
      >
        <o-submit-button
          type="primary"
          size="medium"
          :block="true"
        >
          提交
        </o-submit-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { userResetPassword } from '@/api/user/UserFunction';
import { RestPasswordParam } from 'ocean-admin-api/models/user/RestPasswordParam';
import { h, defineProps } from 'vue';
import { useForm, OCaptchaInput, OPasswordInput, useRouter } from '@oceancode/ocean-wui';
import { UserLogin } from '@/meta/pages/user/index';
import { updateEmailResetPassword } from '@/api/common/CommonFunction';

const props = defineProps({
  value: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const Form = useForm({
  props:{
    labelPlacement: "top",
    size: "medium",
  },
  formValue: props.value,
  items: [
    {
      label: '邮箱地址',
      prop: 'email',
      rules: {
        required: true,
        message: '邮箱地址不能为空',
      },
      component: {
        props: {
          maxlength: 32,
        },
        name: 'input',
      },
    },
    {
      label: '验证码',
      prop: 'code',
      rules: {
        required: true,
        message: '验证码不能为空',
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
              return updateEmailResetPassword(param);
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
        message: '登录密码不能为空',
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
    submit(param: RestPasswordParam, option: any): any | void {
      const res = userResetPassword(param);
      res.then(async (data) => {
        router.push({ name: UserLogin.ROUTER_NAME });
      });
      return res;
    },
  },
});
</script>