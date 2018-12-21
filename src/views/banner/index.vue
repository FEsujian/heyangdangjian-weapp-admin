<template>
  <div class="app-container">
    <div style="height: 400px;">
      <swiper :options="swiperOption" style="height:100%;">
        <swiper-slide v-for="item in list" :key="item.id">
          <img :src="item.imgUrl">
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
    </div>
    <!-- <el-button type="primary" size="small" style="margin:10px 5px 10px;float:right;">新增轮播图</el-button> -->
    <el-table
      v-loading="listLoading"
      :data="list"
      style="margin-top:10px;"
      element-loading-text="数据加载中..."
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="图片ID" prop="id" width="95"></el-table-column>
      <el-table-column label="图片链接" prop="imgUrl"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template slot-scope="scope">
          <el-button type="success" size="small" @click="modifyBanner(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialog.modifyBanner" title="修改轮播图地址" width="500px" center>
      <el-input v-model="modifyData.imgUrl"></el-input>
      <div style="margin-top:20px;text-align:center">
        <el-button @click="dialog.modifyBanner=false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { getBannerList, modifyBannerById } from "@/api/banner";

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
      modifyData: {},
      dialog: {
        modifyBanner: false
      },
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
      list: [],
      listLoading: false
    };
  },
  created() {
    this.refreshData();
  },
  mounted() {},
  methods: {
    refreshData() {
      getBannerList().then(res => {
        this.list = res.data;
      });
    },
    confirm() {
      modifyBannerById(this.modifyData)
        .then(res => {
          this.$message.success("修改成功");
          this.dialog.modifyBanner = false;
          this.refreshData();
        })
        .catch(() => {
          this.$message.error("修改失败");
        });
    },
    modifyBanner(row) {
      this.modifyData = Object.assign({}, row);
      this.dialog.modifyBanner = true;
    }
  }
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
  text-align: center;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>

