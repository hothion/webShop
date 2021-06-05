<template>
  <div class="main-content" id="panel">
    <Header></Header>
    <div class="dropdown-menu dropdown-menu-xl show">
        <!-- Dropdown header -->
        <div class="px-3 py-3">
          <!-- <h6 class="text-sm text-muted m-0">Bạn có<strong class="text-primary"> 13</strong> thông báo.</h6> -->
          <h6 class="text-sm text-muted m-0">Thông báo bạn có <span class="nontilength">{{ nontifications.length }} </span> thông báo</h6>

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
import Header from './Header.vue';
export default {
  components: { Header },
  data() {
    return {
        nontifications:[],
       id:''
    }
  },
  created(){
      this.getNonti();
      this.DeleteNonti();
  },
   methods: {
      getNonti(){
        axios.get("https://api-gilo.herokuapp.com/api/noficationshop").then((response) => {
        this.nontifications = response.data;
        this.DeleteNonti();
      }) ;  
       },
      
    }
}

</script>
<style>
.text-muted {
    height: 30px;
    font-weight: bold;
}
.col{
  line-height: 1.5;
}
.fa-remove{
  margin-top: -20px;
  color: #007bff!important;
}
.btnDele{
  background-color: #fff;
  border: none;
  margin-top: -18px;
}
.pl-3, .px-3 {
    padding-left: 1rem!important;
    border-bottom: 1px solid rgba(0,0,0,.125);
}
.nontilength{
  color: red;
}
.list-group-flush {
    border-radius: 0;
    border-bottom: 1px solid rgba(0,0,0,.125);
}

</style>
