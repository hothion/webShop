<template>
  <div class="main-content" id="panel">
    <Header></Header>
    <div class="row align-items-center py-4">
      <div class="col-lg-6 col-7">
        <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
          <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
            <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
            <li class="breadcrumb-item"><a href="#">Thống kê</a></li>
          </ol>
        </nav>
      </div>
      <div class="col-lg-6 col-5 text-right">
        <router-link href="#" class="btn btn-sm btn-neutral" to="/order-month">Tháng</router-link>
        <router-link href="#" class="btn btn-sm btn-neutral" to="/order-weeks">Tuần</router-link>
      </div>
    </div>
    <div class="statistic" style="width: 95%; margin: 10px auto">
      <div class="col1">
        <div class="LineChart">
          <productChart/>
          <h3 style="text-align: center; font-weight: bold; margin-top: 10px; font-size: 1.2rem"> Biểu đồ 1: Sản phẩm và đơn hàng qua các tháng</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productChart from "./ProductChart.vue";
import Header from "./Header.vue";
export default {
  name: "OrderMonth",
  components: {
    productChart,
    Header
  }
}
</script>

<style scoped>

</style>
