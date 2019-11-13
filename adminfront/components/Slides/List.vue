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
        return this.$store.getters['slides/list'];
      }
    },
    methods: {
      handleEdit(item) {
        this.$store.dispatch('slides/updateCurrent', { item });
        this.$router.push(`/slider/main/${item.id}/edit`);
      },
      handleDelete(index, item) {
        this.$confirm('Это действие удалит слайд навсегда. Продолжить?', 'Предупреждение', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отменить',
          type: 'warning'
        }).then(() => {
          const { id } = item;
          const token = this.$auth.getToken('local');
          this.$store.dispatch('slides/del', {id, token, index});
          this.$message({
            type: 'success',
            message: 'Слайд успешно удален'
          });
        }).catch(() => {});
      },
      getImg(id, params) {
        return getImgUrlByIdWithParams(id, params);
      }
    }
  }
</script>
