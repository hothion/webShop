<script>
import {Line} from "vue-chartjs";
import {store} from "../store";

export default {
  extends: Line,
  props: {
    listDay: {
      type: Array
    }
  },
  data() {
    return {
      gradient: null,
      gradient2: null,
      found: [],
      dateLocal: store.state.dateWeek,
      dateTimeStore: []
    };
  },
  created() {
    console.log(this.$store.state.dateWeek)
    //this.setdate();
  },
  methods:{
    setdate() {
      this.dateTimeStore = JSON.parse(localStorage.getItem("date"));
      this.$store.commit('setNewDate',this.dateTimeStore);
      console.log(this.$store.state.dateWeek)
    }
  },
  mounted() {
    let yeu = document.createElement('button');
    yeu.innerText = " Add";
    yeu.innerHTML;
    yeu.style.color = "red";
    this.gradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);
    this.gradient.addColorStop(0, "rgba(255, 99, 71, 0.8)");
    this.gradient.addColorStop(0.5, "rgba(255, 99, 71, 0.6)");
    this.gradient.addColorStop(1, "rgba(255, 99, 71, 0.4)");

    fetch('https://api-gilo.herokuapp.com/api/weekChart')
        .then((response) => response.json())
        .then((data) => {
          const order_week = data;
          //var storedNames = JSON.parse(localStorage.getItem("date"));

          let quantity = [];
          for (var i = 0; i < order_week.length; i++) {
            if (this.dateLocal.indexOf(order_week[i].date) != -1) {
              quantity.push(order_week[i].date);
            }
          }
          this.renderChart(
              {
                labels: this.dateLocal,
                datasets: [
                  {
                    label: "Đơn hàng",
                    backgroundColor: this.gradient,
                    data: quantity,
                  },
                ],
              },
              {responsive: true, maintainAspectRatio: false},
          );
        });
  },
  watch:{
    getStore(){
      return this.dateLocal;
    }
  }
};
</script>
<style lang="scss">
#bar-chart {
  width: 400px;
}
</style>
