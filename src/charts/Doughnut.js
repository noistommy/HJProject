import { Doughnut } from 'vue-chartjs'

import { doughnutOptions } from '../assets/js/chartoption'
import { doughnutProps } from '../assets/js/chartpropertie'

import getGradient from '../assets/js/gradientSet'
import { setDoughnut } from '../assets/js/chartProperties'

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
    // chartOptions: {
    //   type: Array || Object,
    //   required: true,
    // },
    colorTheme: Array || Object,
  },
  data() {
    return {
      dataSets: Array,
      options: Object,
      chartVlaue: null,
      gradientSet: Array,
      gradientSet2: Array,
      gradientOption: {
        start: {
          posx: 300,
          posy: 300,
        },
        end: {
          posx: 50,
          posy: 50,
        },
      },
    }
  },
  mounted() {
    this.options = doughnutOptions
    this.options.plugins = { datalabels: { display: false } }
    this.options = $.extend(true, {}, this.options, {
      legendCallback: (chart) => {
        const text = []
        text.push(`<ul class="${chart.id}-legend">`)
        chart.data.datasets.forEach((value, i) => {
          // text.push(`<li><span style="background-color:${value.backgroundColor}"></span>`)
          if (value.label) {
            text.unshift(value.label)
          }
          text.push('</li>')
        })
        text.push('</ul>')
        return text.join('')
      },
    })
    let val = ''
    if (this.chartData.length > 1) {
      val = ((this.chartData.datasets[0].data[0] / this.chartData.datasets[1].data[0]) * 100).toFixed(1)
    } else {
      val = this.chartData.datasets[0].data[4]
    }
    const centerText = {
      afterDraw: (chart) => {
        const width = chart.chart.width
        const height = chart.chart.height
        const ctx = chart.chart.ctx

        ctx.restore()
        const fontSize = (height / 60).toFixed(2)
        ctx.font = `${fontSize}em "Bebas Neue"`
        ctx.textBaseline = 'middle'
        ctx.fillStyle = '#ffffff'
        ctx.fontWeight = 'bold'
        const text = `${val}%`
        const textX = Math.round((width - ctx.measureText(text).width) / 2)
        const textY = height / 2

        ctx.fillText(text, textX, textY)
        ctx.save()
      },
    }
    this.addPlugin(centerText)
    this.gradientSet = getGradient.makeGradientSet(this.$refs.canvas, this.chartData.datasets.length + 1, this.gradientOption, this.colorTheme)
    this.chartData.datasets = setDoughnut(this.chartData.datasets, this.gradientSet, doughnutProps, 'Doughnut')
    this.renderChart(this.chartData, this.options)
    // $('.legent-con').html(this.$data._chart.generateLegend())
  },
}
