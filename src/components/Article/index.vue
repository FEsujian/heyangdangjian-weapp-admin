<template>
  <div class="app-container" style="text-align:center">
    <el-form v-if="openType!=='view'" :model="articleData" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="articleData.title"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input v-model="articleData.abstract"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-input v-model="articleData.imgUrl"></el-input>
      </el-form-item>
      <el-form-item label="视频链接">
        <el-input v-model="articleData.videoUrl"></el-input>
      </el-form-item>
    </el-form>
    <tinymce :height="300" v-model="articleData.content"/>
    <el-button
      v-if="openType!=='view'"
      type="primary"
      style="margin:10px;"
      @click="updateArticleById"
    >保 存</el-button>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
// import { findArticleById, updateArticleById } from "@/api/article";
export default {
  components: {
    Tinymce
  },
  props: {
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
  created() {
    // this.refreshData();
  },
  mounted() {},
  methods: {
    // refreshData() {
    //   findArticleById({ id: 1 }).then(res => {
    //     this.data = res.data[0];
    //   });
    // },
    // updateArticleById() {
    //   updateArticleById({ data: this.data, id: 1 }).then(res => {
    //     this.$message.success("保存成功");
    //     this.refreshData();
    //   });
    // }
  }
};
</script>

<style lang="scss" scoped>
</style>
