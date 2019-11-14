<template>
  <div>
    <h1>Добавление новости</h1>
    <ItemFillCard />
    <el-row>
      <el-col :offset="9" :span="5">
        <el-button type="success" @click="createNews">Добавить блок контента</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ItemFillCard from '@/components/Content/FillCard';

  export default {
    components: {
      ItemFillCard
    },
    methods: {
      createNews() {
        this.$store.dispatch('content/createNewOne', { token: this.$auth.getToken('local') });
        this.$message({
          type: 'success',
          message: 'Блок контента успешно добавлен'
        });
        this.$router.push('/content');
      }
    }
  }
</script>
