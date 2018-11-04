import { Line, mixins } from 'vue-chartjs'
import { lineOptions } from '../assets/js/chartoption'
import { lineProps } from '../assets/js/chartpropertie'
import getGradient from '../assets/js/gradientSet'
import { setProperties } from '../assets/js/chartProperties'

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: Object,
      required: false,
    },
    chartLabels: {
      type: Array,
      required: true,
    },
    chartOptions: {
      type: Object,
      required: true,
    },
    colorTheme: Array || Object,
  },
  data() {
    return {
      dataSets: Array,
      options: Object,
    }
  },
  mounted() {
    this.options = $.extend(true, {}, this.chartOptions, lineOptions)
    this.chartData.datasets = setProperties(this.chartData.datasets, this.colorTheme, lineProps, 'line')

    this.renderChart(this.chartData, this.options)
  },
}
