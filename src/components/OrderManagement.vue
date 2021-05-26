<template>
  <div class="main-content" id="panel">
    <!-- Topnav -->
    <Header></Header>
    <div class="row align-items-center py-4">
      <div class="col-lg-6 col-7">
        <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
          <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
            <li class="breadcrumb-item">
              <router-link to="/dashboard"><i class="fas fa-home"></i></router-link>
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
          <button @click.prevent="allOrder()">Tất cả đơn hàng </button>
          <button @click.prevent="unConfirmOrder()">Đơn chưa xác nhận</button>
          <button @click.prevent="compeleteOrder()">Đơn đã giao</button>
        </div>
        <div class="content table_title">
          <p>Id</p>
          <p>Tên khách hàng </p>
          <p>Địa chỉ</p>
          <p>Ngày đặt hàng</p>
          <p>Tổng tiền</p>
          <p>Tình trạng</p>
          <p>Chi tiết </p>
          <p>Hủy đơn</p>
        </div>
        <div v-if="statusOrder === 0">
          <div v-for="order in rolesByCategory" :key="order.id">
            <div class="content table_content">
              <p>{{ order.id }}</p>
              <p>{{ order.name_recive }}</p>
              <p>{{ order.address }}</p>
              <p class="create_at1">
                {{ $date(order.created_at).format('DD/MM/YYYY') }}
              </p>
              <p>{{ order.total }}</p>
              <p>
                <button type="submit" class="order_status" @click.prevent="editOrder(order.id_status)">
                  {{ order.content }}
                </button>
              </p>
              <p>
                <a class="btn btn-danger" href="#detailOrder">
                  <button @click.prevent="getOrderDetail(order.id)"><i class="fas fa-eye"></i></button>
                </a>
              </p>
              <p>
                <button @click.prevent="deleteOrder(order.id)"><i class="fas fa-minus-circle"></i></button>
              </p>
            </div>
          </div>
        </div>
        <div v-else-if="statusOrder > 0">
          <div v-for="order in rolesByCategory" :key="order.id">
            <div class="content table_content" v-show="order.id_status === statusOrder">
              <p>
                {{ order.id }}
              </p>
              <p>
                {{ order.name_recive}}
              </p>
              <p>
                {{ order.address }}
              </p>
              <p class="create_at1">
                {{ $date(order.created_at).format('DD/MM/YYYY') }}
              </p>
              <p>
                {{ order.total }}
              </p>
              <p>
                <button type="submit" class="order_status" @click.prevent="editOrder(order.id)">
                  {{ order.content }}
                </button>
              </p>
              <p>
                <a class="btn btn-danger" href="#detailOrder">
                  <button @click.prevent="getOrderDetail(order.id_product)"><i class="fas fa-eye"></i></button>
                </a>
              </p>
              <p>
                <button @click.prevent="deleteOrder(order.id)"><i class="fas fa-minus-circle"></i></button>
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
      <div id="detailOrder" class="modal-window-order">
        <div class="form">
          <a href="#" title="Close" class="modal-close">Close</a>
          <center>
            <h2> Sản phẩm</h2>
          </center>
          <div id="product_detail" v-for="detail in Orderdetails" :key="detail">
            <div id="img">
              <img :src="detail.img" id="img_order_detail" alt="image"/>
            </div>
            <div style="margin-left:30px">
              <h2> {{ detail.name }}</h2>
              <h3> Số lượng: {{ detail.quantityCart }}</h3>
              <h3> Giá sản phẩm: {{ detail.price }}</h3>
            </div>
          </div>
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
import Header from './Header.vue'
import moment from "moment";
import _ from 'lodash';
// Load the core build.
//var _ = require('lodash/core');
//var fp = require('lodash/fp');
// import tap from "lodash/fp/tap";
// import flow from "lodash/fp/flow";
// import groupBy from "lodash/fp/groupBy";
//const map = require('lodash/fp/map').convert({ 'cap': false });
export default {
  components: {
    Header
  },
  data() {
    return {
      orders: [],
      Orderdetails: [],
      currentYear: new Date().getFullYear(),
      orderbyStatus: 0,
      pageSize: 3,
      currentPage: 1,
      page: 1,
      perPage: 5,
      pages: [],
      statusOrder: 0,
      formattedDate: ''
    };
  },
  created() {
    this.getData();
    this.formatDate();
  },
  mounted() {
    this.getData();
  },
  methods: {
    formatDate() {
      this.getData();
      for (let i = 0; i < this.orders.length; i++) {
        this.formattedDate = moment(this.orders[i].created_at).format('YYYYMMDD');
        console.log(this.formattedDate);
      }
    },
    allOrder() {
      this.statusOrder = 0;
    },
    unConfirmOrder() {
      this.statusOrder = 1;
    },
    compeleteOrder() {
      this.statusOrder = 5;
    },
    deleteOrder(id) {
      axios.delete(
          'https://api-gilo.herokuapp.com/api/order/' + id
      );
      alert("Delete order succes");
      this.getData();
    },
    getOrderDetail(id) {
      let uri = 'https://api-gilo.herokuapp.com/api/order/' + id;
      this.axios.get(uri).then((response) => {
        this.Orderdetails = response.data;
      });
    },
    getData() {
        fetch('https://api-gilo.herokuapp.com/api/progress')
            .then((response) => response.json())
            .then((data) =>{
              var result = _(data)
                  .groupBy(x => x.payment_id)
                  .map((value, key) =>
                      ({payment_id: key,
                        orders: value})).value();

              console.log(result)});
       // console.log(data)
            // var result = _(data) (this.orders = data)
            //     .groupBy(x => x.payment_id)
            //     .map((value, key) =>
            //         ({payment_id: key,
            //           orders: value})).value();
            //
            // console.log(result);
    },
    editOrder(id) {
      axios.put(
          'https://api-gilo.herokuapp.com/api/progress/' + id
      );
      this.getData();
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
    rolesByCategory() {
      return _.groupBy(this.orders, 'payment_id')
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
#img_order_detail {
  width: 150px;
  height: 150px;
}

#product_detail {
  display: flex;

}

.create_at {
  white-space: nowrap!important;
  width: 98px!important;
  overflow: hidden!important;
  text-overflow: clip!important;
}

.content .table_content,
.content .table_title {
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
  margin-left: auto!important;
  margin-right: auto!important;

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

.modal-window-order {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;

  &:target {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }

  & > div {
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 70%;
    overflow: auto;
    border-radius: 0.4rem;
    transform: translate(-50%, -50%);
    padding: 2em;
    background-image: linear-gradient(to right, #f2e6eb, #e6d3e8);
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

.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;

  &:hover {
    color: black;
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
</style>
