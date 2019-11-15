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
      label="Название"
      width="500">
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
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
        return this.$store.getters['projects/list'];
      }
    },
    methods: {
      handleEdit(item) {
        this.$store.dispatch('projects/updateCurrent', { item });
        this.$router.push(`/projects/service/${item.id}/edit`);
      },
      handleDelete(index, item) {
        this.$confirm('Это действие удалит услугу навсегда. Продолжить?', 'Предупреждение', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отменить',
          type: 'warning'
        }).then(() => {
          const { id } = item;
          const token = this.$auth.getToken('local');
          this.$store.dispatch('projects/del', {id, token, index});
          this.$message({
            type: 'success',
            message: 'Услуга успешно удалена'
          });
        }).catch(() => {});
      },
      getImg(id, params) {
        return getImgUrlByIdWithParams(id, params);
      }
    }
  }
</script>
