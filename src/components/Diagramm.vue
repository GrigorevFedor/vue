<script>
    import {Doughnut,  } from 'vue-chartjs'
    // const { reactiveProp } = mixins
    export default {
      extends: Doughnut,
      // mixins: [reactiveProp],
      props: {
        chartData: {
          type: Object,
          default: null
        },
        
        options: {
          type: Object,
          default: null
        },
  
      },
      
      mounted () {
        debugger
        this.renderChart(this.chartData, this.options)
      },
      watch: {
    
        chartData: function () {
          this.renderChart(this.chartData, this.options)
        }
      },
    }
  </script>