<template>
  <div class="app-container">
    <el-table :data="userList" style="margin-top:10px;" border fit highlight-current-row>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="用户名" min-width="200" prop="nickName"></el-table-column>
      <el-table-column label="自定义用户名" min-width="200" prop="customName"></el-table-column>
      <el-table-column label="性别" width="100" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.gender===0">未知</span>
          <span v-if="scope.row.gender===1">男</span>
          <span v-if="scope.row.gender===2">女</span>
        </template>
      </el-table-column>
      <el-table-column label="微信头像" width="100" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.avatarUrl" class="avatar">
        </template>
      </el-table-column>
      <el-table-column label="自定义头像" width="100" align="center">
        <template slot-scope="scope">
          <img v-if="scope.row.customAvatar" :src="scope.row.customAvatar" class="avatar">
        </template>
      </el-table-column>
      <el-table-column align="center" label="创建时间" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | parseTime }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="最后一次登录时间" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.lastLoginTime | parseTime }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="pageData.itemTotal"
      style="text-align:right;margin-top:10px;"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import { getUserList } from "@/api/system";
import { parseTime } from "@/utils";
export default {
  components: {},
  filters: {
    parseTime
  },
  data() {
    return {
      page: 1,
      pageSize: 10,
      userList: [],
      pageData: {}
    };
  },
  created() {
    this.refreshData();
  },
  mounted() {},
  methods: {
    // 刷新数据
    refreshData() {
      getUserList({ page: this.page, pageSize: this.pageSize }).then(res => {
        this.pageData = res;
        this.userList = res.data;
      });
    },
    // 页面大小改变
    handleSizeChange(val) {
      this.page = 1;
      this.pageSize = val;
      this.refreshData();
    },
    // 页面改变
    handleCurrentChange(val) {
      this.page = val;
      this.refreshData();
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 60px;
  height: 60px;
}
</style>

