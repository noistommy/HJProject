import { Pie } from 'vue-chartjs'
import datalabels from 'chartjs-plugin-datalabels'
import { pieOptions } from '../assets/js/chartoption'
import getGradient from '../assets/js/gradientSet'


export default {
  extends: Pie,
  props: {
    chartData: {
      type: Object,
      required: false,
    },
    chartLabels: {
      type: Array,
      required: true,
    },
    colorTheme: Array || Object,
  },
  data() {
    return {
      options: pieOptions,
      datalabels: {},
      gradient: null,
      gradient2: null,
      gradient3: null,
      gradient4: null,
      chartVlaue: null,
      gradientSet: Array,
      gradientOption: {
        start: {
          posx: 0,
          posy: 0,
        },
        end: {
          posx: 0,
          posy: 200,
        },
      },
    }
  },
  mounted() {
    this.gradientSet = getGradient.makeGradientSet(this.$refs.canvas, this.chartData.datasets[0].data.length, this.gradientOption, this.colorTheme)
    this.chartData.labels = this.chartData.labels
    this.chartData.datasets = [
        {
          borderColor: '#14161c',
          borderWidth: 5,
          backgroundColor: [this.gradientSet[0], this.gradientSet[1], this.gradientSet[2], this.gradientSet[3], this.gradientSet[4], this.gradientSet[5], this.gradientSet[6]],
          hoverBackgroundColor: [this.gradientSet[0], this.gradientSet[1], this.gradientSet[2], this.gradientSet[3], this.gradientSet[4], this.gradientSet[5], this.gradientSet[6]],
          // data: [30, 20, 20, 15, 10, 7, 3],
          data: this.chartData.datasets[0].data,
          fill: false,
        },
      ]
    this.renderChart(this.chartData, this.options)
  },
}
