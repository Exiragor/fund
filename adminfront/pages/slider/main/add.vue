<template>
  <div>
    <h1>ДОбавление нового слайда в главный слайдер</h1>
    <SlidesFillCard />
    <el-row>
      <el-col :offset="9" :span="5">
        <el-button type="success" @click="createNews">Добавить слайд</el-button>
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
        this.$store.dispatch('slides/createNewOne', { token: this.$auth.getToken('local'), sliderName: 'main' });
        this.$router.push('/slider/main');
      }
    }
  }
</script>
