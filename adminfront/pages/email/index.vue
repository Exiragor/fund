<template>
  <el-row>
    <h1>Emails, которые подписаны на новости.</h1>
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
  import List from '@/components/Email/List';

  export default {
    components: {
      List
    },
    data: () => ({
      count: 10
    }),
    computed: {
      pagesTotal() {
        return this.$store.getters['email/total'];
      }
    },
    methods: {
      handlePageChange(page) {
        this.$router.push(`/email/${page}/page`);
      }
    },
    mounted() {
      const token = this.$auth.getToken('local');
      this.$store.dispatch('email/load', { page: 1, count: this.count, token  });
    }
  }
</script>
