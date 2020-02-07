<template>
  <el-row>
    <h1>Новости</h1>
    <n-link to="/news/add"><el-button type="success" class="mb-3">Добавить новую</el-button></n-link>
    <news-list class="mb-3" />
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="count"
      :current-page="page"
      @current-change="handlePageChange"
      :total="pagesTotal">
    </el-pagination>
  </el-row>
</template>

<script>
  import NewsList from '@/components/News/List';

  export default {
    components: {
      NewsList
    },
    data: () => ({
      count: 10
    }),
    computed: {
      pagesTotal() {
        return this.$store.getters['news/total'];
      },
      page() {
        return +this.$route.params.id;
      }
    },
    methods: {
      handlePageChange(page) {
        this.$router.push(`/news/${page}/page`);
      }
    },
    mounted() {
      this.$store.dispatch('news/loadNews', { page: this.page || 1, count: this.count });
    }
  }
</script>
