<template>
  <div>
    <h1>ДОбавление нового слайда в мини слайдеры</h1>
    <SlidesFillCard />
    <el-row>
      <el-col :offset="9" :span="5">
        <el-button type="success" @click="createNews">Добавить слайд</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import SlidesFillCard from '@/components/Slides/MSFillCard';

  export default {
    components: {
      SlidesFillCard
    },
    methods: {
      createNews() {
        this.$store.dispatch('slides/createNewOne', {
          token: this.$auth.getToken('local'),
          sliderName: 'mini-slider'
        });
        this.$message({
          type: 'success',
          message: 'Слайд успешно добавлен'
        });
        this.$router.push('/slider/mini');
      }
    }
  }
</script>
