<template>
  <div>
    <h1>Редактирование слайда</h1>
    <SlidesFillCard :item="currentSlide" />
    <el-row>
      <el-col :offset="9" :span="5">
        <el-button type="success" @click="updateSlide">Изменить слайд</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {update} from '@/api/slides';
  import SlidesFillCard from '@/components/Slides/MSFillCard';

  export default {
    components: {
      SlidesFillCard
    },
    async fetch ({ store, params }) {
      await store.dispatch("slides/loadOne", { id: params.id });
    },
    computed: {
      currentSlide() {
        return this.$store.getters['slides/current'] || 0;
      }
    },
    methods: {
      async updateSlide() {
        const id = this.currentSlide.id;
        const slide = this.currentSlide;
        const token = this.$auth.getToken('local');
        await update({ id, slide, token });
        this.$message({
          type: 'success',
          message: 'Слайд успешно изменен'
        });
        this.$router.push('/slider/mini');
      }
    }
  }
</script>
