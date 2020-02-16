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
      },
      changeHandler: {
        type: Function,
        default: () => {}
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
            'insertdatetime media table paste code help wordcount slider'
          ],
          toolbar:
            'undo redo | image media link | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | \
            slider',
          external_plugins: {
            'slider': '/js/plugin-mini-slider.js'
          },
          file_picker_types: 'file image media',
          images_upload_handler: (blobInfo, success, failure) => {
              uploadFile(this.$auth.getToken('local'), blobInfo.blob())
                .then(res => success(res.url))
                .catch(err => failure(err))
          },
          image_description: false,
          media_dimensions: false,
          media_poster: false,
          file_picker_callback: (cb, value, meta) => {
            let input = document.createElement('input');
            let token = this.$auth.getToken('local');
            input.setAttribute('type', 'file');
            // input.setAttribute('accept', 'audio/* image/*');
            input.onchange = function() {
              let file = this.files[0];

              uploadFile(token, file)
                .then(res => {
                  if (meta.filetype === 'file') {
                    cb(res.url + `/${res.file.name}`, {text: res.file.name})
                  } else {
                    cb(res.url, {text: res.file.name})
                  }
                })
                .catch(err => cb(err))
            };

            input.click();
          },
          video_template_callback: function(data) {
            return '<audio controls>' + '\n<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' + '</audio>';
          },
          link_class_list: [
            {title: 'None', value: ''},
            {title: 'File', value: 'file'}
          ]
        },
        value: ''
      }
    },
    watch: {
      'value': function() {
        this.changeHandler(this.value);
        this.$store.dispatch('news/updateCurrent', { news: { text: this.value } });
      }
    },
    mounted() {
      this.value = this.initValue;
    }
  }
</script>
