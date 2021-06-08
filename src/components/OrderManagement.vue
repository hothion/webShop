<template>
  <div class="main-content" id="panel">
    <!-- Topnav -->
    <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
      <div class="container-fluid">
        <Menu></Menu>
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
              <router-link to="/"><i class="fas fa-home"></i></router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/order">Quản lý đơn hàng</router-link>
            </li>
          </ol>
        </nav>
      </div>
      <div class="content table">
        <div class="content list">
          <p></p>
          <p></p>
          <button @click.prevent="allOrder()">Tất cả đơn hàng</button>
          <button @click.prevent="unConfirmOrder()">Đơn chưa xác nhận</button>
          <button @click.prevent="compeleteOrder()">Đơn đã giao</button>
        </div>
        <div class="content table_title">
          <p>STT</p>
          <p>Tên khách hàng </p>
          <p>Địa chỉ</p>
          <p>Ngày đặt hàng</p>
          <p>Tổng tiền</p>
          <p>Tình trạng</p>
          <p>Chi tiết </p>
        </div>
        <div v-if="statusOrder === 0">
          <div v-for="(result, index) in showOrders" :key="result.payment_id">
            <div class="content table_content">
              <p>{{ index + 1 }}</p>
              <p>{{ result.orders[0].name_recive }}</p>
              <p>{{ result.orders[0].address }}</p>
              <p class="create_at1">
                {{ $date(result.orders[0].created_at).format('DD/MM/YYYY') }}
              </p>
              <p>{{ result.orders[0].total }}</p>
              <p>
                <button type="submit" class="order_status" @click.prevent="editOrder(result.orders[0].payment_id, result.orders[0].id_status)">
                  {{ result.orders[0].content }}
                </button>
              </p>
              <p>
                <a class="btn btn-danger" href="#detailOrder" style="padding: 3px!important;">
                  <button style="padding: 8px!important;" @click.prevent="getOrderDetail(result.orders[0].payment_id)"><i
                      class="fas fa-eye"></i></button>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div v-else-if="statusOrder > 0">
          <div v-for="(result, index) in showOrders" :key="result.payment_id">
            <div class="content table_content" v-show="result.orders[0].id_status === statusOrder">
              <p>{{ index + 1 }}</p>
              <p>{{ result.orders[0].name_recive }}</p>
              <p>{{ result.orders[0].address }}</p>
              <p class="create_at1">
                {{ $date(result.orders[0].created_at).format('DD/MM/YYYY') }}
              </p>
              <p>{{ result.orders[0].total }}</p>
              <p>
                <button type="submit" class="order_status" @click.prevent="editOrder(result.orders[0].payment_id, result.orders[0].id_status)">
                  {{ result.orders[0].content }}
                </button>
              </p>
              <p>
                <a class="btn btn-danger" href="#detailOrder" style="padding: 3px!important;">
                  <button style="padding: 8px!important;" @click.prevent="getOrderDetail(result.orders[0].payment_id)"><i
                      class="fas fa-eye"></i></button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="navigation" v-if="statusOrder === 0">
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
      </div>
      <div class="order-detail" v-bind:style="{ display: isDisplay, margin: marginDetail}">
        <p class="closeFrom" style="float: right; font-size: 1.3rem;" @click.prevent="closeOrderDetail()">x</p>
        <div class="info_user" >
          <h2>Thông tin khách hàng</h2>
          <table>
            <tr>
              <th>Tên khách hàng</th>
              <th>Địa chỉ</th>
              <th>Email</th>
              <th>Số điện thoại</th>
            </tr>
            <tr v-for="detail in Orderdetails" :key="detail">
              <td>{{detail.detailOrder[0].name_recive}}</td>
              <td>{{detail.detailOrder[0].address}}</td>
              <td>{{detail.detailOrder[0].email}}</td>
              <td>{{detail.detailOrder[0].phone}}</td>
            </tr>
          </table>
        </div>
        <div class="info_product">
          <h2> Thông tin sản phẩm</h2>
          <table>
            <tr>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá</th>
            </tr>
            <tr v-for="detail in detailProduct" :key="detail">
              <td> <p><img :src="detail.image" id="imgDetail" alt="image"/></p></td>
              <td><p style="margin-top: 40px!important">{{detail.name}}</p></td>
              <td><p>{{detail.quantitycart}}</p></td>
              <td><p>{{detail.price}}</p></td>
            </tr>
          </table>
        </div>
        <div class="info-general" v-for="detail in Orderdetails" :key="detail">
          <h3>Tổng tiền: <strong style="color: red">{{detail.detailOrder[0].total}} </strong> đ</h3>
          <h3>Tình trạng đơn hàng: <strong style="color: red">{{detail.detailOrder[0].content}}</strong></h3>
        </div>
      </div>
      <div class="notification"  v-bind:style="{ display: openNotify, margin: marginDetail}">
          <div class="closeNotify">
            <h2 @click="onCloseNotify()">X</h2>
          </div>
        <div class="contentNotify">
          <h2> Bạn có muốn xác nhận đơn hàng này không?</h2>
        </div>
        <div class="footerNotify">
            <button class="btn-confirm" @click="onConfirmOrder()">
              Xác nhận
            </button>
          <button class="btn-cancel" @click="onCloseNotify()">
            Hủy
          </button>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);
import _ from 'lodash';
import Menu from "./Menu";

export default {
  components: {Menu},
  data() {
    return {
      orders: [],
      Orderdetails: [],
      detailProduct: [],
      currentYear: new Date().getFullYear(),
      orderbyStatus: 0,
      pageSize: 3,
      currentPage: 1,
      page: 1,
      perPage: 5,
      pages: [],
      statusOrder: 0,
      formattedDate: '',
      results: [],
      stt: 0,
      isDisplay: 'none',
      marginDetail: '-36% 5% 0% 5%',
      openNotify: 'none',
      payment_id : null,
      showBox: false,
      Dropit:false,
      nontifications:[],
      profiles:{},
      search: null,
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
    allOrder() {
      this.statusOrder = 0;
      this.marginDetail = '-55% 5% 0% 5%';
    },
    closeOrderDetail(){
      this.isDisplay = 'none';
    },
    onCloseNotify(){
      this.openNotify = "none";
    },
    onConfirmOrder(){
      axios.put(
          'https://api-gilo.herokuapp.com/api/orderUpdate/' + this.payment_id
      );
      this.getData();
    },
    unConfirmOrder() {
      this.statusOrder = 1;
      this.marginDetail = '15% 5% 0% 5%';
    },

    compeleteOrder() {
      this.statusOrder = 5;
      this.marginDetail = '-4% 5% 0% 5%';
      console.log(this.statusOrder)
    },
    deleteOrder(id) {
      axios.delete(
          'https://api-gilo.herokuapp.com/api/order/' + id
      );
      alert("Delete order succes");
      this.getData();
    },
    getOrderDetail(id_payment) {
      this.isDisplay = 'block';
      fetch('https://api-gilo.herokuapp.com/api/order/detailAdmin/'+ id_payment)
          .then((response) => response.json())
          .then((data) => {
            this.Orderdetails = _(data)
                .groupBy(x => x.payment_id)
                .map((value, key) =>
                    ({
                      payment_id: key,
                      detailOrder: value
                    })).value();
            this.detailProduct = data;
          });
    },
    getData() {
      this.marginDetail = '-55% 5% 0% 5%';
      fetch('https://api-gilo.herokuapp.com/api/progress')
          .then((response) => response.json())
          .then((data) => {
            this.results = _(data)
                .groupBy(x => x.payment_id)
                .map((value, key) =>
                    ({
                      payment_id: key,
                      orders: value
                    })).value();

            console.log(this.results)
          });
    },
    editOrder(id, id_status) {
      if(id_status == 1){
        this.openNotify = "block";
        this.payment_id = id;
      }else {
        axios.put(
            'https://api-gilo.herokuapp.com/api/orderUpdate/' + id
        );
        this.getData();
      }
    },
    setPages() {
      let numberOfPages = Math.ceil(this.orders.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(orders) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return orders.slice(from, to);
    },
  },
  computed: {
    showOrders() {
      if (this.search) {
        return this.results.filter((item) => {
          return this.search
              .toLowerCase()
              .split(" ")
              .every((v) => item.orders[0].name_recive.toLowerCase().includes(v));
        });
      }else{
         return this.results;
      }
    }
  },
  watch: {
    showOrders() {
      return this.paginate(this.orders);
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
////Header
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


///// Notify
.notification{
  position: fixed;
  margin-left: 20%!important;
  margin-right: 20%!important;
  width: 40%;
  background-color: #d7d5d0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 3%;
  border-radius: 4px;
  .closeNotify{
    width: 100%;
    float: right;
    margin-bottom: 30px;
    h2{
      float: right;
    }
  }
  .contentNotify{
   margin: 30px;
    text-align: center;
    h2{
      font-weight: bold;
      font-size: 1.4rem;
    }
  }
  .footerNotify{
    width: 100%;
    margin-left: 30%;
    margin-right: 30%;
    button{
      padding: 10px;
      color: white;
      background-color: red;
      border-radius: 4px;
      outline: none;
      border: none;
      font-size: 1.3rem;
      &:hover{
        transition: 1s all;
        background-color: #13c6e0;
      }
    }
    .btn-cancel{
      margin-left: 20px;
      padding: 10px 20px!important;
    }
  }
}


/// Detail order
.closeFrom{
  margin-bottom: 30px!important;
}
.order-detail {
  width: 70%;
  height: 100%;
  overflow: scroll;
  position: fixed;
  border-radius: 4px;
  padding: 30px;
  background-image: linear-gradient(to right, #e4daea, #f2e2f8);
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  .closeFrom:hover{
    color: red;
    font-size: 1.3rem;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th{
    font-weight: bold;
  }
 

  tr:hover {
    background-color: #f5f5f5;
  }
  h2{
    font-size: 1.4rem;
    font-weight: bold;
    padding: 5px 0;
  }
  h3{
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px 0;
  }
  .info_user {
    margin-bottom: 25px;
    margin-top: 30px!important;
    th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    margin: auto 0;
  }
  }

  .info_product {
    margin-bottom: 25px;
    tr td p{
      margin: auto!important;
    }
    tr td{
      margin: auto!important;
    }
    #imgDetail{
      width: 130px;
      height: 100px;
    }
  }

  .info-general {
  }
}

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
.content .table_content {
  width: 100%;
  display: grid;
  grid-template-columns: 0.4fr 1.2fr 2fr 0.9fr 0.7fr 1.6fr 0.5fr!important;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  border-radius: 10px;
}
.content .table_title{
  width: 100%;
  display: grid;
  grid-template-columns: 0.4fr 1.2fr 2fr 0.9fr 0.7fr 1.6fr 0.6fr!important;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  border-radius: 10px;
}
.table_content p {
  margin: auto 0;
}

.content .table {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.content {
  width: 90% !important;
  margin-left: auto !important;
  margin-right: auto !important;

  h1 {
    margin-bottom: 10px;
    color: black;
    font-size: 2rem;
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
  float: left !important;
  width: 97.5% !important;
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

  button {
    display: block;
    width: 100px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    -webkit-transition-duration: 0.4s;
    /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
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

    & > div {
      width: 60%;
      position: absolute;
      top: 50%;
      left: 50%;
      height: 80%;
      overflow: auto;
      border-radius: 0.4rem;
      transform: translate(-50%, -50%);
      padding: 2em;
      background-image: linear-gradient(to right, #f2709c, #ff9472);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 20px 20px 0 rgba(0, 0, 0, 0.19);
    }

    header {
      font-weight: bold;
    }

    h1 {
      font-size: 150%;
      margin: 0 0 15px;
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

</style>
