<template>
  <el-row>
    <h1>Слайды главного слайдера</h1>
    <n-link to="/slider/main/add"><el-button type="success" class="mb-3">Добавить новый</el-button></n-link>
    <slides-list class="mb-3" />
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="count"
      @current-change="handlePageChange"
      :total="pagesTotal">
    </el-pagination>
  </el-row>
</template>

<script>
  import SlidesList from '@/components/Slides/List';

  export default {
    components: {
      SlidesList
    },
    data: () => ({
      count: 10
    }),
    computed: {
      pagesTotal() {
        return this.$store.getters['slides/total'];
      },
      page() {
        return +this.$route.params.id;
      }
    },
    methods: {
      handlePageChange(page) {
        this.$router.push(`/slider/main/${page}/page`);
      }
    },
    mounted() {
      this.$store.dispatch('slides/load', {slider: 'main', count: this.count, page: this.page || 1});
    }
  }
</script>
