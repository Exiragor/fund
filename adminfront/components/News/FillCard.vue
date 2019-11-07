<template>
  <div>
    <el-row class="mb-3">
      <el-col :span="4">Фото новости</el-col>
      <el-col :span="20"><UploadPhoto /></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Дата новости</el-col>
      <el-col :span="10">
        <el-date-picker
          v-model="info.date"
          type="date"
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
    <el-row>
      <el-col :span="4">Основной текст</el-col>
      <el-col :span="15">
        <editor />
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
    data: () => ({
      info: {
        title: '',
        description: '',
        date: '',
        text: ''
      }
    })
  }
</script>
