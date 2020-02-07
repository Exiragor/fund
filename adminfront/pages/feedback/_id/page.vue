<template>
  <el-row>
    <h1>Обращения из формы обратной связи</h1>
    <list class="mb-3" />
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
  import List from '@/components/News/List';

  export default {
    components: {
      List
    },
    data: () => ({
      count: 10
    }),
    computed: {
      pagesTotal() {
        return this.$store.getters['feedback/total'];
      },
      page() {
        return +this.$route.params.id;
      }
    },
    methods: {
      handlePageChange(page) {
        this.$router.push(`/feedback/${page}/page`);
      }
    },
    mounted() {
      const token = this.$auth.getToken('local');
      this.$store.dispatch('feedback/load', { page: this.page || 1, count: this.count, token });
    }
  }
</script>
