<template>
  <div>
    <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
      <div class="scrollbar-inner">
        <div class="sidenav-header  align-items-center">
          <a class="navbar-brand" href="javascript:void(0)">
            <img src="https://www.enic.it/wp-content/uploads/2019/11/gilo-Logo.png" class="navbar-brand-img" alt="...">
          </a>
        </div>
        <div class="navbar-inner">
          <!-- Collapse -->
          <div class="collapse navbar-collapse" id="sidenav-collapse-main">
            <!-- Nav items -->
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link active">
                  <i class="fa fa-home"></i>
                  <span class="nav-link-text">Trang quản lý</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/user">
                  <i class="fas fa-gift"></i>
                  <span class="nav-link-text">Quản lý người dùng</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/shop">
                  <i class="fa fa-archive"></i>
                  <span class="nav-link-text">Quản lý cửa hàng</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/statisticAdmin">
                  <i class="fa fa-wrench"></i>
                  <span class="nav-link-text">Thống kê</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/notificationAdmin">
                  <i class="fas fa-bell"></i>
                  <span class="nav-link-text">Thông báo</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/profile">
                  <i class="fas fa-address-card"></i>
                  <span class="nav-link-text" >Tôi</span>
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="logOut()">
                  <i class="fas fa-sign-in-alt"></i>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "navigation",
  data() {
    return {
      data: localStorage.getItem('data'),
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem('data')
      this.$router.push('/login')
    }
  }
};
</script>
<style>
.navbar-vertical .navbar-brand-img, .navbar-vertical .navbar-brand > img {
  max-width: 100%;
  max-height: 4rem;
}

</style>
