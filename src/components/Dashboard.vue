<template>
  <div class="main-content" id="panel">
    <!-- Topnav -->
    <Header></Header>
    <!-- Header -->
    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7" style="padding-left: 0!important; margin-left: -10px!important;">
              <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item"><router-link to="/"><i class="fas fa-home"></i></router-link></li>
                  <li class="breadcrumb-item"><a href="#">Trang quản lý</a></li>
                </ol>
              </nav>
            </div>
            <div class="col-lg-6 col-5 text-right">
              <a href="#" class="btn btn-sm btn-neutral" style="background-color: whitesmoke!important;">Mới</a>
              <a href="#" class="btn btn-sm btn-neutral" style="background-color: whitesmoke!important;">Bộ lọc</a>
            </div>
          </div>
          <!-- Card stats -->
          <div class="row">
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Sản phẩm</h5>
                      <span class="h2 font-weight-bold mb-0">350</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                        <i class="fas fa-gift"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                    <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                    <span class="text-nowrap">Kể từ tháng trước</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Đơn hàng</h5>
                      <span class="h2 font-weight-bold mb-0">2,356</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                        <i class="fa fa-archive"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                    <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                    <span class="text-nowrap">Kể từ tháng trước</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Yêu thích</h5>
                      <span class="h2 font-weight-bold mb-0">924</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                        <i class="fas fa-heart"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                    <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                    <span class="text-nowrap">Kể từ tháng trước</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Đánh giá</h5>
                      <span class="h2 font-weight-bold mb-0">49,6</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                        <i class="fas fa-comment-alt"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                    <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                    <span class="text-nowrap">Kể từ tháng trước</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--6" v-if="dataUser === 2">
      <div class="row">
        <div class="col-xl-8">
          <div class="card bg-default">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-light text-uppercase ls-1 mb-1">Tổng Quan</h6>
                  <h5 class="h3 text-white mb-0">Giá trị bán hàng</h5>
                </div>
                <div class="col">
                  <ul class="nav nav-pills justify-content-end">
                    <li class="nav-item mr-2 mr-md-0" data-toggle="chart" data-target="#chart-sales-dark"
                        data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}'
                        data-prefix="$" data-suffix="k">
                      <a href="#" class="nav-link py-2 px-3 active" data-toggle="tab">
                        <span class="d-none d-md-block">Tháng</span>
                        <span class="d-md-none">M</span>
                      </a>
                    </li>
                    <li class="nav-item" data-toggle="chart" data-target="#chart-sales-dark"
                        data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}'
                        data-prefix="$" data-suffix="k">
                      <a href="#" class="nav-link py-2 px-3" data-toggle="tab">
                        <span class="d-none d-md-block">Tuần</span>
                        <span class="d-md-none">W</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-body">
              <!-- Chart -->
              <div class="chart">
                <orderBar/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="card">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-uppercase text-muted ls-1 mb-1">Biểu diễn</h6>
                  <h5 class="h3 mb-0">Sản phẩm bán chạy trong ngày</h5>
                </div>
              </div>
            </div>
            <div class="card-body">
              <!-- Chart -->
              <div class="chart">
                <orderPie/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6" v-if="dataUser === 1">
      <div class="row">
        <div class="col-xl-6">
          <div class="card bg-default">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-light text-uppercase ls-1 mb-1">Tổng Quan</h6>
                  <h5 class="h3 text-white mb-0">Lượng người đăng ký</h5>
                </div>
              </div>
            </div>
            <div class="card-body">
              <!-- Chart -->
              <div class="chart">
                <UserChart/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card bg-default">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-light text-uppercase ls-1 mb-1">Tổng Quan</h6>
                  <h5 class="h3 text-white mb-0">Lượng cửa hàng</h5>
                </div>
              </div>
            </div>
            <div class="card-body">
              <!-- Chart -->
              <div class="chart">
                <ShopChart/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from './Header.vue';
import orderBar from "./OrderBar.vue";
import orderPie from "./OrderPie.vue";
import UserChart from "./admin/UserChart";
import ShopChart from "./admin/ShopChart.vue";
export default {
  components: {
    Header,
    orderBar,
    orderPie,
    UserChart,
    ShopChart
  },
  data(){
    return{
     dataUser: JSON.parse(localStorage.getItem('data')),
    }
  }
}
</script>
