import { Doughnut } from 'vue-chartjs'
import { halfDoughnutOptions } from '../assets/js/chartoption'
import { halfDoughnutProps } from '../assets/js/chartpropertie'
import { setProperties } from '../assets/js/chartProperties'
import getGradient from '../assets/js/gradientSet'

export default {
  extends: Doughnut,
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
      // dataSets: Array,
      options: Object,
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
    this.options = halfDoughnutOptions
    this.options.plugins = { datalabels: { display: false } }
    const val = ((this.chartData.datasets[0].data[0] / (this.chartData.datasets[0].data[0] + this.chartData.datasets[0].data[1])) * 100).toFixed(1)
    const centerText = {
      afterDraw: (chart) => {
        const width = chart.chart.width
        const height = chart.chart.height
        const ctx = chart.chart.ctx
        ctx.restore()
        const fontSize = (height / 60).toFixed(2)
        ctx.font = `${fontSize}em Bebas Neue`
        ctx.textBaseline = 'top'
        ctx.fillStyle = '#ffffff'
        ctx.fontWeight = 'bold'
        const text = `${val}%`
        const textX = Math.round((width - ctx.measureText(text).width) / 2)
        const textY = (height / 2) + 20

        ctx.fillText(text, textX, textY)
        ctx.save()
      },
    }
    this.addPlugin(centerText)

    this.gradientSet = getGradient.makeGradientSet(this.$refs.canvas, 2, this.gradientOption, this.colorTheme)
    this.chartData.datasets = setProperties(this.chartData.datasets, this.gradientSet, halfDoughnutProps, 'halfDoughnut')
    this.renderChart(this.chartData, this.options)
  },
}
