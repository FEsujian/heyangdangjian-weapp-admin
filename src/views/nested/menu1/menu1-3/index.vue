<template>
  <div class="app-container">
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
      <el-table-column label="头像地址" width="300">
        <template slot-scope="scope">{{ scope.row.url }}</template>
      </el-table-column>
      <el-table-column label="内容">
        <template slot-scope="scope">
          <span>{{ scope.row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column label="图片地址">
        <template slot-scope="scope">{{ scope.row.url }}</template>
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
          user: "用户名",
          content: "content",
          display_time: "1988-07-24 10:43:55",
          title: "标题",
          picurl: "www.baidu.com",
          url: "www.baidu.com"
        },
        {
          user: "用户名",
          content: "content",
          display_time: "1988-07-24 10:43:55",
          title: "标题",
          url: "www.baidu.com",
          picurl: "www.baidu.com"
        },
        {
          user: "用户名",
          content: "content",
          display_time: "1988-07-24 10:43:55",
          title: "标题",
          picurl: "www.baidu.com",
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

