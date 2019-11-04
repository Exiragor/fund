<template>
  <el-row>
    <h1>Добавление новости</h1>
    <el-col :span="5">Фото новости</el-col>
    <el-col :span="19"><UploadPhoto /></el-col>
  </el-row>
</template>

<script>
  import UploadPhoto from '@/components/Images/UploadPhoto';

  export default {
    components: {
      UploadPhoto
    }
  }
</script>
