<template>
  <el-form class="login-form">
    <el-form-item label="Логин">
      <el-input v-model="login"></el-input>
    </el-form-item>
    <el-form-item label="Пароль">
      <el-input v-model="password" show-password></el-input>
    </el-form-item>
    <el-button type="primary" @click="loginAction">Войти</el-button>
  </el-form>
</template>

<script>
  import { loginReq } from '@/api/auth';

  export default {
    data: () => ({
      login: '',
      password: ''
    }),
    methods: {
      async loginAction() {
        let { data } = await loginReq(this.login, this.password);
        if (data && data.token) {
          this.$auth.setUserToken(data.token);
          this.$router.replace({ path: '/' });
        }
      }
    }
  }
</script>

<style>
  .login-form .el-input__inner {
    border: 1px solid #000;
  }
</style>
