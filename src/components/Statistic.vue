<template>
  <div class="main-content" id="panel">
    <Header></Header>
    <div class="row align-items-center py-4">
      <div class="col-lg-6 col-7">
        <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
          <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
            <li class="breadcrumb-item"><router-link to="/"><i class="fas fa-home"></i></router-link></li>
            <li class="breadcrumb-item"><router-link to="/statistic">Thống kê</router-link></li>
          </ol>
        </nav>
      </div>
      <div class="col-lg-6 col-5 text-right">
        <router-link href="#" class="btn btn-sm btn-neutral" to="/order-month">Tháng</router-link>
        <router-link href="#" class="btn btn-sm btn-neutral" to="/order-week2">Tuần</router-link>
      </div>
    </div>
    <div class="statistic" style="width: 95%; margin: 10px auto">
      <div class="col1">
        <div class="LineChart">
          <productChart/>
          <h3 style="text-align: center; font-weight: bold; margin-top: 10px; font-size: 1.2rem">
            Biểu đồ 1: Sản phẩm và đơn hàng qua các tháng
          </h3>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header.vue';
import productChart from './ProductChart.vue';
export default {
  name: "order",
  data() {
    return {
      selected: "",
      counter: 0,
      numberWeek: {},
      getWeek: [],
      number: 0,
      listDay: [],
      yeus: [],
      currentYear: new Date().getFullYear(),
    };
  },
  components: {
    Header,
    productChart
  },

};
</script>
<style lang="scss">
.statistic {
  width: 100%;
}
.statistic h1 {
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
