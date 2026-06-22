// plugins/tinymce.client.js
import Vue from 'vue'
import Editor from '@tinymce/tinymce-vue'

// Импортируем ядро
import tinymce from 'tinymce/tinymce'

// Импортируем тему, скины, плагины
import 'tinymce/themes/silver'
import 'tinymce/icons/default'
import 'tinymce/skins/ui/oxide/skin.min.css'

// Импортируем нужные плагины (все, что вы используете)
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/link'
import 'tinymce/plugins/image'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/print'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/code'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/media'
import 'tinymce/plugins/table'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/help'
import 'tinymce/plugins/wordcount'
// Если у вас кастомный плагин slider, он уже подключается отдельно через external_plugins

// Регистрируем компонент глобально
Vue.component('tinymce-editor', Editor)
