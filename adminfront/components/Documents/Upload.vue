<template>
  <el-upload
    class="upload-demo"
    ref="upload"
    action="#"
    :http-request="uploadFile"
    :auto-upload="false">
    <el-button slot="trigger" size="small" type="primary">Выбрать файл</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">Загрузить файлы</el-button>
  </el-upload>
</template>

<script>
  import {uploadFile} from "@/api/files";

  export default {
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      uploadFile({file}) {
        uploadFile(this.$auth.getToken('local'), file).then(res => {
          console.log(res);
        });
      }
    }
  }
</script>
