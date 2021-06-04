<template>
  <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
    <div class="container-fluid">
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

export default {

  data() {
    return {
      showBox: false,
      Dropit: false,
      nontifications: [],
      profiles: {},
      search: null,
      data: localStorage.getItem('data')
    }
  },
  created() {
    this.getNonti();
    this.getData();
  },
  methods: {
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

</style>
