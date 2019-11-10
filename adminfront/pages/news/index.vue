<template>
  <el-row>
    <h1>Новости</h1>
    <n-link to="/news/add"><el-button type="success" class="mb-3">Добавить новую</el-button></n-link>
    <news-list class="mb-3" />
    <el-pagination
      background
      layout="prev, pager, next"
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
    computed: {
      pagesTotal() {
        return this.$store.getters['news/total'];
      }
    },
    mounted() {
      this.$store.dispatch('news/loadNews', { page: 1, count: 1 });
    }
  }
</script>
