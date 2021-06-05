<template>
  <div class="naviga">
    <input type="checkbox" id="ham-menu">
    <label for="ham-menu">
      <div class="hide-des">
        <span class="menu-line"></span>
        <span class="menu-line"></span>
        <span class="menu-line"></span>
        <span class="menu-line"></span>
        <span class="menu-line"></span>
        <span class="menu-line"></span>
      </div>

    </label>
    <div class="full-page-green"></div>
    <div class="ham-menu">
      <ul class="navbar-nav">
        <li class="nav-item" style="text-align: center!important;">
          <img src="./gilo.png" class="navbar-brand-img" alt="anh logo" style="text-align: center">
        </li>
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
            <i style="color: rgba(0,0,0,.5)!important;" class="fas fa-bell"></i>
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
            <span class="nav-link-text" >Đăng xuất</span>
          </a>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>
/*REPSONSIVE*/

@media screen and (min-width: 600px) {
  .collapse.navbar-collapse a span {
    display: none;
    padding: 0!important;
  }
  #navbarSupportedContent{
    padding-left: 0!important; ;
  }
  #navbar-search-main{
    margin-left: 25px!important;
  }
}

@media screen and (min-width: 1200px) {
  label[for="ham-menu"] {
    display: none!important;
    padding: 0!important;
  }
  #navbar-search-main{
    margin-left: 0px!important;
  }
}

/*navigation*/
@media screen and (max-width: 766px) {
  label[for="ham-menu"] {
    margin-left: 0px!important;
  }
  #navbar-search-main{
    margin-left: 55px!important;
  }
  .navbar-nav{
    margin-left: 50px!important;
  }
}
@media screen and (max-width: 1006px) {
  .ham-menu{
    width: 300px!important;
  }
}

@media screen and (max-width: 1199px) {
  label[for="ham-menu"] {
    display: block;
    position: fixed;
    top: 0px;
    margin-left: -30px;
    z-index: 999;
    width: 50px;
    height: 40px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid grey;
  }
  .navbar-nav {
    margin-top: 0px!important;
  }
  .navbar-dark .navbar-nav .nav-link{
    display: flex!important;
  }
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
#ham-menu {
  display: none;
}
label[for="ham-menu"] {
  display: block;
  position: fixed;
  top: 0px;
  margin-left: -30px;
  z-index: 999;
  width: 50px;
  height: 40px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid grey;
}
.navbar-dark .navbar-nav .nav-link{
  display: flex!important;
}
.ham-menu {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;  width: 50vw;
  height: 100%;
  position: fixed;
  top: 0;
  visibility: hidden;
  transform: translate(-110%);
  z-index: 998;
  background-color: white;
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -30px;
  width: 300px!important;
}
.ham-menu > ul {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding: 10px 0;
  height: 50%;
}
.ham-menu > ul > li {
  font-size: 1.5rem;
  white-space: nowrap;
  letter-spacing: 0.1em;
  cursor: pointer;
  color: white;
}
.ham-menu ul li i{
  margin-right: 10px;
  color: grey;
  margin-top: 10px;
}
#ham-menu:checked + label {
  background-color: transparent;
  border-color: green;
}
#ham-menu:checked ~ div.ham-menu {
  transform: translate(0px);
  visibility: visible;
}

#ham-menu:checked ~ div.full-page-green {
  display: block;
  opacity: 1;
  visibility: visible;
}
[for="ham-menu"] > div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  align-items: center;
}
.menu-line {
  display: block;
  width: 16px;
  height: 2px;
  border: none;
  margin: 5px 0 5px;
  border-top-left-radius: 1px;
  border-bottom-left-radius: 1px;
  background-color: green;
  transition: 500ms;
  transform-origin: right center
}
[for="ham-menu"] > div > span:nth-child(4),
[for="ham-menu"] > div > span:nth-child(5),
[for="ham-menu"] > div > span:nth-child(6) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  transform-origin: left center;
}
#ham-menu:checked + label span {
  background-color: green;
}
#ham-menu:checked + label span:nth-child(2),
#ham-menu:checked + label span:nth-child(5) {
  transform: scale(0);
}
#ham-menu:checked + label span:nth-child(1) {
  transform: translateY(17px) rotate(45deg);
}
#ham-menu:checked + label span:nth-child(4) {
  transform: translateY(17px) rotate(-45deg);
}
#ham-menu:checked + label span:nth-child(3) {
  transform: translateY(-17px) rotate(-45deg);
}
#ham-menu:checked + label span:nth-child(6) {
  transform: translateY(-17px) rotate(45deg);
}

a {
  font-size: 1rem;
  line-height: 2em;
  word-spacing: 0.3em;
  letter-spacing: 0.1em;
  font-family: "OpenSansCondensed-Light";
  display: inline;
  font-weight: bold;
  padding: 7px;
  color: red;
}
a::after {
  content: "\e806";
  display: inline-block;
  font-family: fontello;
  padding: 5px;
  font-size: 1rem;
  transform: rotate(-90deg);
}
.text {
  font-size: 1.1rem;
  line-height: 2.5em;
  word-spacing: 0.5em;
  letter-spacing: 0.1em;
  font-family: "OpenSansCondensed-Bold", sans-serif;
}
.title {
  font-size: 1.1rem;
  line-height: 2.5em;
  word-spacing: 0.5em;
  letter-spacing: 0.1em;
  font-family: "OpenSansCondensed-Bold", sans-serif;
  color: red;
  padding: 10px;
}
.heading {
  font-size: 1.2rem;
  line-height: 1.5em;
  word-spacing: 0.5em;
  letter-spacing: 0.1em;
  font-family: "Patua One";
}
.centre-text {
  text-align: center;
}
.bold-text {
  font-weight: bold;
}

</style>
