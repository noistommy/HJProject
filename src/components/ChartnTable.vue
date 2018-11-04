<template lang="pug">
  div.dbStateCard
    div.title TEST CHART 1
    div.content
      div.chartWrap
        component(:is="chartType", :chart-data="datasets", :chart-labels="labels", class="chart-container" style="width:100%; height:100%")
      div.tableWrap
</template>

<script>
import LineType from '@/charts/Line'
import BarType from '@/charts/Bar'
import MixedType from '@/charts/Mixed'

export default {
  name: 'base-chart',
  components: {
    LineType,
    BarType,
    MixedType,
  },
  props: {
    chartId: String,
  },
  data() {
    return {
      datasets: [],
      labels: [],
      chartType: 'line-chart',
    }
  },
  created() {
    if (this.chartId === 'salesflow') {
      this.chartType = 'mixed-type'
      this.datasets = [
        {
          label: 'chart1-D1',
          data: ['10', '13', '15', '18', '30'],
        },
        {
          label: 'chart1-D2',
          data: ['5', '12', '13', '15', '24'],
        },
      ]
      this.labels = ['1시', '2시', '3시', '4시', '5시']
    }
    if (this.chartId === 'salescount') {
      this.chartType = 'bar-type'
      this.datasets = [
        {
          label: 'chart2-D1',
          data: ['10', '13', '15', '18', '30'],
        },
        {
          label: 'chart2-D2',
          data: ['5', '12', '13', '15', '24'],
        },
      ]
      this.labels = ['11시', '12시', '13시', '14시', '15시']
    }
  },
}
</script>

<style lang="less" scoped>
  .dbStateCard {
    position:relative;
    width:100%;
    height: 40vh;
    // margin: 5px;
    padding: 10px;
    background-color: #22242A;
    .title {
      padding: .8em 1.5em;
    }
    .content {
      height: 90%;
      div {
        width:50%;
        height: 100%;
      }
    }
    .chart-container {

    }
  }
</style>
