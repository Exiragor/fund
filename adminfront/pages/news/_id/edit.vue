<template>
  <div>
    <h1>Редактирование новости новости</h1>
    <NewsFillCard :news="currentNews" />
    <el-row>
      <el-col :offset="9" :span="5">
        <el-button type="success" @click="updateNews">Изменить новость</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {updateNews} from '@/api/news';
  import NewsFillCard from '@/components/News/FillCard';

  export default {
    components: {
      NewsFillCard
    },
    async fetch ({ store, params }) {
      await store.dispatch("news/loadOneNews", { id: params.id });
    },
    computed: {
      currentNews() {
        return this.$store.getters['news/currentNews'] || 0;
      }
    },
    methods: {
      async updateNews() {
        const id = this.currentNews.id;
        const news = this.currentNews;
        const token = this.$auth.getToken('local');
        await updateNews({ id, news, token });
        this.$router.push('/news');
      }
    }
  }
</script>
