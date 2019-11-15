<template>
  <el-row>
    <h1>Проекты</h1>
    <n-link to="/projects/project/add"><el-button type="success" class="mb-3">Добавить новый</el-button></n-link>
    <items-list class="mb-3" />
  </el-row>
</template>

<script>
  import ItemsList from '@/components/Project/List';

  export default {
    components: {
      ItemsList
    },
    mounted() {
      this.$store.dispatch('projects/load', 'project');
    }
  }
</script>
