<template>
  <div class="app-container">
    <el-button type="primary" size="small">新增活动</el-button>
    <el-table
      v-loading="listLoading"
      :data="list"
      style="margin-top:10px;"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="动态ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="标题" width="300">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="内容">
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
      <el-table-column fixed="right" label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="small">修改</el-button>
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
          content: "content",
          display_time: "1988-07-24 10:43:55",
          title: "标题"
        },
        {
          content: "content",
          display_time: "1988-07-24 10:43:55",
          title: "标题"
        },
        {
          content: "content",
          display_time: "1988-07-24 10:43:55",
          title: "标题"
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

