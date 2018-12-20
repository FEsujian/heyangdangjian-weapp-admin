<template>
  <div class="app-container">
    <el-button type="primary" size="small" @click="dialogVisible = true">新增党章党规</el-button>
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
          <el-button type="primary" size="small">修改</el-button>
          <el-button type="danger" size="small">删除</el-button>
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
    <el-dialog :visible.sync="dialog.newArticle" title="新增党章党规" width="800px" center>
      <Article :openType="'view'"></Article>
    </el-dialog>
    <!-- 查看文章 -->
    <el-dialog :visible.sync="dialog.viewArticle" :title="articleData.title" width="800px" center>
      <Article :openType="'view'" :artData="articleData"></Article>
    </el-dialog>
  </div>
</template>

<script>
import { findArticleByClassId } from "@/api/article";
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
      pageSize: 6,
      pageData: {}
    };
  },
  created() {
    this.refreshData();
  },
  mounted() {},
  methods: {
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
      findArticleByClassId({ id: 6, page: this.page, pageSize: this.pageSize })
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

