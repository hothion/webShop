<template>
  <div class="main-content" id="panel">
            <div class="dropdown-menu dropdown-menu-xl show">
                <!-- Dropdown header -->
                <div class="px-3 py-3">
                  <h6 class="text-sm text-muted m-0">Bạn có<strong class="text-primary">13</strong> thông báo.</h6>
                </div>
                <!-- List group -->
                <div class="list-group list-group-flush" v-for="nontification in nontifications" :key="nontification.id">
                  <a href="#!" class="list-group-item list-group-item-action">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <!-- Avatar -->
                         <img :src="nontification.img" class="avatar rounded-circle">
                      </div>
                      <div class="col ml--2">
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 class="mb-0 text-sm">{{nontification.name}}</h4>
                          </div>
                          <div class="text-right text-muted">
                            <small>{{nontification.time}}</small>
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
export default {
  data() {
    return {
        nontifications:[],
       
    }
  },
  created(){
      this.getNonti();
  },
   methods: {
       getNonti(){
        // this.id=this.$route.params.id;
        axios.get("http://api-gilo.herokuapp.com/api/nofication").then((response) => {
        this.nontifications = response.data;
      })
        
       }
    }
}
</script>
<style>

</style>
