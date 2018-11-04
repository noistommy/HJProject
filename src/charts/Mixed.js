import { Bar, mixins } from 'vue-chartjs'
import annotation from 'chartjs-plugin-annotation'

import { mixedOptions } from '../assets/js/chartoption'
import { barProps, lineProps } from '../assets/js/chartpropertie'
import getGradient from '../assets/js/gradientSet'
import { setBarStackGroup, setMixed } from '../assets/js/chartProperties'


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
      // dataSets: Array,
      options: Object,
      gradient: null,
      gradient2: null,
      gradientSet: Array,
      gradientOption: {
        start: {
          posx: 0,
          posy: 200,
        },
        end: {
          posx: 0,
          posy: 270,
        },
      },
    }
  },
  mounted() {
    this.options = $.extend(true, {}, this.chartOptions, mixedOptions)
    this.gradientSet = getGradient.makeGradientSet(this.$refs.canvas, this.chartData.datasets.length, this.gradientOption, this.colorTheme)
    this.chartData.datasets = setMixed(this.chartData.datasets, this.gradientSet, [barProps, lineProps], this.stackIds)
    this.renderChart(this.chartData, this.options)
  },
}
