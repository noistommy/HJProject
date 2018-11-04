<template lang="pug">
  div.stateCard
    div.modalWrapper(v-if = "isModal")
      ModalComp(v-if="showExtend", @close="showExtend = false", :chart-id="chartId", :sub-title="subTitle")
    div.title {{chartTitle}} 
      div.selectPart.ui.dropdown(v-if = "isModal")
        .text {{defaultText}}
        .menu
          .item(v-for="item in chartdata.labels", @click="show(item)") {{item}}
      .today (당{{chartDateType}}기준)
    div.content
      component(:is="chartType", :chart-data="chartdata", :chart-labels="labels", :chart-options="options", :color-theme="colorTheme", :class="chartType", class="chart-container" style="width:100%; height:100%")
      div.legent-cont(v-if="isLegend")
      // stack-group-type(:chart-data="chartdata", :chart-labels="labels", :chart-options="options", :color-theme="colorTheme", :class="chartType", class="chart-container" style="width:100%; height:100%")
      
</template>

<script>
  import axios from 'axios'
  import {
    mapGetters,
  } from 'vuex'
  import LineType from '@/charts/Line'
  import BarType from '@/charts/Bar'
  import HorizontalBarType from '@/charts/HorizontalBar'
  import BarStackType from '@/charts/BarStack'
  import StackGroupType from '@/charts/BarStackGroup'
  import MixedType from '@/charts/Mixed'
  import DoughnutType from '@/charts/Doughnut'
  import HalfDoughnutType from '@/charts/HalfDoughnut'
  import PieType from '@/charts/Pie'
  import TestType from '@/charts/TestChart'
  import ModalComp from '@/components/ModalComp'
  import {
    baseOptions,
  } from '../assets/js/chartoption'
  import ColorTheme from '../assets/js/colors'
  
  export default {
    name: 'base-chart',
    components: {
      LineType,
      BarType,
      HorizontalBarType,
      BarStackType,
      StackGroupType,
      MixedType,
      DoughnutType,
      HalfDoughnutType,
      PieType,
      TestType,
      ModalComp,
    },
    props: {
      chartId: String,
      colorTheme: Array,
      usePlugin: String,
      isModal: Boolean,
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
        subTitle: 'sub title',
        showExtend: false,
        defaultText: '상세보기',
      }
    },
    computed: {
      ...mapGetters([
        'baseUrl',
        'getFullId',
      ]),
    },
    created() {
      $('.selectPart').dropdown()
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
    beforeDestroy() {
      clearInterval(this.interval)
    },
    methods: {
      getChartData() {
        $('.text').text('상세보기')
        this.chartType = ''
        this.datasets = []
        this.labels = []
        const baseUrl = `${this.baseUrl}/charts/bi/management/favorite/${this.getFullId.factory}${this.chartId}${this.getFullId.term}`
        axios.get(baseUrl)
          .then((response) => {
            this.chartType = response.data.ChartType
            this.chartTitle = response.data.ChartName
            this.chartDateType = response.data.AxisUnitName
            if (this.chartType === 'horizontal-bar-type') {
              this.options.scales.yAxes[0].scaleLabel.labelString = ''
            } else {
              this.options.scales.yAxes[0].scaleLabel.labelString = `(${response.data.YAxisUnitName})`
            }
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
      show(sub) {
        this.showExtend = true
        this.subTitle = sub
      },
      close() {
        this.showExtend = false
      },
    },
  }
</script>



<style lang="less" scoped>
  .stateCard {
    position: relative;
    width: 100%;
    height: 42vh;
    // margin: 5px;
    padding: 10px;
    background-color: #14161c;
    .title {
      // position: absolute;
      width: 100%;
      padding: 0.3em 1.5em 0.8em 1.5em;
      font-size: 1.4em;
      // font-family: '맑은고딕';
      font-weight: 700;
      .selectPart {
        padding: 0.3em 1.2em;
        margin-left: 10px;
        font-size: .8em;
        font-weight: normal;
        background: #545454;
        border-radius: 15px;
      }
      .today {
        float: right;
        font-size: 0.6em;
        color: #ccc;
      }
    }
    .content {
      width: 100%;
      height: 90%;
      position: relative;
      .range {
        position: absolute;
        width: 100%;
        font-size: 1.5em;
        font-weight: bold;
        padding: 0 3vw;
        &.half-doughnut-type {
          bottom: 5vh;
          span {
            display: inline-block;
            width: 3em;
            text-align: center;
            float: left;
          }
          .max {
            float: right;
          }
        }
        &.doughnut-type {
          height: 100%;
          top: -20px;
          span {
            display: inline-block;
            width: 100%;
            text-align: center;
            // position: absolute;
            // top: 0;
          }
          .min {
            display: none;
          }
          .max {}
        }
      }
    }
    // canvas {
    //   background: url('../assets/bgpetten.png') repeat;
    // }
    // &:hover {
    //   cursor: pointer;
    //   box-shadow: 0 0 20px #aaa;
    // }
  }
</style>
