<template>
  <div class="main-content" id="panel">
    <Header></Header>
    <div class="row align-items-center py-4">
      <div class="col-lg-6 col-7">
        <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
          <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
            <li class="breadcrumb-item"><router-link to="/"><i class="fas fa-home"></i></router-link></li>
            <li class="breadcrumb-item"><router-link to="/statistic">Thống kê</router-link></li>
          </ol>
        </nav>
      </div>
      <div class="col-lg-6 col-5 text-right">
        <router-link href="#" class="btn btn-sm btn-neutral" to="/order-month">Tháng</router-link>
        <router-link href="#" class="btn btn-sm btn-neutral" to="/order-week2">Tuần</router-link>
      </div>
    </div>
    <div class="statistic">
      <div class="col1">
        <div class="BarChart">
          <span>
          <button @click="PreviousWeek()">Tuần trước</button>
          <h3>{{
              numberWeek
            }}</h3>
           <button @click="nextWeek()">Tuần kế tiếp</button>
            <p>{{ dateStore }}</p>
         </span>
          <line-chart :chartData="datacollection"></line-chart>
          <!--          <OrderWeek />-->
          <h3 style="text-align: center; font-weight: bold; margin-top: 10px; font-size: 1.2rem">
            Biểu đồ 2: Đơn đặt hàng qua các tuần
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from './LineChart';
import Header from './Header';
import moment from "moment";
//import OrderWeek from "./OrderWeek";
export default {
  components: {
    LineChart,
    Header,
    // OrderWeek
  },
  data() {
    return {
      datacollection: null,
      listDay: [],
      currentYear: new Date().getFullYear(),
      numberWeek: {},
      counter: 0,
      getWeek: null,
      dateStore: [],
      quantity: [1, 2, 3, 2, 1, 2, 1],
      dateLo: JSON.parse(localStorage.getItem("date")),
    }
  },
  created() {
    this.getNumberWeek();
    this.getCurrentDay();
   // const date = moment();
    // const FormattedDate = date.format('MMM DD-YY ') + date.add(7, 'days').format('D YYYY');
    // console.log(FormattedDate);

  },
  mounted() {
    this.fillData();
  },
  methods: {
    getNumberWeek() {
      this.axios.get('https://api-gilo.herokuapp.com/api/getNumber').then((response) => {
        this.numberWeek = response.data;
      });
    },
    getCurrentDay() {
      this.counter = 0;
      let uri = 'https://api-gilo.herokuapp.com/api/getWeek/' + this.counter;
      this.axios.get(uri).then((response) => {
        this.getWeek = response.data;
        for (let i = this.getWeek; i < this.getWeek; i++) {
          let numberYear = new Date(Date.UTC(this.currentYear, 0, i));
          let formattedDate = moment(numberYear).format("DD-MM-YYYY");
          this.listDay.push(formattedDate);
        }
        console.log(this.listDay);
      });
      return this.listDay;
    },
    setDataLocal(listDay) {
      return localStorage.setItem("date", JSON.stringify(listDay));
    },
    getDataLocal() {
      return JSON.parse(localStorage.getItem("date"));
    },
    ////
    fillData() {
      this.datacollection = {
        labels: this.getDataLocal(),
        datasets: [
          {
            label: 'Đơn hàng',
            backgroundColor: '#f87979',
            data: this.quantity
          }
        ]
      }

    },
    async PreviousWeek() {
      if (this.numberWeek !== 0) {
        this.listDay.splice(-7);
        this.numberWeek -= 1;
        this.counter += 1;

        let uri = 'https://api-gilo.herokuapp.com/api/getWeek/' + this.counter;
        this.axios.get(uri).then((response) => {
          this.getWeek = response.data;
          for (let i = this.getWeek; i < this.getWeek + 7; i++) {
            let numberYear = new Date(Date.UTC(this.currentYear, 0, i));
            let formattedDate = moment(numberYear).format("DD-MM-YYYY");
            this.listDay.push(formattedDate);
          }
          this.setDataLocal(this.listDay);
        });
        await this.$store.commit('setNewDate', this.listDay);
        this.dateStore = this.$store.state.dateWeek;
        this.fillData();
      }
    },
    async nextWeek() {
      if (this.numberWeek !== 0) {
        this.listDay.splice(-7);
        this.numberWeek += 1;
        this.counter -= 1;

        let uri = 'https://api-gilo.herokuapp.com/api/getWeek/' + this.counter;
        this.axios.get(uri).then((response) => {
          this.getWeek = response.data;
          for (let i = this.getWeek; i < this.getWeek + 7; i++) {
            let numberYear = new Date(Date.UTC(this.currentYear, 0, i));
            let formattedDate = moment(numberYear).format("DD-MM-YYYY");
            this.listDay.push(formattedDate);
          }
          this.setDataLocal(this.listDay);
        });
        await this.$store.commit('setNewDate', this.listDay);
        this.dateStore = this.$store.state.dateWeek;
        this.fillData();
      }
    },
  }
}
</script>
<style>
.statistic {
  width: 95%;
  margin: 10px auto;
  height: 600px !important;
}
#bar-chart{
  height: 80% !important;
  width: 90%!important;
}
</style>
