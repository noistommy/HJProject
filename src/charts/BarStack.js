import annotation from 'chartjs-plugin-annotation'
import { Bar, mixins } from 'vue-chartjs'

import { barStackOptions } from '../assets/js/chartoption'
import { barProps } from '../assets/js/chartpropertie'

import getGradient from '../assets/js/gradientSet'
import { setProperties } from '../assets/js/chartProperties'

export default {
  extends: Bar,
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
      gradientSet: Array,
      gradientOption: {
        start: {
          posx: 0,
          posy: 0,
        },
        end: {
          posx: 0,
          posy: 50,
        },
      },
    }
  },
  mounted() {
    this.addPlugin(annotation)
    this.options = $.extend(true, {}, this.chartOptions, barStackOptions)
    // this.gradientSet = getGradient.makeGradientSet(this.$refs.canvas, this.chartData.length, this.gradientOption, this.colorTheme)
    this.chartData.datasets = setProperties(this.chartData.datasets, this.colorTheme, barProps, '')
    this.renderChart(this.chartData, this.options)
  },
}
