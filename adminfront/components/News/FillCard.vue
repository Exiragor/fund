<template>
  <div>
    <el-row class="mb-3">
      <el-col :span="4">Фото новости</el-col>
      <el-col :span="20"><UploadPhoto :id="news && news.photo" :on-change-img="onChangeImage" /></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Дата новости</el-col>
      <el-col :span="10">
        <el-date-picker
          v-model="info.date"
          type="date"
          format="dd MMMM yyyy"
          value-format="dd MMMM yyyy"
          placeholder="Выбрать дату">
        </el-date-picker>
      </el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Заголовок</el-col>
      <el-col :span="10"><el-input v-model="info.title"></el-input></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Описание</el-col>
      <el-col :span="10"><el-input v-model="info.description" type="textarea" :rows="4"></el-input></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Основной текст</el-col>
      <el-col :span="15">
        <editor :init-value="news && news.text" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Editor from '../Editor/Default';
  import UploadPhoto from '../Images/UploadPhoto';

  export default {
    components: {
      UploadPhoto,
      Editor
    },
    props: {
      news: {
        type: Object,
      }
    },
    data: () => ({
      info: {
        title: '',
        description: '',
        date: ''
      }
    }),
    methods: {
      onChangeImage(imageId) {
        this.$store.dispatch('news/updateCurrent', { news: { photo: imageId } });
      }
    },
    watch: {
      'info': {
        deep: true,
        handler() {
          this.$store.dispatch('news/updateCurrent', { news: this.info });
        }
      },
    },
    mounted() {
      if (this.news) {
        let {title, description, date} = this.news;
        this.info = {title, description, date};
      }
    }
  }
</script>
