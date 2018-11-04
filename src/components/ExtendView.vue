<template lang="pug">
 div.extendPage(:class='{active: showExtend}')
  .extend-container
    div.close-btn(@click="$emit('close')") 닫기
    div.extend-wrapper
      div.header {{chartTitle}}
        span(v-if="getFullId.factory === 'factory001_'") (1공장)
        span(v-else) (2공장)
      div.content
        div.content-wrapper.center
          component(:is="chartType", :chart-data="chartdata", :chart-labels="labels", :chart-options="options", :color-theme="colorTheme", :class="chartType", class="chart-container" style="width:100%; height:100%")
</template>

<script>

import axios from 'axios'
import {
  mapGetters,
} from 'vuex'
import LineType from '@/charts/Line'
import BarType from '@/charts/Bar'
import {
  baseOptions,
} from '../assets/js/chartoption'
import ColorTheme from '../assets/js/colors'

export default {
  name: 'extend-view',
  components: {
    LineType,
    BarType,
  },
  props: {
      chartId: String,
      colorTheme: Array,
      usePlugin: String,
      isModal: Boolean,
      showExtend: Boolean,
    },
  data() {
    return {
      chartTitle: 'Chart Title',
      chartDateType: '일',
      chartdata: {
        datasets: [],
        labels: [],
      },
      datasets: [],
      labels: [],
      options: baseOptions,
      chartType: '',
      isLegend: false,
      isRange: true,
      result: Object,
      isLoading: false,
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
  mounted() {
    this.$store.watch(() => {
      if (this.getFullId.term === '') {
        this.getChartData()
        this.intervalUpdate()
      } else {
        this.getChartData()
      }
    })
  },
  update() {
     this.getChartData()
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    getChartData() {
      this.chartType = ''
      this.datasets = []
      this.labels = []
      const baseUrl = `${this.baseUrl}/charts/bi/management/favorite/${this.getFullId.factory}${this.chartId}${this.getFullId.term}`
      axios.get(baseUrl)
        .then((response) => {
          this.chartType = response.data.ChartType
          this.chartTitle = response.data.ChartName
          this.chartDateType = response.data.AxisUnitName
          this.options.scales.yAxes[0].scaleLabel.labelString = `(${response.data.YAxisUnitName})`
          response.data.Series.forEach((item, i) => {
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
          console.log(error)
        })
    },
    intervalUpdate() {
      this.interval = setInterval(() => {
        this.getChartData()
      }, 60 * 1000)
    },
  },
}
</script>

<style lang="less" scope>
.extendPage {
  position: absolute;
  width:100%;
  height: 100%;
  padding:40px;
  z-index:-100;
  background-color: rgba(0, 0, 0, 0.9);
  &.active {
    z-index: 1000;
  }
  .extend-container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    // flex-direction: column;
    .close-btn {
      cursor: pointer;
      font-size: 1.2em;
      position: absolute;
      top: 0;
      right:0;
    }
    height: 100%;
    .extend-wrapper {
       width:97%;
      height: 95%;
      background-color: #282828;
      .header {
        text-align: left;
        font-size: 2em;
        padding: .8em 1.2em;
      }
      .content {
        padding: 20px;
        .content-wrapper {
          width: 100%;
          height: 75vh;
        }
      }
    }
  }
}
</style>
