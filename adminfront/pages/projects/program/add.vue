<template>
  <div>
    <h1>Добавление программы</h1>
    <ItemFillCard />
    <el-row>
      <el-col :offset="9" :span="5">
        <el-button type="success" @click="create">Добавить программу</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ItemFillCard from '@/components/Program/FillCard';

  export default {
    components: {
      ItemFillCard
    },
    methods: {
      create() {
        this.$store.dispatch('projects/createNewOne', { token: this.$auth.getToken('local'), category: 'program' });
        this.$message({
          type: 'success',
          message: 'Программа успешно добавлена'
        });
        this.$router.push('/projects/program');
      }
    }
  }
</script>
