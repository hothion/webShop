<template>
  <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom" >
    <div class="container-fluid">
     <MenuAdmin />
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Search form -->
        <form class="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
          <div class="form-group mb-0">
            <div class="input-group input-group-alternative input-group-merge">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
              <input class="form-control" placeholder="Tìm kiếm..." type="text" v-model="search">
            </div>
          </div>
          <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main"
                  aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </form>
        <div class=" ml-md-auto">
          <button @click="show" class="btnbell"><i class="fas fa-bell"></i></button>
          <transition name="drop-down">
            <div class="dropdown-menu dropdown-menu-xl show" v-show="showBox">
              <!-- Dropdown header -->
              <div class="px-3 py-3">
                <!-- <h6 class="text-sm text-muted m-0">Bạn có<strong class="text-primary"> 13</strong> thông báo.</h6> -->
                <h6 class="text-sm text-muted m-0">Thông báo <span>{{ nontifications.length }}</span> thông báo</h6>
              </div>
              <!-- List group -->
              <div class="list-group list-group-flush" v-for="(nontification, i) in nontifications" :key="i">
                <a href="#!" class="list-group-item list-group-item-action">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Avatar -->
                      <img :src="nontification.img" class="avatar rounded-circle">
                    </div>
                    <div class="col ml--2">
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <h4 class="mb-0 text-sm">{{ nontification.account }}</h4>
                        </div>
                        <div class="text-right text-muted">
                          <small>{{ $date(nontification.time).format('DD/MM/YYYY') }}</small>
                        </div>
                      </div>
                      <p class="text-sm mb-0">{{ nontification.content }}</p>
                    </div>
                    <button class="btnDele" v-on:submit.prevent="DeleteNonti(i)" @click="DeleteNonti(nontification.id)">
                      <i class="fa fa-remove"></i></button>
                  </div>
                </a>
              </div>
              <!-- View all -->
              <a href="#!" class="dropdown-item text-center text-primary font-weight-bold py-3">Xem tất cả</a>
            </div>
          </transition>
        </div>

        <div class="action ml-auto ml-md-0">
          <button class="btnprofile" @click="show2">
            <div class="media align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" :src="profiles.img">
                  </span>
              <div class="media-body  ml-2  d-none d-lg-block">
                <span class="mb-0 text-sm  font-weight-bold">{{ profiles.account }}</span>
              </div>
            </div>
          </button>
          <transition name="slide-fade">
            <div class="menu show" v-show="Dropit">
              <h3> xin chào </h3>
              <ul>
                <router-link to="/profile">
                  <li><i class="fas fa-user"></i><h6>Thông tin cá nhân</h6></li>
                </router-link>
                <li><i class="fas fa-user-edit"></i><h6>Sửa thông tin</h6></li>
                <li><i class="fas fa-user-cog"></i><h6>Cài đặt</h6></li>
                <a @click="logOut()">
                  <li><i class="fas fa-running"></i><h6>Đăng xuất</h6></li>
                </a>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import axios from 'axios'
import MenuAdmin from "../MenuAdmin";
export default {
  components:{MenuAdmin},
  data() {
    return {
      showBox: false,
      Dropit: false,
      nontifications: [],
      profiles: {},
      search: null,
      data: localStorage.getItem('data'),
      dis: 'block !important'
    }
  },
  created() {
    this.getNonti();
    this.getData();
  },
  methods: {
    toggleMenu(){
      var x = document.getElementById("navbarSupportedContent");
      if (x.className === "collapse navbar-collapse") {
        x.className += " responsive";
      } else {
        x.className = "collapse navbar-collapse";
      }
      console.log()
    },
    getData() {
      const idShop = JSON.parse(localStorage.getItem("data"));
      axios.get('https://api-gilo.herokuapp.com/api/profileAdmin/' + idShop)
          .then(response => (
              console.log(response),
                  this.profiles = response.data
          ))
    },
    getNonti() {
      axios.get("https://api-gilo.herokuapp.com/api/noficationshop").then((response) => {
        this.nontifications = response.data;
      });
    },
    DeleteNonti(id) {
      // const id_shop = JSON.parse(localStorage.getItem("data"));
      axios.delete("https://api-gilo.herokuapp.com/api/nontification/" + id).then(() => {
        this.nontifications.splice(id, 1);
      });
    },
    show() {
      this.showBox = !this.showBox
    },
    show2() {
      this.Dropit = !this.Dropit
    },
    logOut() {
      localStorage.removeItem('data')
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.fa-bell, .font-weight-bold {
  color: #fff;
}

.btnbell, .btnprofile {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}

@keyframes drop-down {
  from {
    transform: scaley(0) translate3d(0, -100%, 0);
    height: 0;
  }
  to {
    transform: scaley(1) translate3d(0, 0, 0);
  }
}

.nav-item .dropdown-menu {
  position: absolute;
}

@keyframes slide-fade {
  from {
    transform: scaley(0) translate3d(0, -100%, 0);
    height: 0;
  }
  to {
    transform: scaley(1) translate3d(0, 0, 0);
  }
}

.action .profile {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.navbar:not(.navbar-nav-hover) .menu.show {
  animation: show-navbar-dropdown .25s ease forwards;
  pointer-events: auto;
  opacity: 1;
}

.menu.show {
  display: block;
}

.action .menu {
  position: absolute;
  z-index: 1000;
  top: 48px;
  right: 5px;
  padding: 10px 20px;
  background: #fff;
  width: 200px;
  border-radius: 8px;
  transition: 0.5s;
}

.action .menu::before {
  content: '';
  position: absolute;
  right: 28px;
  width: 20px;
  height: 20px;
}

.action .menu h3 {
  width: 100%;
  text-align: center;
  font-size: 18px;
  padding: 20px 0;
  font-weight: 500;
  color: #555;
  line-height: 1.2em;
}

.action .menu ul li {
  list-style: none;
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.action .menu ul li i {
  max-width: 20px;
  margin-right: 10px;
  opacity: 0.5;
  transition: 0.5s;
}

.action .menu ul li:hover i {
  opacity: 1;
}

.action .menu ul li h6 {
  float: left;
}

.action .menu ul li a {
  display: inline-block;
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: 0.5s;
}

.action .menu ul li:hover a {
  color: #ff5d94;
}
/*REPSONSIVE*/

@media screen and (min-width: 600px) {
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
p {
  display: inline;
  font-size: 1.5rem;
  line-height: 1em;
  word-spacing: 0.3em;
  letter-spacing: 0.1em;
  font-family: "OpenSansCondensed-Light";
}
a {
  font-size: 1.1rem;
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
  font-size: 1.2rem;
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
