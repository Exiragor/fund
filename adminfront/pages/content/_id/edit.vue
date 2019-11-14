<template>
  <div>
    <h1>Редактирование блока контента</h1>
    <ItemsFillCard :item="current" />
    <el-row>
      <el-col :offset="9" :span="5">
        <el-button type="success" @click="update">Изменить блок контента</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {update} from '@/api/content';
  import ItemsFillCard from '@/components/Content/FillCard';

  export default {
    components: {
      ItemsFillCard
    },
    async fetch ({ store, params }) {
      await store.dispatch("content/loadOne", { alias: params.id });
    },
    computed: {
      current() {
        return this.$store.getters['content/current'] || 0;
      }
    },
    methods: {
      async update() {
        const id = this.current.id;
        const item = this.current;
        const token = this.$auth.getToken('local');
        await update({ id, item, token });
        this.$message({
          type: 'success',
          message: 'Новость успешно изменена'
        });
        this.$router.push('/content');
      }
    }
  }
</script>
