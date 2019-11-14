<template>
  <el-row>
    <h1>Блоки контента</h1>
    <items-list class="mb-3" />
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
  import ItemsList from '@/components/Content/List';

  export default {
    components: {
      ItemsList
    },
    data: () => ({
      count: 10
    }),
    computed: {
      pagesTotal() {
        return this.$store.getters['content/total'];
      },
      page() {
        return +this.$route.params.id;
      }
    },
    methods: {
      handlePageChange(page) {
        this.$router.push(`/content/${page}/page`);
      }
    },
    mounted() {
      this.$store.dispatch('content/load', { page: this.page || 1, count: this.count });
    }
  }
</script>
