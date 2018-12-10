<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      style="margin-top:10px;"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="用户名" width="300">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="头像地址">
        <template slot-scope="scope">
          <span>{{ scope.row.url }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [
        {
          name: "name",
          display_time: "1988-07-24 10:43:55",
          url: "www.baidu.com"
        },
        {
          name: "name",
          display_time: "1988-07-24 10:43:55",
          url: "www.baidu.com"
        },
        {
          name: "name",
          display_time: "1988-07-24 10:43:55",
          url: "www.baidu.com"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>

