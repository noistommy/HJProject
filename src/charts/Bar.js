import annotation from 'chartjs-plugin-annotation'
import { Bar, mixins } from 'vue-chartjs'
import {
  mapGetters,
} from 'vuex'

import { barOptions } from '../assets/js/chartoption'
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
      dataSets: this.chartData,
      options: this.chartOptions,
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
  computed: {
    ...mapGetters([
      'getFullId',
    ]),
  },
  created() {
  },
  mounted() {
    this.addPlugin(annotation)
    if (this.getFullId.factory === '') {
      barOptions.legend.position = 'left'
    } else {
      barOptions.legend.position = 'top'
    }

    this.options = $.extend(true, {}, this.chartOptions, barOptions)
    this.gradientSet = getGradient.makeGradientSet(this.$refs.canvas, this.chartData.datasets.length, this.gradientOption, this.colorTheme)
    this.chartData.datasets = setProperties(this.chartData.datasets, this.gradientSet, barProps, '')
    this.renderChart(this.chartData, this.options)
  },
}
