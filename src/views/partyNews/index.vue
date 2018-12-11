<template>
  <div class="app-container">
    <el-button type="primary" size="small" @click="dialogVisible = true">新增要闻</el-button>
    <el-table
      v-loading="listLoading"
      :data="list"
      style="margin-top:10px;"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="文章ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="标题" width="200">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="副标题" width="200">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="缩略图" width="120">
        <template slot-scope="scope">
          <img :src="scope.row.imgUrl" style="width:100px;height:70px;">
        </template>
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
    <el-dialog :visible.sync="dialogVisible" title="新增要闻" width="30%">
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
export default {
  components: {},
  data() {
    return {
      dialogVisible: false,
      time: "",
      form: {},
      list: [
        {
          content: `"金色名片"永不退色`,
          display_time: "1988-07-24 10:43:55",
          title: `"金色名片"永不退色`,
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544505387359&di=34349441419325cabbe31609669278e6&imgtype=0&src=http%3A%2F%2Fwww.cnr.cn%2Fnewscenter%2Fspecial%2Fapec%2Fxianchang%2F20141111%2FW020141111393697650511.jpg"
        },
        {
          content: `"金色名片"永不退色`,
          display_time: "1988-07-24 10:43:55",
          title: `"金色名片"永不退色`,
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544505387359&di=34349441419325cabbe31609669278e6&imgtype=0&src=http%3A%2F%2Fwww.cnr.cn%2Fnewscenter%2Fspecial%2Fapec%2Fxianchang%2F20141111%2FW020141111393697650511.jpg"
        },
        {
          content: `"金色名片"永不退色`,
          display_time: "1988-07-24 10:43:55",
          title: `"金色名片"永不退色`,
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544505387359&di=34349441419325cabbe31609669278e6&imgtype=0&src=http%3A%2F%2Fwww.cnr.cn%2Fnewscenter%2Fspecial%2Fapec%2Fxianchang%2F20141111%2FW020141111393697650511.jpg"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit() {
      this.dialogVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

