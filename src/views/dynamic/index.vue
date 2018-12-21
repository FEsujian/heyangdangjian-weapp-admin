<template>
  <div class="app-container">
    <el-button type="primary" size="small" @click="newArticle">新增动态</el-button>
    <el-table
      v-loading="loading"
      :data="data"
      style="margin-top:10px;"
      element-loading-text="数据加载中..."
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" prop="id" width="95"></el-table-column>
      <el-table-column label="标题" width="200">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="缩略图" width="120" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.imgUrl" style="height:75px;width:100px;">
        </template>
      </el-table-column>
      <el-table-column label="简介" prop="abstract" min-width="200px" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime| parseTime }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="修改时间" width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.updateTime | parseTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250" align="center">
        <template slot-scope="scope">
          <el-button type="success" size="small" @click="viewArticle(scope.row)">查看</el-button>
          <el-button type="primary" size="small" @click="modifyArticle(scope.row)">修改</el-button>
          <el-button type="danger" size="small" @click="deleteArticle(scope.row)">删除</el-button>
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

    <!-- 新增文章 -->
    <el-dialog
      v-if="dialog.newArticle"
      :visible.sync="dialog.newArticle"
      title="新增动态"
      width="800px"
      center
    >
      <Article :openType="'new'" :artData="articleData" @success="success"></Article>
    </el-dialog>
    <!-- 修改文章 -->
    <el-dialog
      v-if="dialog.modifyArticle"
      :visible.sync="dialog.modifyArticle"
      title="修改动态"
      width="800px"
      center
    >
      <Article :openType="'modify'" :artData="articleData" @success="success"></Article>
    </el-dialog>
    <!-- 查看文章 -->
    <el-dialog
      v-if="dialog.viewArticle"
      :visible.sync="dialog.viewArticle"
      :title="articleData.title"
      width="800px"
      center
    >
      <Article :openType="'view'" :artData="articleData" @success="success"></Article>
    </el-dialog>
  </div>
</template>

<script>
import { findArticleByClassId, deleteArticleById } from "@/api/article";
import { parseTime } from "@/utils";
import Article from "@/components/Article";
export default {
  components: {
    Article
  },
  filters: {
    parseTime
  },
  data() {
    return {
      dialog: {
        newArticle: false,
        modifyArticle: false,
        viewArticle: false
      },
      articleData: {},
      data: [],
      loading: false,
      page: 1,
      pageSize: 10,
      pageData: {}
    };
  },
  created() {
    this.refreshData();
  },
  mounted() {},
  methods: {
    success() {
      this.dialog.newArticle = false;
      this.dialog.modifyArticle = false;
      this.dialog.viewArticle = false;
      this.refreshData();
    },
    // 新建文章
    newArticle() {
      this.articleData = {
        uid: 3,
        title: "",
        abstract: "",
        content: "",
        imgUrl: "",
        author: "",
        videoUrl: "",
        isShowTime: 1
      };
      this.dialog.newArticle = true;
    },
    // 修改文章
    modifyArticle(row) {
      this.articleData = row;
      this.dialog.modifyArticle = true;
    },
    // 删除文章
    deleteArticle(row) {
      const id = row.id;
      this.$confirm("您确定删除这篇文章吗？", "提示", {
        type: "warning"
      })
        .then(() => {
          deleteArticleById({ id })
            .then(res => {
              this.$message.success("删除成功");
              this.refreshData();
            })
            .catch(() => {
              this.$message.success("删除失败");
            });
        })
        .catch(() => {});
    },
    // 查看文章
    viewArticle(row) {
      this.articleData = row;
      this.dialog.viewArticle = true;
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
    },
    refreshData() {
      this.loading = true;
      findArticleByClassId({ id: 3, page: this.page, pageSize: this.pageSize })
        .then(res => {
          this.loading = false;
          this.pageData = res;
          this.data = res.data;
        })
        .catch(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

