<template>
  <el-row>
    <h1>Слайды главного слайдера</h1>
    <n-link to="/slider/main/add"><el-button type="success" class="mb-3">Добавить новый</el-button></n-link>
    <slides-list class="mb-3" />
  </el-row>
</template>

<script>
  import SlidesList from '@/components/Slides/List';

  export default {
    components: {
      SlidesList
    },
    mounted() {
      this.$store.dispatch('slides/load', 'main');
    }
  }
</script>
