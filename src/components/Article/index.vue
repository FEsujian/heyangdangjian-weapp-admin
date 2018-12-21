<template>
  <div class="app-container" style="text-align:center">
    <el-form v-if="openType!=='view'" :model="articleData" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="articleData.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input v-model="articleData.abstract" placeholder="请输入简介"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-input v-model="articleData.imgUrl" placeholder="请输入封面图片链接"></el-input>
      </el-form-item>
      <el-form-item label="视频链接">
        <el-input v-model="articleData.videoUrl" placeholder="请输入视频链接"></el-input>
      </el-form-item>
    </el-form>
    <tinymce :height="300" v-model="articleData.content"/>
    <el-button
      v-if="openType!=='view'"
      type="primary"
      style="margin:10px;"
      @click="saveArticleById"
    >保 存</el-button>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { updateArticleById, newArticle } from "@/api/article";
export default {
  components: {
    Tinymce
  },
  props: {
    // 新建文章ID
    newArticleUID: {
      type: String,
      default: ""
    },
    // 文章数据
    artData: {
      type: Object,
      default: function() {
        return {};
      }
    },
    // 打开类型
    openType: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      articleData: {}
    };
  },
  watch: {
    artData: {
      handler: function(val, oldVal) {
        if (!val) return;
        this.articleData = Object.assign({}, val);
      },
      deep: true,
      immediate: true
    }
  },
  created() {},
  mounted() {},
  methods: {
    saveArticleById() {
      switch (this.openType) {
        case "new":
          newArticle(this.articleData)
            .then(res => {
              this.$message.success("保存成功");
              this.$emit("success");
            })
            .catch(() => {
              this.$message.error("保存失败");
            });
          break;
        case "modify":
          updateArticleById(this.articleData)
            .then(res => {
              this.$message.success("保存成功");
              this.$emit("success");
            })
            .catch(() => {
              this.$message.error("保存失败");
            });
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
