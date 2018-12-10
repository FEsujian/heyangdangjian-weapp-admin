<template>
  <div class="dashboard-container">
    <div class="dashboard-text">欢迎进入合阳党建微信小程序后台管理系统</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name", "roles"])
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 40px;
    font-style: italic;
    line-height: 46px;
  }
}
</style>
