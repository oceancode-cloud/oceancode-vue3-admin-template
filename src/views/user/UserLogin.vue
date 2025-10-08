<!-- Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved. -->

<template>
  <div
     style="
      background-image: url(/images/design/background/login2.png);
      background-position: center center;
      background-size: cover;
      height: 100%;
    "
    >
    <div
        :style="{
          'z-index': 0,
          transform: 'rotate(0deg)',
          top: '24.333333333333336%',
          left: '33.86284722222222%',
          borderBottomLeftRadius: '0px',
          width: '464.7500000000001px',
          borderBottomRightRadius: '0px',
          borderTopRightRadius: '0px',
          position: 'absolute',
          height: '369px',
          borderTopLeftRadius: '0px',
        }"
    >
      <div
        :style="{
          'z-index': 2,
          top: '11.999999999999972px',
          left: '68.375px',
          width: '328px',
          position: 'absolute',
          height: '53px',
        }"
      >
        <o-text
          :font-weight="600"
          color="#000"
          text-align="center"
          type="text"
        font-size="33px"
        :text-style="{
          fontSize:'33px',
        }"
        >
          用户登录
        </o-text>
      </div>
      <div
        :style="{
          'z-index': 5,
          top: '109.55555555555551px',
          left: '68.375px',
          width: '328px',
          position: 'absolute',
          height: '128px',
        }"
      >
        <div
        >
          <o-form ref="Form"></o-form>
        </div>
      </div>
      <div
        :style="{
          'z-index': 6,
          left: '68.375px',
          bottom: '84.58333333333348px',
          width: '328px',
          position: 'absolute',
          height: '40px',
        }"
      >
        <o-submit-button
          type="primary"
          size="large"
          :block="true"
        >
          登录
        </o-submit-button>
      </div>
      <div
        :style="{
          'z-index': 5,
          left: '68.375px',
          bottom: '24.0px',
          width: '56px',
          position: 'absolute',
          height: '22px',
        }"
      >
        <o-text
          :font-weight="400"
          color="#1677ff"
          text-align="left"
          type="text"
        font-size="14px"
        @click="handleTextClick1746281303077"
        :text-style="{
          fontSize:'14px',
        }"
        >
          注册
        </o-text>
      </div>
      <div
        :style="{
          'z-index': 6,
          bottom: '24.0px',
          width: '86px',
          right: '68.37500000000011px',
          position: 'absolute',
          height: '22px',
        }"
      >
        <o-text
          :font-weight="400"
          color="#1677ff"
          text-align="right"
          type="text"
        font-size="14px"
        @click="handleTextClick1746281438083"
        :text-style="{
          fontSize:'14px',
        }"
        >
          忘记密码？
        </o-text>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { userLogin } from '@common-api/api/user/UserFunction';
import { h } from 'vue';
import { UserLoginRequest } from '@common-api/models/user/UserLoginRequest';
import { useForm, OUsernameInput, OPasswordInput, useUser, useRouter } from '@oceancode/ocean-wui';
import { WorkspaceList } from '@common-api/meta/pages/workspace/index';
import { UserRegister, ResetPassword } from '@common-api/meta/pages/user/index';

const user = useUser();
const router = useRouter();
const Form = useForm({
  props:{
    labelPlacement: "left",
    size: "medium",
  },
  items: [
    {
      label: '登录账号',
      prop: 'username',
      showLabel: false,
      rules: {
        required: true,
        message: '登录账号不能为空',
      },
      component: {
        props: {
          maxlength: 32,
        },
        render(param: any): any | void {
          return h(OUsernameInput);
        },
      },
    },
    {
      label: '登录密码',
      prop: 'password',
      showLabel: false,
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
    submit(param: UserLoginRequest, option: any): any | void {
      const res = userLogin(param);
      res.then(async (data) => {
        user.setLoginResponse(data);
        await user.refreshPermission();
        router.push({ name: WorkspaceList.ROUTER_NAME });
      });
      return res;
    },
  },
});
async function handleTextClick1746281438083(): Promise<void> {
  router.push({ name: ResetPassword.ROUTER_NAME });
}

async function handleTextClick1746281303077(): Promise<void> {
  router.push({ name: UserRegister.ROUTER_NAME });
}

</script>