<template>
  <div class="app-container">
    <div style="height: 400px;">
      <swiper :options="swiperOption" style="height:100%;">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
    </div>
    <el-button type="primary" size="small" style="margin:10px 5px 10px;float:right;">新增轮播图</el-button>
    <el-table
      v-loading="listLoading"
      :data="list"
      style="margin-top:10px;"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="图片ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="图片描述">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="图片链接" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template slot-scope="scope">
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: { swiper, swiperSlide },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      list: [
        {
          author: "name",
          display_time: "1988-07-24 10:43:55",
          id: "510000201103067330",
          pageviews: 2420,
          status: "deleted",
          title: "Hik fivlsqgt sqceyl jllyb xhjtub trdaj"
        },
        {
          author: "name",
          display_time: "1988-07-24 10:43:55",
          id: "510000201103067330",
          pageviews: 2420,
          status: "deleted",
          title: "Hik fivlsqgt sqceyl jllyb xhjtub trdaj"
        },
        {
          author: "name",
          display_time: "1988-07-24 10:43:55",
          id: "510000201103067330",
          pageviews: 2420,
          status: "deleted",
          title: "Hik fivlsqgt sqceyl jllyb xhjtub trdaj"
        }
      ],
      listLoading: false
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 100% !important;
  width: 100%;
}
.swiper-slide {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  &.slide-1 {
    background-image: url("https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-1.jpg");
  }
  &.slide-2 {
    background-image: url("https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-6.jpg");
  }
  &.slide-3 {
    background-image: url("https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-8.jpg");
  }
}
</style>

