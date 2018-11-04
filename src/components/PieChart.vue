<template lang="pug">
  div.stateCard
    div.title(@click="getChartData()") {{chartTitle}} 
      .today (당{{chartDateType}}기준)
    div.content
      component(:is="chartType", :chart-data="chartdata", :chart-labels="labels", :chart-options="options", :color-theme="colorTheme",:class="chartType", class="chart-container" style="width:100%; height:100%")
      div.legent-cont(v-if="isLegend")
      div.range(v-if="isRange", :class="chartType")
        span.min 0%
        span.max 100%

</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import DoughnutType from '@/charts/Doughnut'
import HalfDoughnutType from '@/charts/HalfDoughnut'
import PieType from '@/charts/Pie'
import { baseOptions } from '../assets/js/chartoption'
import ColorTheme from '../assets/js/colors'

export default {
  name: 'base-chart',
  components: {
    DoughnutType,
    HalfDoughnutType,
    PieType,
  },
  props: {
    chartId: String,
    colorTheme: Array,
    pageType: String,
  },
  data() {
    return {
      chartTitle: 'Chart Title',
      chartDateType: '일일',
      chartdata: {
          datasets: [],
          labels: [],
        },
      datasets: [],
      labels: [],
      options: baseOptions,
      chartType: '',
      isLegend: true,
      isRange: true,
      interval: Function,
    }
  },
  computed: {
    ...mapGetters([
      'baseUrl',
      'getFullId',
    ]),
  },
  created() {
  },
  methods: {
    getChartData() {
      this.chartType = ''
      this.datasets = []
      this.labels = []
      const baseUrl = `${this.baseUrl}/charts/bi/management/favorite/${this.getFullId.factory}${this.chartId}${this.getFullId.term}`
      axios.get(baseUrl)
      .then((response) => {
        this.result = response
        this.chartType = response.data.ChartType
        this.chartTitle = response.data.ChartName
        this.chartDateType = response.data.AxisUnitName
        const seriesData = this.limitDataChange(response.data.Series, '')
        seriesData.forEach((item, i) => {
          const dataset = {}
          dataset.data = item.Values
          dataset.label = item.Label
          if (item.Type !== '') {
            dataset.type = item.Type
          }
          this.datasets.push(dataset)
        })
        this.chartdata.datasets = this.datasets
        this.chartdata.labels = response.data.AxisLabels
      })
      .catch((error) => {
        this.isLoading = true
        console.log(error)
      })
    },
    intervalUpdate() {
      this.interval = setInterval(() => {
        this.getChartData()
      }, 60 * 1000)
    },
    limitDataChange(series, type) {
      if (series[0].Values[0] > 100) {
        series[0].Values[0] = 100
        series[0].Values[1] = 0
      }
      return series
    },
  },
  mounted() {
    this.$store.watch(() => {
      this.getChartData()
    })
  this.intervalUpdate()
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
}
</script>



<style lang="less">
  .stateCard {
    position:relative;
    width:100%;
    height: 42vh;
    // margin: 5px;
    padding: 10px;
    background-color: #14161c;
    .title {
      // position: absolute;
      width: 100%;
      padding: 0.3em 1.5em 0.8em 1.5em;
      font-size: 1.5em;
      // font-family: '맑은고딕';
      font-weight: 700;
      .today {
        float: right;
        font-size: 0.6em;
        color: #ccc; 
      }
    }
    .content {
      width: 100%;
      height: 80%;
      position: relative;
      .range {
        position: absolute;
        width: 100%;
        font-size: 1.2em;
        font-weight: bold;
        padding: 0 3vw;
        z-index: -100;
        &.half-doughnut-type {
          bottom: 4vh;
          span {
            display: inline-block;
            width: 3em;
            text-align: center;
            float: left;
          }
          .max {
            float:right;
          }
        }
        &.doughnut-type {
          height:100%;
          top:-20px;
          span {
            display: inline-block;
            width: 100%;
            text-align: center;
          }
          .min {
            display: none;
          }
          .max {
            display: none;
          }
        }
      }
    }
    // canvas {
    // .stateCard .content{
    //   background: url('../assets/bgpetten.png') repeat;
    // }
    // &:hover {
    //   cursor: pointer;
    //   box-shadow: 0 0 20px #aaa;
    // }
  }
</style>
