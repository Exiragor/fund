<template>
  <div>
    <h1>Добавление услуги</h1>
    <ItemFillCard />
    <el-row>
      <el-col :offset="9" :span="5">
        <el-button type="success" @click="create">Добавить услугу</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ItemFillCard from '@/components/Service/FillCard';

  export default {
    components: {
      ItemFillCard
    },
    methods: {
      create() {
        this.$store.dispatch('projects/createNewOne', { token: this.$auth.getToken('local'), category: 'service' });
        this.$message({
          type: 'success',
          message: 'Услуга успешно добавлена'
        });
        this.$router.push('/projects/service');
      }
    }
  }
</script>
