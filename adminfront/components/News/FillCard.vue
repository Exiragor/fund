<template>
  <div>
    <el-row class="mb-3">
      <el-col :span="4">Фото новости</el-col>
      <el-col :span="20"><UploadPhoto /></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Заголовок</el-col>
      <el-col :span="10"><el-input v-model="info.title"></el-input></el-col>
    </el-row>
    <el-row>
      <el-col :span="4">Описание</el-col>
      <el-col :span="10"><el-input v-model="info.title" type="textarea" :rows="4"></el-input></el-col>
    </el-row>
  </div>
</template>

<script>
  import UploadPhoto from '../Images/UploadPhoto';

  export default {
    components: {
      UploadPhoto
    },
    data: () => ({
      info: {
        title: '',
        description: '',
      }
    })
  }
</script>
