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
                <i class="ni ni-zoom-split-in"></i>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                 aria-expanded="false">
                <i class="fas fa-bell"></i>
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
                            <h4 class="mb-0 text-sm">John Snow</h4>
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
                    <span class="mb-0 text-sm  font-weight-bold">Lao yeu</span>
                  </div>
                </div>
              </a>
              <div class="dropdown-menu  dropdown-menu-right ">
                <div class="dropdown-header noti-title">
                  <h6 class="text-overflow m-0">Chào mừng bạn đã trở lại!</h6>
                </div>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-single-02"></i>
                  <span>Tôi</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-user-run"></i>
                  <span>Đăng xuất</span>
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
          <p>Id</p>
          <p>Hình ảnh</p>
          <p>Tên người dùng </p>
          <p>Ngày sinh</p>
          <p>Địa chỉ</p>
          <p>Điện thoại</p>
          <p>Email</p>
          <p>Xóa</p>
        </div>
        <div>
          <div class="content table_content" v-for="user in showUsers" :key="user.id">
            <p>
              {{ user.id }}
            </p>
            <p>
              <img :src="user.img" id="img">
            </p>
            <p >
              {{ user.lastName }}
              {{ user.firstName }}
            </p>
            <p class="create_at">
              {{ user.birthday }}
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
      search: null
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    this.getData();
  },
  methods: {
    deleteUser(id) {
      axios.delete(
          'https://api-gilo.herokuapp.com/api/account/' + id
      );
      alert(" Xóa người dùng thành công!");
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
              .every((v) => item.account.toLowerCase().includes(v));
        });
      } else {
        return this.paginate(this.users);
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
  width: 100px;
  height: 100px;
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
