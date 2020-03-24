<template>
  <div>
    <h1>Добавление нового блока для как помочь</h1>
    <SlidesFillCard />
    <el-row>
      <el-col :offset="9" :span="5">
        <el-button type="success" @click="createNews">Добавить блок</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import SlidesFillCard from '@/components/Slides/FillCard';

  export default {
    components: {
      SlidesFillCard
    },
    methods: {
      createNews() {
        this.$store.dispatch('slides/createNewOne', { token: this.$auth.getToken('local'), sliderName: 'help' });
        this.$message({
          type: 'success',
          message: 'блок успешно добавлен'
        });
        this.$router.push('/slider/help');
      }
    }
  }
</script>
