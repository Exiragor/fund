<template>
  <div>
    <h1>Редактирование программы</h1>
    <ItemFillCard :item="current" />
    <el-row>
      <el-col :offset="9" :span="5">
        <el-button type="success" @click="update">Изменить программу</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {update} from '@/api/projects';
  import ItemFillCard from '@/components/Service/FillCard';

  export default {
    components: {
      ItemFillCard
    },
    async fetch ({ store, params }) {
      await store.dispatch("projects/loadOne", { id: params.id });
    },
    computed: {
      current() {
        return this.$store.getters['projects/current'] || 0;
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
          message: 'Программа успешно изменена'
        });
        this.$router.push('/projects/program');
      }
    }
  }
</script>
