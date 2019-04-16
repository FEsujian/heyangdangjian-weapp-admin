<template>
  <div class="app-container">
    <el-button type="primary" size="small" @click="newVideo">新增党建视频</el-button>
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
      <el-table-column label="视频标题" width="200">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="视频缩略图" width="120" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.imgUrl" style="height:75px;width:100px;">
        </template>
      </el-table-column>
      <el-table-column label="视频地址" prop="videoUrl" min-width="200px" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime| parseTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
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

    <!-- 新增党建视频 -->
    <el-dialog
      v-if="dialog.newVideo"
      :visible.sync="dialog.newVideo"
      title="新增党建视频"
      width="600px"
      center
      @close="closeDialog"
    >
      <el-form :model="videoData" label-width="120px">
        <el-form-item label="标题">
          <el-input v-model="videoData.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="视频链接">
          <el-input v-model="videoData.videoUrl" placeholder="请输入视频链接"></el-input>
        </el-form-item>
        <el-form-item label="视频缩略图">
          <span>上传图片只能是.jpg格式,大小不超过2M</span>
          <el-upload
            :on-success="handleAvatarSuccess"
            :show-file-list="false"
            :action="uploadUrl"
            :before-upload="beforeAvatarUpload"
            class="avatar-uploader"
          >
            <img v-if="uploadImgUrl" :src="uploadImgUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div style="text-align:center;">
        <el-button type="primary" style="margin:10px;" @click="saveVideo">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getVideoList, deleteVideoById, newVideo } from "@/api/video";
import { parseTime } from "@/utils";
export default {
  components: {},
  filters: {
    parseTime
  },
  data() {
    return {
      dialog: {
        newVideo: false
      },
      uploadImgUrl: "",
      renturnImgUrl: "",
      videoData: {},
      data: [],
      loading: false,
      page: 1,
      pageSize: 10,
      pageData: {}
    };
  },
  computed: {
    uploadUrl() {
      return process.env.VUE_APP_BASE_API + "/uploadFile";
    }
  },
  created() {
    this.refreshData();
  },
  methods: {
    success() {
      this.closeDialog();
      this.refreshData();
    },
    // 新建视频
    newVideo() {
      this.videoData = {};
      this.dialog.newVideo = true;
    },
    // 保存视频
    saveVideo() {
      this.videoData.imgUrl = this.renturnImgUrl;
      newVideo(this.videoData).then(data => {
        this.$message.success("新增党建视频成功");
        this.success();
      });
    },
    closeDialog() {
      this.dialog.newVideo = false;
      this.videoData = {};
      this.uploadImgUrl = "";
      this.renturnImgUrl = "";
    },
    // 图片上传成功
    handleAvatarSuccess(res, file) {
      this.renturnImgUrl = res.fileUrl;
      this.uploadImgUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    // 删除视频
    deleteArticle(row) {
      const id = row.id;
      this.$confirm("您确定删除这个视频吗？", "提示", {
        type: "warning"
      })
        .then(() => {
          deleteVideoById({ id })
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
      getVideoList({ page: this.page, pageSize: this.pageSize })
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
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 178px;
  height: 178px;
  line-height: 178px;
}
.avatar-uploader:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
