<template>
  <div class="main-content" id="panel">
    <HeaderAdmin></HeaderAdmin>
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
        <router-link href="#" class="btn btn-sm btn-neutral" to="/user-month">Người dùng</router-link>
        <router-link href="#" class="btn btn-sm btn-neutral" to="/shop-month">Cửa hàng</router-link>
      </div>
    </div>
    <div class="statistic" style="width: 95%; margin: 10px auto">
      <div class="col1">
        <div class="LineChart">
          <ShopChart/>
          <h3 style="text-align: center; font-weight: bold; margin-top: 10px; font-size: 1.2rem"> Biểu đồ 1:Cửa hàng sử
            dụng app qua các tháng</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopChart from "./ShopChart";
import HeaderAdmin from "./HeaderAdmin";

export default {
  name: "OrderMonth",
  components: {
    HeaderAdmin,
    ShopChart
  }
}
</script>

<style scoped>

</style>
