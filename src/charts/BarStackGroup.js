import { Bar, mixins } from 'vue-chartjs'
import annotation from 'chartjs-plugin-annotation'

import { stackGroupOptions } from '../assets/js/chartoption'
import { barProps, lineProps } from '../assets/js/chartpropertie'
import getGradient from '../assets/js/gradientSet'
import { setBarStackGroup } from '../assets/js/chartProperties'

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
      stackIds: [1, 1, 0, 1, 1, 1],
    }
  },
  created() {
  },
  mounted() {
    this.addPlugin(annotation)
    this.options = $.extend(true, {}, this.chartOptions, stackGroupOptions)
    this.gradientSet = getGradient.makeGradientSet(this.$refs.canvas, this.chartData.datasets.length, this.gradientOption, this.colorTheme)
    this.chartData.datasets = setBarStackGroup(this.chartData.datasets, this.gradientSet, [barProps, lineProps], this.stackIds)
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    chartData: (val) => {
      this._chart.update()
      this.renderChart(this.chartData, this.options)
    },
  },
}
