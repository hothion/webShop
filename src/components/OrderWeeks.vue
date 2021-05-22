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
          <RanDomChart />
          <h3 style="text-align: center; font-weight: bold; margin-top: 10px; font-size: 1.2rem">Biểu đồ 2: Đơn đặt hàng
            qua các tuần</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import orderWeek from "./OrderWeek.vue";
import moment from "moment";
import Header from './Header.vue';
import RanDomChart from "./RanDomChart";
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
      currentYear: new Date().getFullYear(),
      love: []
    };
  },
  components: {
    //orderWeek,
    Header,
    RanDomChart
  },
  created() {
    this.getNumberWeek();
    let uri = 'https://damp-woodland-88343.herokuapp.com/api/getWeek/' + this.counter;
    this.axios.get(uri).then((response) => {
      this.getWeek = response.data;
    });
  },
  methods: {
    getNumberWeek() {
      this.axios.get('https://api-gilo.herokuapp.com/api/getNumber').then((response) => {
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
    getCurrentDay() {
      for (let i = this.getWeek; i < this.getWeek; i++) {
        let numberYear = new Date(Date.UTC(this.currentYear, 0, i));
        let formattedDate = moment(numberYear).format("DD-MM-YYYY");
        this.listDay.push(formattedDate);
        this.$store.commit('setNewDate', this.listDay);
        localStorage.setItem("date", JSON.stringify(this.listDay));
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
        //const dateInLocal = JSON.parse(localStorage.getItem("date"));
        this.listDay.splice(-7);
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
      // const dateYeu = JSON.parse(localStorage.getItem("date"));
      /**/
      this.listDay.splice(-7);
      this.$store.commit('setNewDate', this.listDay);
      this.love = this.$store.state.dateWeek
    },
  }
};
</script>
<style lang="scss">
.statistic {
  width: 100%;
}

.BarChart {
  width: 95%;
  margin: 5px auto;

  span {
    display: flex;
    padding: 20px;

    h3 {
      margin: 0px 10px 0px 10px;
    }

    button {
      padding: 10px;
      border: 1px solid white;
      background: #E86356;
      border-radius: 5px;
      color: white;
      opacity: 0.9;

      &:hover {
        transition: 0.5s all;
        opacity: 1;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
      }
    }
  }
}


.statistic h1 {
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
