<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ['options','chartData'],
  data(){
    return{
      responsive: true,
      maintainAspectRatio: false
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options, this.responsive,this.maintainAspectRatio)
  },
  watch: {
    chartData: function() {
      this.renderChart(this.chartData, this.options);
    }
  }
}
</script>
