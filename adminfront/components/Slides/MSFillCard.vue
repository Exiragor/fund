<template>
  <div>
    <el-row class="mb-3">
      <el-col :span="4">Фото для слайда</el-col>
      <el-col :span="20"><UploadPhoto :id="item && item.photo" :on-change-img="onChangeImage" /></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Название мини-слайдера</el-col>
      <el-col :span="10"><el-input v-model="info.prefix"></el-input></el-col>
    </el-row>
  </div>
</template>

<script>
  import UploadPhoto from '../Images/UploadPhoto';

  export default {
    components: {
      UploadPhoto
    },
    props: {
      item: {
        type: Object,
      },
      sliderName: {
        type: String,
        default: 'mini-slider'
      }
    },
    data: () => ({
      info: {
        prefix: '',
        order: ''
      }
    }),
    methods: {
      onChangeImage(imageId) {
        this.$store.dispatch('slides/updateCurrent', { item: { photo: imageId } });
      }
    },
    watch: {
      'info': {
        deep: true,
        handler() {
          this.$store.dispatch('slides/updateCurrent', { item: this.info });
        }
      },
    },
    mounted() {
      if (this.item) {
        let {prefix, order} = this.item;
        this.info = {prefix, order};
      }
      if (this.sliderName) {
        this.$store.dispatch('slides/updateCurrent', { item: { sliderName: this.sliderName } });
      }
    }
  }
</script>
