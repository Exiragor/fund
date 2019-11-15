<template>
  <div>
    <h1>Добавление нового проекта</h1>
    <ItemFillCard />
    <el-row>
      <el-col :offset="9" :span="5">
        <el-button type="success" @click="create">Добавить проект</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ItemFillCard from '@/components/Project/FillCard';

  export default {
    components: {
      ItemFillCard
    },
    methods: {
      create() {
        this.$store.dispatch('projects/createNewOne', { token: this.$auth.getToken('local'), category: 'project' });
        this.$message({
          type: 'success',
          message: 'Проект успешно добавлен'
        });
        this.$router.push('/projects/project');
      }
    }
  }
</script>
