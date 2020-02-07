<template>
  <el-menu style="height: 100%;" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true" :default-active="$route.path">
    <el-menu-item v-for="item in menu" :key="item.link" :index="item.link">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  import Menu from '@/resources/menu.json'

  export default {
    data: () => ({
      menu: Menu
    })
  }
</script>
