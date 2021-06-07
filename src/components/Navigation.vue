<template>
  <div>
    <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
      <div class="scrollbar-inner">
        <!-- Brand -->
        <div class="sidenav-header  align-items-center">
          <a class="navbar-brand" href="javascript:void(0)">
            <img src="./gilo.png" class="navbar-brand-img" alt="...">
          </a>
        </div>
        <div class="menu-mobile">
          <span class="bm-burger-bars line-style" style="top: 0%;"></span>
          <span class="bm-burger-bars line-style" style="top: 40%;"></span>
          <span class="bm-burger-bars line-style" style="top: 80%;"></span>
        </div>
        <div class="navbar-inner">
          <!-- Collapse -->
          <div class="collapse navbar-collapse" id="sidenav-collapse-main">
            <!-- Nav items -->
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">
                  <i class="fa fa-home"></i>
                  <span class="nav-link-text">Trang quản lý</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/product" >
                  <i class="fas fa-gift"></i>
                  <span class="nav-link-text">Quản lý sản phẩm</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/order">
                  <i class="fa fa-archive"></i>
                  <span class="nav-link-text">Quản lý đơn hàng</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/statistic">
                  <i class="fa fa-wrench"></i>
                  <span class="nav-link-text">Thống kê</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/chat">
                  <i class="fas fa-comment-dots"></i>
                  <span class="nav-link-text">Tin nhắn</span>
                </router-link>
              </li>
              <li class="nav-item" v-bind:style="{background: colorBackground}" @click="changeBackground()">
                <router-link class="nav-link" to="/notification" href='#target2' id='target2'>
                  <i style="color: rgba(0,0,0,.5)!important;" class="fas fa-bell"></i>
                  <span class="nav-link-text">Thông báo</span>
                </router-link>
              </li>
              <li class="nav-item" @click="changeBackground()">
                <router-link class="nav-link" to="/profile" >
                  <i class="fas fa-address-card"></i>
                  <span class="nav-link-text">Tôi</span>
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="logOut()">
                  <i class="fas fa-sign-in-alt"></i>
                  <span class="nav-link-text">Đăng xuất</span>
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
  props: ['dis'],
  data() {
    return {
      data: localStorage.getItem('data'),
      colorBackground: null,
      onclick: false,
      styleObject:{
        color: 'red',
        fontSize: '13px'
      }
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem('data')
      this.$router.push('/login')
    },
  }
};
</script>
<style lang="scss">
//LOGO
.navbar-brand{
  padding: 0!important;
}
.navbar-brand-img{
  padding: 0!important;
  max-width: 110px!important;
  max-height: 100px!important;
}
.nav-link:hover{
  transition: 0.4s all;
  background-color: #bee6e3;
  border-radius: 4px;
  width: 100% !important;
}
.nav-link.active.router-link-active{
  width: 100% !important;
  margin-left: 0rem!important;
  padding-left: 1.6rem!important;
}
.nav-link.active.router-link-active:hover{
  transition: 0.4s all!important;
  background-color: #bee6e3!important;
}
.nav-item.active{
  background: red!important;
}
.nav-item span{
  display: block!important;
}
@media (min-width: 576px){
.menu-mobile{
  display: block;
  height: 30px;
  left: 36px;
  position: absolute;
  top: 36px;
  width: 36px;
  cursor: pointer;
}
.nav-link{
  display: none;
}
}

</style>
