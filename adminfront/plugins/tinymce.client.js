// plugins/tinymce.client.js
import Vue from 'vue'
import Editor from '@tinymce/tinymce-vue'

// Ядро
import tinymce from 'tinymce/tinymce'

// Тема (обязательно) – в ней уже есть иконки
import 'tinymce/themes/silver'

// Скин – стили для UI
import 'tinymce/skins/ui/oxide/skin.min.css'

// Импортируем все плагины, которые вы используете
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

// Кастомный плагин 'slider' подключается через external_plugins, его здесь не импортируем

// Регистрируем компонент глобально
Vue.component('tinymce-editor', Editor)
