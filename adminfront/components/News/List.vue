<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="Номер"
      width="75">
      <template slot-scope="scope">
        <span>№ {{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Фото"
      width="100">
      <template slot-scope="scope">
        <img :src="getImg(scope.row.photo, {width: 50, height: 50})" width="50" height="50" />
      </template>
    </el-table-column>
    <el-table-column
      label="Заголовок"
      width="600">
      <template slot-scope="scope">
        <span>{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row)">Редактировать</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Удалить</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import {getImgUrlByIdWithParams} from '@/helpers/index';

  export default {
    computed: {
      tableData() {
        return this.$store.getters['news/newsList'];
      }
    },
    methods: {
      handleEdit(row) {
        this.$store.dispatch('news/updateCurrent', { news: row });
        this.$router.push(`/news/${row.id}/edit`);
      },
      handleDelete() {

      },
      getImg(id, params) {
        return getImgUrlByIdWithParams(id, params);
      }
    }
  }
</script>
