<template>
  <div class="main-content" id="panel">
    <HeaderAdmin />
    <div class="dropdown-menu dropdown-menu-xl show">
      <!-- Dropdown header -->
      <div class="px-3 py-3">
        <!-- <h6 class="text-sm text-muted m-0">Bạn có<strong class="text-primary"> 13</strong> thông báo.</h6> -->
        <h6 class="text-sm text-muted m-0">Thông báo về thông tin đặt hàng</h6>

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
            <button class="btnDele" v-on:submit.prevent="DeleteNonti(i)" @click="DeleteNonti(nontification.id)"><i
                class="fa fa-remove"></i></button>
          </div>
        </a>
      </div>
      <!-- View all -->
      <a href="#!" class="dropdown-item text-center text-primary font-weight-bold py-3">Xem tất cả</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import HeaderAdmin from "./HeaderAdmin";
export default {
  components:{
    HeaderAdmin
  },
  data() {
    return {
      nontifications: [],
      id: ''
    }
  },
  created() {
    this.getNonti();
  },
  methods: {
    getNonti() {
      // this.id=this.$route.params.id;
      const id_shop = JSON.parse(localStorage.getItem("data"));
      axios.get("https://api-gilo.herokuapp.com/api/noficationShop/" + id_shop).then((response) => {
        this.nontifications = response.data;
      });
    },
    DeleteNonti(id) {
      // const id_shop = JSON.parse(localStorage.getItem("data"));
      axios.delete("https://api-gilo.herokuapp.com/api/nontification/" + id).then(() => {
        this.nontifications.splice(id, 1);
      });
    }
  }
}

</script>
<style>
.text-muted {
  height: 50px;
  font-weight: bold;
}

.col {
  line-height: 1.5;
}

.fa-remove {
  margin-top: -20px;
  color: #007bff !important;
}

.btnDele {
  background-color: #fff;
  border: none;
  margin-top: -18px;
}
</style>
