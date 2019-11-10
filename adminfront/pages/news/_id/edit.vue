<template>
  <div>
    <h1>Редактирование новости новости</h1>
    <NewsFillCard :news="currentNews" />
    <el-row>
      <el-col :offset="9" :span="5">
        <el-button type="success" @click="createNews">Изменить новость</el-button>
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
    async fetch ({ store, params }) {
      // await store.dispatch("news/loadNews", { productID: params.id }) написать
    },
    computed: {
      currentNews() {
        return this.$store.getters['news/currentNews'];
      }
    },
    methods: {
      createNews() {
        this.$store.dispatch('news/createNewOne', { token: this.$auth.getToken('local') });
        this.$router.push('/news');
      }
    }
  }
</script>
