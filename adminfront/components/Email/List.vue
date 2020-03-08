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
      label="Email"
      width="650">
      <template slot-scope="scope">
        <span>{{ scope.row.value }}</span>
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
  export default {
    computed: {
      tableData() {
        return this.$store.getters['email/list'];
      }
    },
    methods: {
      handleDelete(index, item) {
        this.$confirm('Это действие удалит почту навсегда. Продолжить?', 'Предупреждение', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отменить',
          type: 'warning'
        }).then(() => {
          const { id } = item;
          const token = this.$auth.getToken('local');
          this.$store.dispatch('email/del', {id, token, index});
          this.$message({
            type: 'success',
            message: 'Email успешно удален'
          });
        }).catch(() => {});
      }
    }
  }
</script>
