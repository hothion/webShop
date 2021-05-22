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
        <router-link href="#" class="btn btn-sm btn-neutral" to="/order-week2">Tuần</router-link>
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
import LineChart from './LineChart';
import Header from './Header';
import moment from "moment";
export default {
  components: {
    LineChart,
    Header
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
        labels: this.$store.state.dateWeek,
        datasets: [
          {
            label: 'Đơn hàng',
            backgroundColor: '#f87979',
            data: this.quantity
          }
        ]
      }
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
      }
    },
    nextWeek() {
      this.numberWeek += 1;
      this.counter -= 1;
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
      this.listDay.splice(-7);
      this.$store.commit('setNewDate', this.listDay);
      this.love = this.$store.state.dateWeek
    },
  }
  // fetch('https://api-gilo.herokuapp.com/api/weekChart')
//     .then((response) => response.json())
//     .then((data) => {
//       const order_week = data;
//       for (var i = 0; i < order_week.length; i++) {
//         if (this.listDay.indexOf(order_week[i].date) != -1) {
//           this.quantity.push(order_week[i].date);
//         }
//       }
//     });
// this.listDay.splice(-7);
// this.$store.commit('setNewDate', this.listDay);

}
</script>
<style>
.statistic {
  width: 95%;
  margin: 10px auto;
  height: 600px!important;
}
#line-chart{
  height: 700px!important;
  font-size: 18px!important;
}
</style>
