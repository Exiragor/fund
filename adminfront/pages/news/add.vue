<template>
  <div>
    <h1>Добавление новости</h1>
    <NewsFillCard />
    <el-row>
      <el-col :offset="9" :span="5">
        <el-button type="success" @click="createNews">Добавить новость</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import NewsFillCard from '@/components/News/FillCard';

  export default {
    components: {
      NewsFillCard
    },
    methods: {
      createNews() {
        this.$store.dispatch('news/createNewOne', { token: this.$auth.getToken('local') });
        this.$router.push('/news');
      }
    }
  }
</script>
