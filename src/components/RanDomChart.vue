<template>
  <div class="main-content" id="panel">
    <Header></Header>
    <div class="row align-items-center py-4">
      <div class="col-lg-6 col-7">
        <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
          <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
            <li class="breadcrumb-item">
              <router-link to="/"><i class="fas fa-home"></i></router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/statistic">Thống kê</router-link>
            </li>
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
          <button @click="PreviousWeek()"> <i class="fas fa-chevron-circle-left"></i> </button>
          <h3>{{
              numberWeek
            }}</h3>
           <button @click="nextWeek()"> <i class="fas fa-chevron-circle-right"></i> </button>
         </span>
          <line-chart :chartData="datacollection"></line-chart>
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
export default {
  components: {
    LineChart,
    Header,
  },
  data() {
    return {
      date: null,
      datacollection: null,
      listDay: [],
      currentYear: new Date().getFullYear(),
      numberWeek: {},
      counter: 0,
      getWeek: null,
      dateStore: [],
      quantity: [1, 2, 3, 2, 1, 2, 1],
      dateCurrent: [],
      qty: []
    }
  },
  created() {
    this.getNumberWeek();
    this.getCurrentDay();
    this.getQuantity();
  },

  mounted() {
    this.fillData();
  },
  methods: {
    loadOnce:function(){
      location.reload();
      console.log("yeu")
    },
    getNumberWeek() {
      this.axios.get('https://api-gilo.herokuapp.com/api/getNumber').then((response) => {
        this.numberWeek = response.data;
      });
    },
    async getCurrentDay() {
      if (this.numberWeek !== 0) {
        await this.axios.get('https://api-gilo.herokuapp.com/api/getWeek/' + 0).then((response) => {
          this.getWeek = response.data;
          if (this.dateCurrent.length > 0) {
            this.dateCurrent = [];
          }
          for (let i = this.getWeek; i < this.getWeek + 7; i++) {
            let numberYear = new Date(Date.UTC(this.currentYear, 0, i));
            let formattedDate = moment(numberYear).format("YYYY-MM-DD"); // DD-MM-YYYY
            this.dateCurrent.push(formattedDate);
          }
          this.setCurrentDayLocal(this.dateCurrent)
          return JSON.parse(JSON.stringify(this.dateCurrent));

        });
      }
    },
    setDataLocal(listDay) {
      return localStorage.setItem("date", JSON.stringify(listDay));
    },
    getDataLocal() {
      return JSON.parse(localStorage.getItem("date"));
    },
    setCurrentDayLocal(listDay) {
      return localStorage.setItem("currentDate", JSON.stringify(listDay));
    },
    getCurrentDayLocal() {
      return JSON.parse(localStorage.getItem("currentDate"));
    },
    ////
    async fillData() {
      const dayInLocal = this.getCurrentDayLocal();
      await fetch('https://api-gilo.herokuapp.com/api/weekChart')
          .then((response) => response.json())
          .then((data) => {
            const order_week = data;
            for (let i = 0; i < order_week.length; i++) {
              if (dayInLocal.indexOf(order_week[i].date) !== -1) {
                this.qty.push(order_week[i].total_quantity);
              }
            }
          });
      if(this.qty.length>0){
        console.log(this.qty);
      }else {
        console.log("Quantity = 0")
      }
      this.datacollection = {
        labels: this.getCurrentDayLocal(),
        datasets: [
          {
            label: 'Đơn hàng',
            backgroundColor: '#f87979',
            data: this.qty
          }
        ]
      }
    },
    async PreviousWeek() {
      if (this.numberWeek !== 0) {
        this.listDay.splice(-7);
        this.dateCurrent.splice(-7);
        this.numberWeek -= 1;
        this.counter += 1;
        let uri = 'https://api-gilo.herokuapp.com/api/getWeek/' + this.counter;
        this.axios.get(uri).then((response) => {
          this.getWeek = response.data;
          for (let i = this.getWeek; i < this.getWeek + 7; i++) {
            let numberYear = new Date(Date.UTC(this.currentYear, 0, i));
            let formattedDate = moment(numberYear).format("YYYY-MM-DD"); // DD-MM-YYYY
            this.listDay.push(formattedDate);
          }
          this.setCurrentDayLocal(this.listDay);
          this.$store.commit('setNewDate', this.getDataLocal());
          this.dateStore = this.$store.state.dateWeek;
        });
        //await this.getQuantity();
        await this.fillData();
      }
    },
    async nextWeek() {
      if (this.numberWeek !== 0) {
        this.listDay.splice(-7);
        this.dateCurrent.splice(-7);

        this.numberWeek += 1;
        this.counter -= 1;

        let uri = 'https://api-gilo.herokuapp.com/api/getWeek/' + this.counter;
        this.axios.get(uri).then((response) => {
          this.getWeek = response.data;
          for (let i = this.getWeek; i < this.getWeek + 7; i++) {
            let numberYear = new Date(Date.UTC(this.currentYear, 0, i));
            let formattedDate = moment(numberYear).format("YYYY-MM-DD"); // DD-MM-YYYY
            this.listDay.push(formattedDate);
          }
          this.setCurrentDayLocal(this.listDay);
          this.$store.commit('setNewDate', this.getDataLocal());
          this.dateStore = this.$store.state.dateWeek;
        });
        //await this.getQuantity();
        await this.fillData();
      }
    },
   async getQuantity(){
      const dayInLocal = this.getCurrentDayLocal();
      await fetch('https://api-gilo.herokuapp.com/api/weekChart')
          .then((response) => response.json())
          .then((data) => {
            const order_week = data;
            for (let i = 0; i < order_week.length; i++) {
              if (dayInLocal.indexOf(order_week[i].date) !== -1) {
                this.qty.push(order_week[i].date);
              }
            }
          });
     console.log(this.qty.length);
      if(this.qty.length>0){

        console.log(this.qty);
      }else {
        console.log("No have")
      }
    }
  }
}
</script>
<style>
.statistic {
  width: 95%;
  margin: 10px auto;
  height: 600px !important;
}

#bar-chart {
  height: 600px !important;
  width: 90% !important;
}
</style>
