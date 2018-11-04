import annotation from 'chartjs-plugin-annotation'
import { HorizontalBar } from 'vue-chartjs'

import { horizontalBarOptions } from '../assets/js/chartoption'
import { horizontalProps } from '../assets/js/chartpropertie'

import getGradient from '../assets/js/gradientSet'
import { setProperties } from '../assets/js/chartProperties'

export default {
  extends: HorizontalBar,
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
          posx: 450,
          posy: 0,
        },
        end: {
          posx: 0,
          posy: 0,
        },
      },
    }
  },
  mounted() {
    this.addPlugin(annotation)
    this.options = $.extend(true, {}, this.chartOptions, horizontalBarOptions)
    this.options.scales.xAxes[0].ticks.max = 120
    this.gradientSet = getGradient.makeGradientSet(this.$refs.canvas, this.chartData.datasets.length, this.gradientOption, this.colorTheme)
    this.chartData.datasets = setProperties(this.chartData.datasets, this.gradientSet, horizontalProps, 'horizontalbar')
    this.renderChart(this.chartData, this.options)
  },
}
