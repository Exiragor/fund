<template>
  <div>
    <h1>Редактирование блока как помочь</h1>
    <SlidesFillCard slider-name="help" :item="currentSlide" />
    <el-row>
      <el-col :offset="9" :span="5">
        <el-button type="success" @click="updateSlide">Изменить блок</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {update} from '@/api/slides';
  import SlidesFillCard from '@/components/Slides/FillCard';

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
          message: 'Блок успешно изменен'
        });
        this.$router.push('/slider/help');
      }
    }
  }
</script>
