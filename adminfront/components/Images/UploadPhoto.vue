<template>
  <el-upload
    class="avatar-uploader"
    action="#"
    :show-file-list="false"
    :http-request="uploadFile"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>
<script>
  import {uploadFile} from '@/api/files';
  import {getImgUrlByIdWithParams} from '@/helpers/index';
  export default {
    props: {
      onChangeImg: {
        type: Function,
        default: (imageId) => {}
      },
      id: {
        type: Number|String
      }
    },
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        imageUrl: '',
        imageId: 0
      };
    },
    methods: {
      uploadFile({file}) {
        uploadFile(this.$auth.getToken('local'), file).then(res => {
          this.imageUrl = res.url + '/178/178';
          this.imageId = res.id;
        });
      }
    },
    watch: {
      'imageUrl': function() {
        this.onChangeImg(this.imageId)
      }
    },
    mounted() {
      this.imageId = this.id || 0;
      if (this.imageId > 0) {
        this.imageUrl = getImgUrlByIdWithParams(this.imageId, { width: 178, height: 178 });
      }
    }
  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed black;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
