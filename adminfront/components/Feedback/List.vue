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
      label="Имя"
      width="250">
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Телефон"
      width="150">
      <template slot-scope="scope">
        <span>{{ scope.row.phone }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Email"
      width="150">
      <template slot-scope="scope">
        <span>{{ scope.row.email }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Текст"
      width="600">
      <template slot-scope="scope">
        <span>{{ scope.row.text }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="">
      <template slot-scope="scope">
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
        return this.$store.getters['feedback/list'];
      }
    },
    methods: {
      handleDelete(index, item) {
        this.$confirm('Это действие удалит обращение навсегда. Продолжить?', 'Предупреждение', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отменить',
          type: 'warning'
        }).then(() => {
          const { id } = item;
          const token = this.$auth.getToken('local');
          this.$store.dispatch('feedback/del', {id, token, index});
          this.$message({
            type: 'success',
            message: 'Обращение успешно удалено'
          });
        }).catch(() => {});
      },
      getImg(id, params) {
        return getImgUrlByIdWithParams(id, params);
      }
    }
  }
</script>
