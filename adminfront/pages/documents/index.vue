<template>
  <el-row>
    <h1>Документы</h1>
    <docs-upload />
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
  import DocsUpload from '@/components/Documents/Upload';

  export default {
    components: {
      DocsUpload,

    },
    data: () => ({
      count: 10
    }),
    computed: {
      pagesTotal() {
        return this.$store.getters['news/total'];
      }
    },
    methods: {
      handlePageChange(page) {
        this.$router.push(`/news/${page}/page`);
      }
    },
    mounted() {
      this.$store.dispatch('news/loadNews', { page: 1, count: this.count });
    }
  }
</script>
