<template>
  <div class="app-container">
    <!-- <el-button type="primary" size="small" @click="dialogVisible = true">新增公开课</el-button> -->
    <el-tabs type="border-card" stretch @tab-click="tabChange">
      <el-tab-pane v-for="classId in classList" :key="classId.id" :label="classId.className">
        <el-button type="primary" size="small" @click="newArticle">新增公开课</el-button>
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
      </el-tab-pane>
    </el-tabs>

    <!-- 新增文章 -->
    <el-dialog
      v-if="dialog.newArticle"
      :visible.sync="dialog.newArticle"
      title="新增公开课"
      width="800px"
      center
    >
      <Article :openType="'new'" :artData="articleData" @success="success"></Article>
    </el-dialog>
    <!-- 修改文章 -->
    <el-dialog
      v-if="dialog.modifyArticle"
      :visible.sync="dialog.modifyArticle"
      title="修改公开课"
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
      :show-close="false"
      width="700px"
      top="5vh"
      center
    >
      <div style="width:650px;max-height:600px;overflow:auto;" v-html="articleData.content"></div>
      <div style="text-align:center">
        <el-button type="primary" style="margin-top:20px;" @click="dialog.viewArticle=false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  findArticleByClassId,
  findClassById,
  deleteArticleById
} from "@/api/article";
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
      tabIndex: 0,
      classList: [],
      articleData: {},
      data: [],
      loading: false,
      page: 1,
      pageSize: 10,
      pageData: {}
    };
  },
  created() {
    this.getClassList();
    this.refreshData(14);
  },
  mounted() {},
  methods: {
    success() {
      this.dialog.newArticle = false;
      this.dialog.modifyArticle = false;
      this.dialog.viewArticle = false;
      this.refreshData(this.classList[this.tabIndex].id);
    },
    // 新建文章
    newArticle() {
      this.articleData = {
        uid: this.classList[this.tabIndex].id,
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
              this.refreshData(this.classList[this.tabIndex].id);
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
    tabChange(val) {
      this.tabIndex = val.index;
      this.refreshData(this.classList[val.index].id);
    },
    getClassList() {
      findClassById({ id: 7 }).then(res => {
        this.classList = res.data;
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
    },
    refreshData(id) {
      this.loading = true;
      findArticleByClassId({ id, page: this.page, pageSize: this.pageSize })
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

