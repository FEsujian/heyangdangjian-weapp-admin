<template>
  <div class="app-container" style="text-align:center">
    <tinymce :height="600" v-model="content"/>
    <el-button type="primary" style="margin:10px;">保 存</el-button>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { findArticleById } from "@/api/article";
export default {
  components: {
    Tinymce
  },
  data() {
    return {
      content: ``
    };
  },
  created() {
    findArticleById({ id: 1 }).then(res => {
      console.log(res);
    });
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>

