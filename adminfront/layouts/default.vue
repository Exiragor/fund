<template>
  <el-container>
      <el-aside style="min-height: 100vh">
        <Menu />
      </el-aside>
    <el-container>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Menu from '@/components/Navigation/Menu';

  export default {
    components: {Menu},
    middleware: 'auth',
  }
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  margin-bottom: 35px;
}

.mb-3 {
  margin-bottom: 25px;
}
</style>
