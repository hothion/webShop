<template>
  <div class="main-content" id="panel">
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
            <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </form>
          <div class=" ml-md-auto">
            <button @click="show" class="btnbell"> <i class="fas fa-bell"></i></button>
            <transition name="drop-down">
              <div class="dropdown-menu dropdown-menu-xl show" v-show="showBox">
                <!-- Dropdown header -->
                <div class="px-3 py-3">
                  <!-- <h6 class="text-sm text-muted m-0">Bạn có<strong class="text-primary"> 13</strong> thông báo.</h6> -->
                  <h6 class="text-sm text-muted m-0">Thông báo <span>{{nontifications.length}}</span> thông báo</h6>
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
                            <h4 class="mb-0 text-sm">{{nontification.account}}</h4>
                          </div>
                          <div class="text-right text-muted">
                            <small>{{$date(nontification.time).format('DD/MM/YYYY')}}</small>
                          </div>
                        </div>
                        <p class="text-sm mb-0">{{nontification.content}}</p>
                      </div>
                      <button  class="btnDele" v-on:submit.prevent="DeleteNonti(i)" @click="DeleteNonti(nontification.id)"> <i class="fa fa-remove"></i></button>
                    </div>
                  </a>
                </div>
                <!-- View all -->
                <a href="#!" class="dropdown-item text-center text-primary font-weight-bold py-3">Xem tất cả</a>
              </div>
            </transition>
          </div>

          <div class="action ml-auto ml-md-0" >
            <button class="btnprofile" @click="show2">
              <div class="media align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" :src="profiles.img">
                  </span>
                <div class="media-body  ml-2  d-none d-lg-block">
                  <span class="mb-0 text-sm  font-weight-bold">{{profiles.account}}</span>
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
                  <a @click="logOut()"><li><i class="fas fa-running"></i><h6>Đăng xuất</h6></li></a>
                </ul>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </nav>
    <div class="row align-items-center py-4">
      <div class="col-lg-6 col-7">
        <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
          <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
            <li class="breadcrumb-item">
              <router-link to="/dashboard"><i class="fas fa-home"></i></router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/order">Quản lý người dùng</router-link>
            </li>
          </ol>
        </nav>
      </div>
      <div class="content table">
        <div class="content table_title">
          <p>STT</p>
          <p>Hình ảnh</p>
          <p>Tên người dùng </p>
          <p>Địa chỉ</p>
          <p>Điện thoại</p>
          <p>Email</p>
          <p>Xóa</p>
        </div>
        <div>
          <div class="content table_content" v-for="(user, index) in showUsers" :key="user.id">
            <p>
              {{ index + 1 }}
            </p>
            <p>
              <img :src="user.img" id="img" >
            </p>
            <p >
              {{ user.lastName }}
              {{ user.firstName }}
            </p>
            <p>
              {{ user.address }}
            </p>
            <p>
              {{ user.phone }}
            </p>
            <p>
              {{ user.email }}
            </p>
            <p>
              <button @click.prevent="deleteUser(user.id)"><i class="fas fa-minus-circle"></i></button>
            </p>
          </div>
        </div>
      </div>
      <ul class="pagination">
        <li class="page-item">
          <button type="button" class="page-link" v-if="page != 1" @click="page--"><i
              class="fas fa-arrow-circle-left"></i>
          </button>
        </li>
        <li class="page-item">
          <button type="button" class="page-link" v-for="pageNumber in pages.slice(page - 1, page + 5)"
                  v-bind:key="pageNumber" @click="page = pageNumber">
            {{ pageNumber }}
          </button>
        </li>
        <li class="page-item">
          <button type="button" @click="page++" v-if="page < pages.length" class="page-link">
            <i class="fas fa-arrow-circle-right"></i>
          </button>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

export default {
  data() {
    return {
      users: [],
      pageSize: 3,
      currentPage: 1,
      page: 1,
      perPage: 5,
      pages: [],
      search: null,
      showBox: false,
      Dropit:false,
      nontifications:[],
      profiles:{},
      data: localStorage.getItem('data')
    };
  },
  created() {
    this.getData();
    this.getDataPro();
    this.getNonti();
  },
  methods: {
    getDataPro(){
      const idShop = JSON.parse(localStorage.getItem("data"));
      axios.get('https://api-gilo.herokuapp.com/api/profileAdmin/'+  idShop)
          .then(response =>(
              console.log(response),
                  this.profiles = response.data
          ))
    },
    getNonti(){
      axios.get("https://api-gilo.herokuapp.com/api/noficationshop").then((response) => {
        this.nontifications = response.data;
      }) ;
    },
    DeleteNonti(id){
      // const id_shop = JSON.parse(localStorage.getItem("data"));
      axios.delete("https://api-gilo.herokuapp.com/api/nontification/" + id).
      then(() => {
        this.nontifications.splice(id, 1);
      }) ;
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
    },
    deleteUser(id) {
      axios.delete(
          'https://api-gilo.herokuapp.com/api/account/' + id
      );
      alert("Bạn chắc chắn muốn xóa người dùng này?");
      this.getData();
    },
    getData() {
      fetch('https://api-gilo.herokuapp.com/api/account')
          .then((response) => response.json())
          .then((data) => (this.users = data));
    },
    setPages() {
      let numberOfPages = Math.ceil(this.users.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(users) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return users.slice(from, to);
    },
  },
  computed: {
    showUsers() {
      if (this.search) {
        return this.users.filter((item) => {
          return this.search
              .toLowerCase()
              .split(" ")
              .every((v) => item.firstName.toLowerCase().includes(v));
        });
      } else {
        return this.users;
      }
    }
  },
  watch: {
    users() {
      this.setPages();
    },
    filters: {
      trimWords(value) {
        return value.split(" ").splice(0, 20).join(" ") + "...";
      },
    }
  }

};
</script>
<style lang="scss">
/////Header
.fa-bell, .font-weight-bold{
  color: #fff;
}
.btnbell,.btnprofile{
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
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
.action .profile{
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
.action .menu{
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
.action .menu::before{
  content: '';
  position: absolute;
  right: 28px;
  width: 20px;
  height: 20px;
}
.action .menu h3{
  width: 100%;
  text-align:center ;
  font-size: 18px;
  padding: 20px 0;
  font-weight:500;
  color: #555;
  line-height: 1.2em;
}
.action .menu ul li{
  list-style: none;
  padding: 10px 0;
  display: flex;
  align-items: center;
}
.action .menu ul li i{
  max-width: 20px;
  margin-right: 10px;
  opacity: 0.5;
  transition: 0.5s;
}
.action .menu ul li:hover i{
  opacity: 1;
}
.action .menu ul li h6{
  float: left;
}
.action .menu ul li a{
  display: inline-block;
  text-decoration: none;
  color: #555;
  font-weight:500;
  transition: 0.5s;
}
.action .menu ul li:hover a{
  color: #ff5d94;
}
////
#img_order_detail {
  width: 150px;
  height: 150px;
}

#product_detail {
  display: flex;

}

.create_at {
  white-space: nowrap !important;
  width: 98px !important;
  overflow: hidden !important;
  text-overflow: clip !important;
}

.content .table_content,
.content .table_title {
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr 0.5fr;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  border-radius: 10px;
}

.table_content p {
  margin: auto 0;
}

#img {
  width: 100% !important;
  height: 130px!important;
}

.content .table {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}

.content {
  width: 85%;
  margin-left: auto;
  margin-right: auto;

  h1 {
    margin-bottom: 10px;
    color: black;
    font-size: 2rem;
    font-size: 1.5rem;
    font-family: Helvetica, Arial, sans-serif;
  }

  .list {
    display: flex;
    margin-bottom: 10px;

    button {
      padding: 10px;
      background: none;
      border-bottom: 2px solid red;
      border-right: 2px solid red;
      border-radius: 10px;
      font-size: 1rem;
    }
  }

  .table_title {
    margin-left: 0;
    text-align: center;
    background: #009688;
    color: white;
    font-size: 1.2rem;
    padding: 10px 0;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
  }

  .table_content {
    margin-top: 10px;
    font-size: 1.1rem;
    background: white;
    margin-left: 0;
    text-align: center;
    box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);

    p {
      padding: 17px 15px;
      word-break: break-all;
    }

    a {
      padding: 8px;
      background: red;
      color: white;
      border: 0;
      border-radius: 10px;
    }

    button {
      padding: 8px;
      background: rgba(244, 63, 94);;
      color: white;
      border: 0;
      border-radius: 10px;
    }
  }
}

.content .list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1.1fr;
  margin-bottom: 10px;
  float: right;
}

.content .list button {
  padding: 11px 9px;
  border: 1px solid white;
  background: yellowgreen;
  border-radius: 6px;
  opacity: 0.9;
  font-size: 16.5px;

  &:hover {
    transition: 0.6s all;
    opacity: 1;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
}

///// PAGINATION
ul li {
  list-style: none;
}

.page-item {
  padding: 10px;
}

.pagination {
  display: flex;
  padding: 20px;
}

#navigation {
  margin-left: 30%;
  display: flex;
}

.pagination {
  margin-top: 5%;
  width: 50%;
  transform: translate(-50%, -50%);
  margin-left: 50px;
  padding: 10px;

  li {
    display: flex;
    justify-content: center;

    > button {
      margin-left: 1%;
    }
  }

  ///// PAGINATION
  ul li {
    list-style: none;
  }

  .page-item {
    padding: 10px;
  }

  &:first-child button {
    border-radius: 30px;
  }

  .pagination {
    margin-top: 5%;
    width: 50%;
    transform: translate(-50%, -50%);
    margin-left: 50px;
    padding: 10px;

    li {
      display: flex;
      list-style: none;
    }

    button {
      display: block;
      width: 100px;
      height: 40px;
      line-height: 40px;
      background-color: #fff;
      text-align: center;
      text-decoration: none;
      color: #252525;
      border-radius: 4px;
      font-size: 17px;
      margin: 5px;
      box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.1),
      0 2px 5px rgba(0, 0, 0, 0.5);
      transition: all 0.3s ease;

      &:hover,
      &.active {
        color: white;
        background-color: yellow;
      }
    }

    &:first-child button {
      border-radius: 30px;
    }

    &:last-child button {
      border-radius: 30px;
    }
  }
}
</style>
