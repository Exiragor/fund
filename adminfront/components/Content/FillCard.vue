<template>
  <div>
    <el-row class="mb-3">
      <el-col :span="4">Название</el-col>
      <el-col :span="10"><el-input v-model="info.name"></el-input></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Псевдоним</el-col>
      <el-col :span="10"><el-input v-model="info.alias"></el-input></el-col>
    </el-row>
    <el-row class="mb-3">
      <el-col :span="4">Контент</el-col>
      <el-col :span="15">
        <editor :init-value="item && item.value" :change-handler="textChangeHandler" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Editor from '../Editor/Default';

  export default {
    components: {
      Editor
    },
    props: {
      item: {
        type: Object,
      }
    },
    data: () => ({
      info: {
        name: '',
        alias: '',
        value: ''
      }
    }),
    methods: {
      textChangeHandler(value) {
        this.$store.dispatch('content/updateCurrent', { item: { value } });
      }
    },
    watch: {
      'info': {
        deep: true,
        handler() {
          this.$store.dispatch('content/updateCurrent', { item: this.info });
        }
      },
    },
    mounted() {
      if (this.item) {
        let {name, alias, value} = this.item;
        this.info = {name, alias, value};
      }
    }
  }
</script>
