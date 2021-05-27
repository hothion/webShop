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
                <input class="form-control" placeholder="Tìm kiếm ..." v-model="search" type="text">
              </div>
            </div>
            <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main"
                    aria-label="Close">
              <span aria-hidden="true"> u </span>
            </button>
          </form>
          <!-- Navbar links -->
          <ul class="navbar-nav align-items-center  ml-md-auto ">
            <li class="nav-item d-xl-none">
              <!-- Sidenav toggler -->
              <div class="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin"
                   data-target="#sidenav-main">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                </div>
              </div>
            </li>
            <li class="nav-item d-sm-none">
              <a class="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
                <i style="color: white!important;" class="ni ni-zoom-split-in"></i>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                 aria-expanded="false">
                <i style="color: white!important;" class="fas fa-bell"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-xl  dropdown-menu-right  py-0 overflow-hidden">
                <!-- Dropdown header -->
                <div class="px-3 py-3">
                  <h6 class="text-sm text-muted m-0">You have <strong class="text-primary">13</strong> notifications.
                  </h6>
                </div>
                <!-- List group -->
                <div class="list-group list-group-flush">
                  <a href="#!" class="list-group-item list-group-item-action">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <!-- Avatar -->
                        <img alt="Image placeholder" src="assets/img/theme/team-5.jpg" class="avatar rounded-circle">
                      </div>
                      <div class="col ml--2">
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 style="color: white!important;" class="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div class="text-right text-muted">
                            <small>3 hrs ago</small>
                          </div>
                        </div>
                        <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <!-- View all -->
                <a href="#!" class="dropdown-item text-center text-primary font-weight-bold py-3">View all</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                 aria-expanded="false">
                <i style="color: white!important;"  class="fab fa-facebook-messenger"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default  dropdown-menu-right ">
                <div class="row shortcuts px-4">
                  <a href="#!" class="col-4 shortcut-item">
                <span class="shortcut-media avatar rounded-circle bg-gradient-yellow">
                  <i class="ni ni-basket"></i>
                </span>
                    <small>Shop</small>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav align-items-center  ml-auto ml-md-0 ">
            <li class="nav-item dropdown">
              <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                 aria-expanded="false">
                <div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                <img alt="Image placeholder" src="assets/img/theme/team-4.jpg">
              </span>
                  <div class="media-body  ml-2  d-none d-lg-block">
                    <span class="mb-0 text-sm  font-weight-bold">John Snow</span>
                  </div>
                </div>
              </a>
              <div class="dropdown-menu  dropdown-menu-right ">
                <div class="dropdown-header noti-title">
                  <h6 class="text-overflow m-0">Welcome!</h6>
                </div>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-single-02"></i>
                  <span>My profile</span>
                </a>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-settings-gear-65"></i>
                  <span>Settings</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-user-run"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
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
              <router-link to="/product">Quản lý sản phẩm</router-link>
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="product">
      <div class="header_pro" style="float: right">
        <a href="#open-modal"
        >Thêm sản phẩm</a
        >
      </div>
      <div class="content tableProduct" style="width: 97%!important;">
        <div class="content table_titleProduct">
          <p>Id</p>
          <p>Hình ảnh</p>
          <p>Tên Sản phẩm </p>
          <p>Mô tả</p>
          <p>Giá (đ)</p>
          <p>Sửa</p>
          <p>Xóa </p>
        </div>
          <div v-for="product in showProducts" :key="product.id">
            <div class="content table_contentProduct">
              <p>{{ product.id }}</p>
              <p> <img :src="product.img" id="img1" alt="image"/></p>
              <p>{{ product.name }}</p>
              <p style="text-align: left">
                {{ product.description }}
              </p>
              <p>{{ product.price }}</p>
              <p>
                <a class="btn btn-danger" href="#open-modal">
                  <button style="padding: 3px!important;" @click.prevent="editProduct(product)"><i class="fas fa-edit"> </i></button>
                </a>
              </p>
              <p>
                <button style="padding: 11px 9px!important;"  @click.prevent="deleteProduct(product.id)"><i class="fas fa-trash-alt"></i></button>
              </p>
            </div>
          </div>
      </div>
      <div id="navigation">
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
      <div id="open-modal" class="modal-window-product">
        <div class="form">
          <a href="#" title="Close" class="modal-close"><i class="fas fa-times"></i></a>
          <center>
            <h1 style="font-weight: bold; font-size: 1.8rem; margin-bottom: 30px">{{ contentForm }}</h1>
          </center>
          <form @submit.prevent="addProduct">
            <div id="formAdd">
              <div class="item_input">
                <label for="input" class="Input-label" style="margin-bottom: 10px!important; font-size: 1.1rem; font-weight: bold">Tên sản phẩm </label>
                <input
                    type="text"
                    id="input"
                    class="Input-text"
                    placeholder="Tên sản phẩm"
                    v-model="newproduct.name"
                />
              </div>
              <div class="item_input">
                <label style="margin-bottom: 10px!important; font-size: 1.1rem; font-weight: bold" >Hình ảnh</label><br/>
                <input type="text" placeholder="Link ảnh" name="image" id="img2" v-model="newproduct.img"/>
              </div>
              <div class="item_input">
                <label for="type" style="margin-bottom: 10px!important; font-size: 1.1rem; font-weight: bold">Loại sản phẩm</label><br/>
                <input
                    type="text"
                    name="type"
                    v-model="newproduct.type"
                    id="type"
                    placeholder=" Nhập loại sản phẩm"
                />
              </div>
              <div class="item_input">
                <label for="quantity" style="margin-bottom: 10px!important; font-size: 1.1rem; font-weight: bold"> Số lượng</label><br/>
                <input
                    type="number"
                    name="quantity"
                    v-model="newproduct.quantity"
                    id="quantity"
                    min="1"
                    max="10000"
                    placeholder=" Số lượng sản phẩm"
                />
              </div>
              <div class="item_input">
                <label style="margin-bottom: 10px!important;font-size: 1.1rem; font-weight: bold" for="price">Giá ( đ )</label><br/>
                <input
                    type="number"
                    name="price"
                    v-model="newproduct.price"
                    id="price"
                    min="100000"
                    max="1000000"
                    placeholder=" Giá của sản phẩm"
                />
              </div>
              <div class="item_input">
                <label style="margin-bottom: 10px!important;font-size: 1.1rem; font-weight: bold" for="discount">Giảm giá( % )</label><br/>
                <input
                    type="number"
                    name="discount"
                    v-model="newproduct.discount"
                    id="discount"
                    min="1"
                    max="100"
                    placeholder=" Giám giá "
                />
              </div>
            </div>
            <div class="item_input" style="margin-top: 35px!important;">
              <label for="description" style="margin-bottom: 10px!important;font-size: 1.1rem; font-weight: bold"> Mô tả</label><br/>
              <textarea
                  name="description"
                  id="description"
                  cols="73"
                  rows="3"
                  v-model="newproduct.description"
                  placeholder=" Mô tả cho sản phẩm"
              ></textarea>
            </div>
            <div class="add_resest">
              <button type="submit" style="font-weight: bold">{{ buttonAdd }}</button>
              <button type="submit" style="font-weight: bold" @click.prevent="clearData">Hủy</button>
            </div>
          </form>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
export default {
  data() {
    return {
      products: [],
      newproduct: {
        img: null,
        imageUrl: null
      },
      pageSize: 5,
      currentPage: 1,
      page: 1,
      perPage: 4,
      pages: [],
      search: null,
      edit: false,
      buttonAdd: "Thêm",
      contentForm: "Thêm sản phẩm mới",
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      fetch('https://api-gilo.herokuapp.com/api/products')
          .then((response) => response.json())
          .then((data) => (this.products = data));
    },

    deleteProduct(id) {
      axios.delete('https://api-gilo.herokuapp.com/api/products/' + id);
      this.getData();
    },

    addProduct() {
      if (this.edit === false) {
        axios.post('https://api-gilo.herokuapp.com/api/products', this.newproduct);
        alert(" Insert product success");
        this.getData();
      } else {
        axios.put('https://api-gilo.herokuapp.com/api/products/' + this.newproduct.id, this.newproduct);
        alert(" Update product success");
        this.getData();
        this.edit = false;
      }
    },
    editProduct(product) {
      this.edit = true;
      this.buttonAdd = "Cập nhật";
      this.contentForm = "Cập nhật sản phẩm";
      this.newproduct.id = product.id;
      this.newproduct.name = product.name;
      this.newproduct.img = product.img;
      this.newproduct.description = product.description;
      this.newproduct.type = product.type;
      this.newproduct.price = product.price;
      this.newproduct.quantity = product.quantity;
      this.newproduct.heart = product.heart;
      this.newproduct.discount = product.discount;
    },
    setPages() {
      let numberOfPages = Math.ceil(this.products.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    clearData() {
      this.newproduct.name = "";
      this.newproduct.img = "";
      this.newproduct.description = "";
      this.newproduct.type = "";
      this.newproduct.quantity = "";
      this.newproduct.price = "";
      this.newproduct.discount = "";
      this.newproduct.heart = 0;
    },
    paginate(products) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return products.slice(from, to);
    },
  },
  computed: {
    showProducts() {
      if (this.search) {
        return this.products.filter((item) => {
          return this.search
              .toLowerCase()
              .split(" ")
              .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.paginate(this.products);
      }
    }
  },
  watch: {
    products() {
      this.setPages();
    },
    filters: {
      trimWords(value) {
        return value.split(" ").splice(0, 20).join(" ") + "...";
      },
    }
  }
}
</script>
<style lang="scss">
.row.align-items-center.py-4{
  padding-top:24px!important;
  padding-bottom: 0!important;
}
.product {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.header_pro {
  margin-bottom: 1%;
  margin-right:5%;
  a {
    background-color: crimson;
    /* Màu của Quản trị mạng ^^ */
    border: none;
    color: white;
    padding: 13px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    -webkit-transition-duration: 0.4s;
    /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
    outline: none;
    border-radius: 25px;
  }

  button:hover {
    background-color: seagreen;
  }

  input {
    padding-left: 1%;
    outline: none;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}

.pro_header {
  display: flex;
}

.pro_header button {
  float: right;
}

.form h2 {
  margin-bottom: 4%;
  font-size: 1.5rem;
}

div#formAdd {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 30px;
  width: 100%;
}

.add_resest {
  display: flex;
  justify-content: center;

  > button {
    margin-left: 1%;
  }
}

form button {
  margin-top: 5%;
  background-color: crimson; /* Màu của Quản trị mạng ^^ */
  border: none;
  color: white;
  padding: 13px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 4px;
}

.item_input label {
  top: 2%;
  bottom: 3%;
}
form{
  margin-left: 25px!important;
  width: 100%;
}
.item_input input {
  border: 1px solid honeydew;
  outline: none;
  border-radius: 0.4rem;
  width: 85%;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;}
.item_input input:focus{
  border-bottom: 2px solid cadetblue;
}
.item_input textarea {
  outline: none;
  padding: 10px;
  border: 1px solid honeydew;
  border-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
.item_input textarea:focus{
  border-bottom: 2px solid cadetblue;

}
.modal-window-product {
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
    width: 55%;
    position: absolute;
    top: 45%;
    left: 50%;
    height: 95%;
    border-radius: 0.4rem;
    transform: translate(-50%, -50%);
    padding: 2em;
    background-image: linear-gradient(to right, #faf5fc, #faf5fc);
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
#img{
  width: 85% !important;
  height: 43px!important;
}
.modal-close {
  color: black;
  line-height: 50px;
  font-size: 20px;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;

  &:hover {
    color: blue;
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
      top: 45%;
      left: 50%;
      height: 85%;
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
}
.content .table_contentProduct,
.content .table_titleProduct {
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.8fr 1.4fr 0.7fr 0.4fr 0.4fr;
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  border-radius: 10px;
}

.table_contentProduct p {
  margin: auto 0;
}

.content .tableProduct {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.content {
  width: 95% !important;
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
      padding:  8px 10px;
      background: none;
      border-bottom: 2px solid red;
      border-right: 2px solid red;
      border-radius: 10px;
      font-size: 1rem;
    }
  }

  .table_titleProduct {
    margin-left: 0;
    text-align: center;
    background: #009688;
    color: white;
    font-size: 1.2rem;
    padding: 10px 0;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
  }

  .table_contentProduct {
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
      padding: 6px 6px;
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
  margin-right: auto!important;
  margin-left: auto!important;
}

#img1{
  width: 100%;
  height: 150px;
}
</style>
