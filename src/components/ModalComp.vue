<template lang="pug">
div.ui.dimmer(:class='{active: showExtend}')
    // button.ui.button(@click="closeModal()") close
    div.ui.icon.inverted.closeBtn(@click="$emit('close')")
      span 닫기
    div.extend-wrapper
        div.header {{subTitle}}
        div.content
          .line-gauge
            div.line-item(v-for="(unit, index) in datasets")
              .item-title {{unit.label}}
              .numValue {{unit.data[0] | fixedPoint}}
                span 개
              .stick-gragh-set
                .value-stick(:id="'data_0'", :style="{ width: linePercent[index] + '%'}")
            div.total 
              .numValue 
                span 총 
                | {{dataTotal | fixedPoint}}
                span 개
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import { BaseURL } from '../assets/js/config'


export default {
  name: 'modal-comp',
  data() {
    return {
      datasets: {},
      linePercent: [],
      dataTotal: 0,
      showExtend: true,
    }
  },
  props: {
    chartId: String,
    subTitle: String,
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
      const baseUrl = `${this.baseUrl}/charts/bi/management/favorite/${this.getFullId.factory}${this.chartId}_${this.subTitle}`
      const encodeBaseUrl = encodeURI(baseUrl)
      axios.get(baseUrl)
      .then((response) => {
        response.data.Series.forEach((item, i) => {
          const dataset = {}
          dataset.data = item.Values
          dataset.label = item.Label
          this.datasets.push(dataset)

          this.dataTotal = this.dataTotal + item.Values[0]
        })
        this.datasets.forEach((value, i) => {
          const percent = (value.data[0] / this.dataTotal) * 100
          this.linePercent.push(percent.toFixed(1))
        })
      })
      .catch((error) => {
        this.isLoading = true
        console.log(error)
      })
    },
  },
  created() {
    this.getChartData()
  },
  filters: {
    fixedPoint: (value) => {
      return parseFloat(value.toFixed(1))
    },
  },
}
</script>
<style lang="less" scope>
  .ui.dimmer {
    .closeBtn {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 1.2em;
      padding: 10px;
    }
    .extend-wrapper {
      margin: 20px;
      // background-color: #111;
      height: 95%;
      box-sizing: content-box;
      .header {
        font-size: 1.2em;
        padding-bottom: 10px;
        padding: .8em 1.5em;
      }
      .content {
        overflow: auto;
        height: 95%;
        .line-gauge {
          font-size: 1.8em;
          font-family: 'Bebas Neue';
          .total {
            text-align: right;
            font-size: 1.5em;
            padding: 0 10px;
            color: #00d8f9;
            span {
              padding: 5px;
              font-size: 0.6em;
              color: #fff;
            }
          }
          .line-item {
            padding: 15px;
            .numValue {
              text-align: right;
              span {
                font-size: 0.6em;
              }
            }
            .stick-gragh-set {
              margin: 5px 0;
              background-color: rgb(56, 55, 55);
              height: 8px;
              border-radius: 5px;
              position: relative;
              border-radius: 5px;
              overflow: hidden;
              &>div {
                border-radius: 5px; 
              }
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
              font-size: 0.5em;
              font-weight: 900;
            }
          }
        }
      }
    }
  }
</style>
