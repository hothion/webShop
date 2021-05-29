
<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  data() {
    return {
      gradient: null,
      gradient2: null,
    };
  },
  created(){
  },
  methods: {

  },
  mounted() {
    this.gradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgb(23, 97, 255)");
    this.gradient.addColorStop(0.5, "rgb(23, 97, 245)");
    this.gradient.addColorStop(1, "rgb(23, 97, 235)");

    this.gradient2.addColorStop(0, "rgba(0, 231, 255, 2)");
    this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 1.5)");
    this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0.1)");

    fetch('https://api-gilo.herokuapp.com/api/user_chart')
        .then((response) => response.json())
        .then((data) => {
          const user_month = data;
          this.renderChart(
              {
                labels: [
                  "Tháng 1",
                  "Tháng 2",
                  "Tháng 3",
                  "Tháng 4",
                  "Tháng 5",
                  "Tháng 6",
                  "Tháng 7",
                  "Tháng 8",
                  "Tháng 9",
                  "Tháng 10",
                  "Tháng 11",
                  "Tháng 12",
                ],
                datasets: [
                  {
                    label: "Người dùng",
                    backgroundColor: this.gradient,
                    data:user_month,
                  },
                ],
              },
              { responsive: true, maintainAspectRatio: false }
          );
        });
  },
};
</script>
<style lang="scss">
#line-chart {
  width: 400px;
}
</style>
