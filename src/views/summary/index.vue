<template>
  <div class="app-container" style="text-align:center">
    <tinymce :height="600" v-model="data.content"/>
    <el-button type="primary" style="margin:10px;" @click="updateArticleById">保 存</el-button>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { findArticleById, updateArticleById } from "@/api/article";
export default {
  components: {
    Tinymce
  },
  data() {
    return {
      data: {}
    };
  },
  created() {
    this.refreshData();
  },
  mounted() {},
  methods: {
    refreshData() {
      findArticleById({ id: 1 }).then(res => {
        this.data = res.data[0];
      });
    },
    updateArticleById() {
      updateArticleById(this.data).then(res => {
        this.$message.success("保存成功");
        this.refreshData();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

