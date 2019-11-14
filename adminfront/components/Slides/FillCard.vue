<template>
  <div>
    <el-row class="mb-3">
      <el-col :span="4">Фото для слайда</el-col>
      <el-col :span="20"><UploadPhoto :id="item && item.photo" :on-change-img="onChangeImage" /></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Заголовок</el-col>
      <el-col :span="10"><el-input v-model="info.title"></el-input></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Короткое описание</el-col>
      <el-col :span="10"><el-input v-model="info.text" type="textarea" :rows="4"></el-input></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Ссылка</el-col>
      <el-col :span="10"><el-input v-model="info.link"></el-input></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Ссылка на внешний ресурс</el-col>
      <el-col :span="10"><el-input v-model="info.url"></el-input></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Порядок вывода</el-col>
      <el-col :span="10"><el-input v-model="info.order"></el-input></el-col>
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
        default: 'main'
      }
    },
    data: () => ({
      info: {
        title: '',
        text: '',
        link: '',
        order: '',
        url: ''
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
        let {title, text, link, order, url} = this.item;
        this.info = {title, text, link, order, url};
      }
      if (this.sliderName) {
        this.$store.dispatch('slides/updateCurrent', { item: { sliderName: this.sliderName } });
      }
    }
  }
</script>
