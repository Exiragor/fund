<template>
  <el-row>
    <h1>Услуги</h1>
    <n-link to="/projects/program/add"><el-button type="success" class="mb-3">Добавить новую</el-button></n-link>
    <items-list class="mb-3" />
  </el-row>
</template>

<script>
  import ItemsList from '@/components/Program/List';

  export default {
    components: {
      ItemsList
    },
    mounted() {
      this.$store.dispatch('projects/load', 'program');
    }
  }
</script>
