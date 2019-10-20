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
  export default {
    data: () => ({
      login: '',
      password: ''
    }),
    methods: {
      async loginAction() {
        let res = await this.$store.dispatch('user/login', { login: this.login, password: this.password });
        if (res) {
          this.$router.replace({ path: '/private' });
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
