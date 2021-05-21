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
          <span>
          <button @click.prevent="PreviousWeek()">Tuần trước</button>
          <h3>{{
              numberWeek
            }}</h3>
           <button @click.prevent="nextWeek()">Tuần kế tiếp</button>
            <p>{{ love }}</p>
         </span>
          <line-chart :chart-data="datacollection"></line-chart>
          <h3 style="text-align: center; font-weight: bold; margin-top: 10px; font-size: 1.2rem">Biểu đồ 2: Đơn đặt hàng
            qua các tuần</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from './LineChart'
import moment from "moment";
export default {
  components: {
    LineChart
  },
  data () {
    return {
      datacollection: null,
      listDay: [],
      currentYear: new Date().getFullYear(),
      numberWeek: {},
      counter: 0,
      getWeek: [],
      love: [],
      quantity:[]
    }
  },
  created() {
    this.getNumberWeek();
  },
  mounted () {
    this.fillData()
  },
  methods: {
    getNumberWeek() {
      this.axios.get('https://api-gilo.herokuapp.com/api/getNumber').then((response) => {
        this.numberWeek = response.data;
      });
    },
    fillData () {
      this.datacollection = {
        labels: [this.PreviousWeek()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
    PreviousWeek() {
      if (this.numberWeek != 0) {
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
            localStorage.setItem("date", JSON.stringify(this.listDay));
          }
        });
        this.$store.commit('setNewDate', this.listDay);
        this.love = this.$store.state.dateWeek
        fetch('https://api-gilo.herokuapp.com/api/weekChart')
            .then((response) => response.json())
            .then((data) => {
              const order_week = data;
              for (var i = 0; i < order_week.length; i++) {
                if (this.listDay.indexOf(order_week[i].date) != -1) {
                  this.quantity.push(order_week[i].date);
                }
              }
            });
        this.fillData(this.listDay, this.quantity);
        this.listDay.splice(-7);
      }
      return this.listDay;
    },
  }
}
</script>
<!--<script>-->
<!--import LineChart from "./LineChart";-->
<!--import moment from "moment";-->
<!--import {store} from "../store";-->

<!--export default {-->
<!--  components: {-->
<!--    LineChart-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      datacollection: null,-->
<!--      getWeek: [],-->
<!--      number: 0,-->
<!--      listDay: [],-->
<!--      counter: 0,-->
<!--      currentYear: new Date().getFullYear(),-->
<!--      numberWeek: {},-->
<!--      love: [],-->
<!--      gradient: null,-->
<!--      gradient2: null,-->
<!--      dateLocal: store.state.dateWeek,-->
<!--      dateTimeStore: [],-->
<!--      quantity: []-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    this.getNumberWeek();-->
<!--    let uri = 'https://damp-woodland-88343.herokuapp.com/api/getWeek/' + this.counter;-->
<!--    this.axios.get(uri).then((response) => {-->
<!--      this.getWeek = response.data;-->
<!--    });-->
<!--    this.getCurrentDay();-->
<!--    console.log(this.love)-->
<!--    console.log(this.dateLocal)-->
<!--  },-->
<!--  mounted() {-->
<!--    this.fillData();-->
<!--  },-->
<!--  methods: {-->
<!--    getNumberWeek() {-->
<!--      this.axios.get('https://api-gilo.herokuapp.com/api/getNumber').then((response) => {-->
<!--        this.numberWeek = response.data;-->
<!--      });-->
<!--    },-->
<!--    fillData(date, quantity) {-->
<!--        this.datacollection = {-->
<!--          labels: date,-->
<!--          datasets: [-->
<!--            {-->
<!--              label: 'Order',-->
<!--              backgroundColor: this.gradient,-->
<!--              data: quantity-->
<!--            }-->
<!--          ]-->
<!--        }-->
<!--    },-->
<!--    getDataChart() {-->
<!--      this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 450);-->
<!--      this.gradient.addColorStop(0, "rgba(255, 99, 71, 0.8)");-->
<!--      this.gradient.addColorStop(0.5, "rgba(255, 99, 71, 0.6)");-->
<!--      this.gradient.addColorStop(1, "rgba(255, 99, 71, 0.4)");-->
<!--      fetch('https://api-gilo.herokuapp.com/api/weekChart')-->
<!--          .then((response) => response.json())-->
<!--          .then((data) => {-->
<!--            const order_week = data;-->
<!--            for (var i = 0; i < order_week.length; i++) {-->
<!--              if (this.dateLocal.indexOf(order_week[i].date) != -1) {-->
<!--                this.quantity.push(order_week[i].date);-->
<!--              }-->
<!--            }-->
<!--          });-->
<!--    },-->
<!--    getCurrentDay() {-->
<!--      for (let i = this.getWeek; i < this.getWeek; i++) {-->
<!--        let numberYear = new Date(Date.UTC(this.currentYear, 0, i));-->
<!--        let formattedDate = moment(numberYear).format("DD-MM-YYYY");-->
<!--        this.listDay.push(formattedDate);-->
<!--        this.$store.commit('setNewDate', this.listDay);-->
<!--        localStorage.setItem("date", JSON.stringify(this.listDay));-->
<!--        this.love = this.$store.state.dateWeek-->
<!--      }-->
<!--    },-->
<!--    PreviousWeek() {-->
<!--      if (this.numberWeek != 0) {-->
<!--        this.listDay.splice(-7);-->
<!--        this.numberWeek -= 1;-->
<!--        this.counter += 1;-->
<!--        let uri = 'https://api-gilo.herokuapp.com/api/getWeek/' + this.counter;-->
<!--        this.axios.get(uri).then((response) => {-->
<!--          this.getWeek = response.data;-->
<!--          for (let i = this.getWeek; i < this.getWeek + 7; i++) {-->
<!--            let numberYear = new Date(Date.UTC(this.currentYear, 0, i));-->
<!--            let formattedDate = moment(numberYear).format("DD-MM-YYYY");-->

<!--            this.listDay.push(formattedDate);-->
<!--            localStorage.setItem("date", JSON.stringify(this.listDay));-->
<!--          }-->
<!--        });-->
<!--        this.$store.commit('setNewDate', this.listDay);-->
<!--        this.love = this.$store.state.dateWeek-->
<!--        fetch('https://api-gilo.herokuapp.com/api/weekChart')-->
<!--            .then((response) => response.json())-->
<!--            .then((data) => {-->
<!--              const order_week = data;-->
<!--              for (var i = 0; i < order_week.length; i++) {-->
<!--                if (this.love.indexOf(order_week[i].date) != -1) {-->
<!--                  this.quantity.push(order_week[i].date);-->
<!--                }-->
<!--              }-->
<!--            });-->
<!--        this.fillData(this.love, this.quantity);-->
<!--        this.listDay.splice(-7);-->
<!--      }-->
<!--    },-->
<!--    nextWeek() {-->
<!--      this.numberWeek += 1;-->
<!--      this.counter -= 1;-->
<!--      let uri = 'https://api-gilo.herokuapp.com/api/getWeek/' + this.counter;-->
<!--      this.axios.get(uri).then((response) => {-->
<!--        this.getWeek = response.data;-->
<!--        for (let i = this.getWeek; i < this.getWeek + 7; i++) {-->
<!--          let numberYear = new Date(Date.UTC(this.currentYear, 0, i));-->
<!--          let formattedDate = moment(numberYear).format("DD-MM-YYYY");-->
<!--          this.listDay.push(formattedDate);-->
<!--          localStorage.setItem("date", JSON.stringify(this.listDay));-->
<!--        }-->
<!--      });-->
<!--      // const dateYeu = JSON.parse(localStorage.getItem("date"));-->
<!--      this.$store.commit('setNewDate', this.listDay);-->
<!--      this.love = this.$store.state.dateWeek-->
<!--      fetch('https://api-gilo.herokuapp.com/api/weekChart')-->
<!--          .then((response) => response.json())-->
<!--          .then((data) => {-->
<!--            const order_week = data;-->
<!--            for (var i = 0; i < order_week.length; i++) {-->
<!--              if (this.love.indexOf(order_week[i].date) != -1) {-->
<!--                this.quantity.push(order_week[i].date);-->
<!--              }-->
<!--            }-->
<!--          });-->
<!--      this.fillData(this.love, this.quantity);-->
<!--      console.log(this.quantity)-->
<!--      this.listDay.splice(-7);-->
<!--    },-->
<!--  }-->
<!--}-->
<!--</script>-->

<style>
.statistic {
  width: 95%;
  margin: 10px auto;
  height: 600px!important;
}
#line-chart{
  height: 500px!important;
  font-size: 18px!important;
}
</style>
