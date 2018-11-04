<template lang="pug">
  div.stateCard.tableCard
    div.content
      div(:class="chartType", v-if="chartType === 'line-gauge'")
        div.line-gauge(v-for="dataset in datasets")
          // span {{dataset.label}}
          div.line-item(v-for="(value, index) in dataset.data")
            .item-title {{labels[index]}}
            .numValue {{value}}
            .stick-gragh-set
              .value-stick(:id="'data_'+index", :style="{ width: linePercent[index] +  '%'}")

      table.ui.selectable.celled.inverted.table(v-else)
        thead.thead
          tr.center.aligned
            th.column-name.two.wide 계정과목
            th.two.wide(v-for="label in labels") {{label}}
        tbody
          tr.center.aligned(v-for="(dataset, index) in datasets")
              td.column-name {{dataset.label}}
              td(v-for="(value, index) in dataset.data") {{value | commas}}
                span 원
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import { BaseURL } from '../assets/js/config'


export default {
  name: 'base-table',
  props: {
    chartId: String,
  },
  data() {
    return {
      chartTitle: 'Chart Title',
      chartType: '',
      datasets: [],
      labels: [],
      linePercent: [100, 0, 0],
      interval: Function,
    }
  },
  filters: {
    commas: (value) => {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
  computed: {
    ...mapGetters([
      'baseUrl',
      'getFullId',
    ]),
  },
  methods: {
    getChartData() {
      this.datasets = []
      this.labels = []
      // const baseUrl = `http://192.168.0.216:21009/charts/bi/management/favorite/${this.chartId}${this.getterm}`
      const baseUrl = `${this.baseUrl}/charts/bi/management/favorite/${this.getFullId.factory}${this.chartId}${this.getFullId.term}`
      axios.get(baseUrl)
      .then((response) => {
        response.data.Series.forEach((item, i) => {
          const dataset = {}
          dataset.data = item.Values
          dataset.label = item.Label
          this.datasets.push(dataset)

          this.linePercent[0] = 100
          this.linePercent[1] = (item.Values[1] / item.Values[0]) * 100
          this.linePercent[2] = (item.Values[2] / item.Values[0]) * 100
        })
        this.chartType = response.data.ChartType
        this.labels = response.data.AxisLabels
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
  },
  created() {
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
  .stateCard.tableCard {
    overflow-y: scroll;
    position:relative;
    width:100%;
    height: 48vh;
    padding: 10px;
    padding-top: 30px;
    background-color: #14161c;
    .content {
      // padding:0 20px 0 45px;
      height: 80%;
      table {
        font-size: 0.9em;
        tbody {
          tr {
            td {
              text-align: right;
            }
            td.column-name {
              text-align: center;
            }
          }
          tr:last-child {
            // color:#454545;
            // font-weight: bold;
          }
        }
      }
    }
    .line-gauge {
      font-size: 1.8em;
      font-family: 'Bebas Neue';
      .line-item {
        padding: 15px;
        .numValue {
          text-align: right;
        }
        .stick-gragh-set {
          margin: 20px 0;
          background-color: rgb(56, 55, 55);
          height: 8px;
          border-radius: 5px;
          position: relative;
          border-radius: 5px;
          overflow: hidden;
          .value-stick {
            position: absolute;
            top:0;
            left:0;
            width: 50%;
            height: 100%;
            &#data_0 {
              background-color: #00d8f9;
              width:100%;
            }
            &#data_1 {
              background-color: #ff9e02;
            }
            &#data_2 {
              background-color: #d744b9;
            }
          }
        }
        .item-title {
          float: left;
          font-size: 0.35em;
          font-weight: 900;
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
    // 
</style>
