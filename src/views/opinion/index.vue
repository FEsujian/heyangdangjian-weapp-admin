<template>
  <div class="app-container">暂无内容
    <!-- <el-button type="primary" size="small">新增动态</el-button>
    <el-table
      v-loading="listLoading"
      :data="list"
      style="margin-top:10px;"
      element-loading-text="数据加载中..."
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="动态ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="用户名" width="300">
        <template slot-scope="scope">{{ scope.row.user }}</template>
      </el-table-column>
      <el-table-column label="意见">
        <template slot-scope="scope">
          <span>{{ scope.row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="80" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.status === 1">已读</span>
          <span v-else>未读</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>-->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [
        {
          user: "user",
          display_time: "1988-07-24 10:43:55",
          content: "content",
          status: 1
        },
        {
          content: "content",
          display_time: "1988-07-24 10:43:55",
          user: "user",
          status: 1
        },
        {
          content: "content",
          display_time: "1988-07-24 10:43:55",
          user: "user",
          status: 2
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

