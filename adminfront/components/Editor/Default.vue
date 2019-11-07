<template>
  <editor
    api-key="ewvx4lc71tp100vfx4tz5am3r0xudeu8hzvw7zuicqcl38fz"
    v-model="value"
    :init="initOptions"
  ></editor>
</template>

<script>
  import Editor from '@tinymce/tinymce-vue';
  import {uploadImage} from '@/api/images'

  export default {
    components: {
      Editor
    },
    data() {
      return {
        initOptions: {
          height: 500,
          menubar: true,
          language: 'ru',
          language_url: '/js/ru.js',
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount example'
          ],
          toolbar:
            'undo redo | image media link | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat',
          external_plugins: {
            'example': '/js/plugin.js'
          },
          file_picker_types: 'file image media',
          images_upload_handler: (blobInfo, success, failure) => {
              uploadImage(this.$auth.getToken('local'), blobInfo.blob())
                .then(res => success(res))
                .catch(err => failure(err))
          },
          image_description: false
        },
        value: ''
      }
    }
  }
</script>
