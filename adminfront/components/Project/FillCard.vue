<template>
  <div>
    <el-row class="mb-3">
      <el-col :span="4">Фото проекта</el-col>
      <el-col :span="20"><UploadPhoto :id="item && item.photo" :on-change-img="onChangeImage" /></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Название</el-col>
      <el-col :span="10"><el-input v-model="info.name"></el-input></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Описание</el-col>
      <el-col :span="10"><el-input v-model="info.description" type="textarea" :rows="4"></el-input></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Порядок вывода</el-col>
      <el-col :span="10"><el-input v-model="info.order"></el-input></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Основной текст</el-col>
      <el-col :span="15">
        <editor :init-value="item && item.text" :change-handler="textChangeHandler" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Editor from '../Editor/Default';
  import UploadPhoto from '../Images/UploadPhoto';

  export default {
    components: {
      Editor,
      UploadPhoto
    },
    props: {
      item: {
        type: Object,
      }
    },
    data: () => ({
      info: {
        name: '',
        description: '',
        link: '',
        order: null
      }
    }),
    methods: {
      textChangeHandler(text) {
        this.$store.dispatch('projects/updateCurrent', { item: { text } });
      },
      onChangeImage(imageId) {
        this.$store.dispatch('projects/updateCurrent', { item: { photo: imageId } });
      }
    },
    watch: {
      'info': {
        deep: true,
        handler() {
          this.$store.dispatch('projects/updateCurrent', { item: this.info });
        }
      },
    },
    mounted() {
      if (this.item) {
        let {name, description, order} = this.item;
        this.info = {name, description, order};
      }
    }
  }
</script>
