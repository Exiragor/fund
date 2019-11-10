<template>
  <editor
    api-key="ewvx4lc71tp100vfx4tz5am3r0xudeu8hzvw7zuicqcl38fz"
    v-model="value"
    :init="initOptions"
  ></editor>
</template>

<script>
  import Editor from '@tinymce/tinymce-vue';
  import {uploadFile} from '@/api/files'

  export default {
    components: {
      Editor
    },
    props: {
      initValue: {
        type: String,
        default: ''
      }
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
              uploadFile(this.$auth.getToken('local'), blobInfo.blob())
                .then(res => success(res.url))
                .catch(err => failure(err))
          },
          image_description: false,
          media_dimensions: false,
          file_picker_callback: (cb, value, meta) => {
            let input = document.createElement('input');
            let token = this.$auth.getToken('local');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'audio/* image/*');
            input.onchange = function() {
              let file = this.files[0];

              uploadFile(token, file)
                .then(res => cb(res.url))
                .catch(err => cb(err))
            };

            input.click();
          }
        },
        value: ''
      }
    },
    watch: {
      'value': function() {
        this.$store.dispatch('news/updateCurrent', { news: { text: this.value } });
      }
    },
    mounted() {
      this.value = this.initValue;
    }
  }
</script>
