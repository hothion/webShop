<template>
  <div class="main-content" id="panel">
    <Header></Header>
    <div class="row align-items-center py-4">
      <div class="col-lg-6 col-7">
        <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
          <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
            <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
            <li class="breadcrumb-item"><a href="#">Thống kê</a></li>
          </ol>
        </nav>
      </div>
      <div class="col-lg-6 col-5 text-right">
        <router-link href="#" class="btn btn-sm btn-neutral" to="/order-month">Tháng</router-link>
        <router-link href="#" class="btn btn-sm btn-neutral" to="/order-weeks">Tuần</router-link>
      </div>
    </div>
    <div class="statistic">
      <div class="col1">
        <div class="BarChart">
          <h3>Đơn đặt hàng trong 1 tuần</h3>
          <span>
          <button @click.prevent="PreviousWeek()">Tuần trước</button>
          <h3>{{
              numberWeek
            }}</h3>
           <button @click.prevent="nextWeek()">Tuần kế tiếp</button>
           <h4>{{
               getWeek
             }}</h4>
         </span>
          <ul v-for="yeu in yeus" :key="yeu">
            <li>
              {{
                yeu
              }}
            </li>
          </ul>
          <orderWeek v-bind:listDay="listDay"/>
        </div>
      </div>
      <!--      <router-view></router-view>-->
    </div>
    <Footer></Footer>
  </div>


</template>

<script>
import orderWeek from "./OrderWeek.vue";
import moment from "moment";
import Header from './Header.vue';

export default {
  name: "order",
  data() {
    return {
      selected: "",
      counter: 0,
      numberWeek: {},
      getWeek: [],
      number: 0,
      listDay: [],
      yeus: [],
      currentYear: new Date().getFullYear(),
    };
  },
  components: {
    orderWeek,
    Header
  },
  created() {
    this.getNumberWeek();
    let uri = 'https://damp-woodland-88343.herokuapp.com/api/getWeek/' + this.counter;
    this.axios.get(uri).then((response) => {
      this.getWeek = response.data;
    });
    //  var storedNames = JSON.parse(localStorage.getItem("date"));
    //       console.log(storedNames);
    //       this.yeus = storedNames;
  },
  mounted() {
    let yeu = localStorage.getItem('date');
    console.log(yeu);
  },
  methods: {
    getNumberWeek() {
      this.axios.get('https://damp-woodland-88343.herokuapp.com/api/getNumber').then((response) => {
        this.numberWeek = response.data;
      });
    },
    reloadPage() {
      if (localStorage.getItem('reloaded')) {
        localStorage.removeItem('reloaded');
      } else {
        localStorage.setItem('reloaded', '1');
        location.reload();
      }
    },
    // getCurrentDay(){
    //   for (let i = this.getWeek; i < this.getWeek ; i++) {
    //         let numberYear = new Date(Date.UTC(this.currentYear, 0, i));
    //         let formattedDate = moment(numberYear).format("YYYY-MM-DD");
    //         this.listDay.push(formattedDate);
    //        localStorage.setItem("date", JSON.stringify(this.listDay));
    //       }
    // },
    PreviousWeek() {
      if (this.numberWeek != 0) {
        this.numberWeek -= 1;
        this.counter += 1;
        let uri = 'https://damp-woodland-88343.herokuapp.com/api/getWeek/' + this.counter;
        this.axios.get(uri).then((response) => {
          this.getWeek = response.data;
          for (let i = this.getWeek; i < this.getWeek + 7; i++) {
            let numberYear = new Date(Date.UTC(this.currentYear, 0, i));
            let formattedDate = moment(numberYear).format("YYYY-MM-DD");
            this.listDay.push(formattedDate);
            localStorage.setItem("date", JSON.stringify(this.listDay));
          }
        });
        this.listDay.splice(-7);
      }
    },
    nextWeek() {
      this.numberWeek += 1;
      this.counter -= 1;
      let uri = 'https://damp-woodland-88343.herokuapp.com/api/getWeek/' + this.counter;
      this.axios.get(uri).then((response) => {
        this.getWeek = response.data;
        for (let i = this.getWeek; i < this.getWeek + 7; i++) {
          let numberYear = new Date(Date.UTC(this.currentYear, 0, i));
          let formattedDate = moment(numberYear).format("YYYY-MM-DD");
          this.listDay.push(formattedDate);
          localStorage.setItem("date", JSON.stringify(this.listDay));
        }
      });
      this.listDay.splice(-7);
    },
  },
};
</script>
<style lang="scss">
.statistic {
  width: 100%;
}
  .BarChart {
    width: 80%;
    margin-left: 3%;
    span {
      display: flex;
      padding: 20px;

      h3 {
        margin: 0px 10px 0px 10px;
      }
    }
  }


.statistic h1 {
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
