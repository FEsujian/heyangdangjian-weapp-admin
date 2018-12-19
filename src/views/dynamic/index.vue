<template>
  <div class="app-container">
    <el-button type="primary" size="small" @click="dialogVisible = true">新增动态</el-button>
    <el-table
      :data="data"
      style="margin-top:10px;"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" prop="id" width="95"></el-table-column>
      <el-table-column label="标题" width="400">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="简介" prop="abstract" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime| parseTime }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="修改时间" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.updateTime | parseTime }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="250" align="center">
        <template slot-scope="scope">
          <el-button type="success" size="small">查看</el-button>
          <el-button type="primary" size="small">修改</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogVisible" title="新增动态" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.name" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker v-model="time" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="form.content" :rows="2" type="textarea" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { findArticleByClassId } from "@/api/article";
import { parseTime } from "@/utils";
export default {
  components: {},
  filters: {
    parseTime
  },
  data() {
    return {
      dialogVisible: false,
      time: "",
      form: {},
      data: []
    };
  },
  created() {
    this.refreshData();
  },
  mounted() {},
  methods: {
    refreshData() {
      findArticleByClassId({ id: 3, page: 1, pageSize: 6 }).then(res => {
        this.data = res.data;
      });
    },
    onSubmit() {
      this.dialogVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

