<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradient2: null
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgb(60, 179, 117)");
    this.gradient.addColorStop(0.5, "rgb(60, 179, 115)");
    this.gradient.addColorStop(1, "rgb(60, 179, 113)");

    this.gradient2.addColorStop(0, "rgba(255, 99, 71, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(255, 99, 71, 0.8)");
    this.gradient2.addColorStop(1, "rgba(255, 99, 71, 0.6)");
    
    fetch(`https://api-gilo.herokuapp.com/api/user_chart`)
        .then((response) => response.json())
        .then((data) => {
          const user_month = data;
                // render chart here
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
                            label: "Users",
                            borderColor: "#FC2525",
                            pointBackgroundColor: "white",
                            borderWidth: 1,
                            pointBorderColor: "white",
                            backgroundColor: this.gradient,
                            data: user_month
                        },
                        {
                            label: "Shops",
                            borderColor: "#05CBE1",
                            pointBackgroundColor: "green",
                            pointBorderColor: "white",
                            borderWidth: 1,
                            backgroundColor: this.gradient2,
                            data: [1,3,0,1,2,0,2,1,0,0,3]
                        }
                        ]
                    },
                    {
                      responsive: true,
                      maintainAspectRatio: false,
                    }
                );
              });
  }
};
</script>