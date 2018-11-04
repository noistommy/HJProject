<template lang="pug">
  .stateCard.sunlight
    .title 태양광 발전 현황
    .content
      .card-wrapper
        .currentPower.tCard.half
          .header 현재발전량
          .content {{ sunLight.currentPower }} 
            span kWh
        .currentPower.tCard.half
          .header 누적발전량
          .content {{ sunLight.totalPower }} 
            span MWh
      div.clear
      .todayAmount.tCard
        .header 금일발전금액
        .content {{ sunLight.todayAmount }} 
          span 원
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'sun-light',
  data() {
    return {
      sunLight: {
        currentPower: '0',
        totalPower: '0',
        todayAmount: '0',
      },
    }
  },
  computed: {
    ...mapGetters([
      'baseUrl',
    ]),
  },
  created() {
    this.getSunLightData()
  },
  mounted() {
  },
  methods: {
    getSunLightData() {
      const baseUrl = `${this.baseUrl}/charts/summary/solamodule`
      axios.get(baseUrl)
      .then((response) => {
        this.sunLight.currentPower = response.data.currentPowerGenerationQuantity
        this.sunLight.totalPower = response.data.totalPowerGenerationQuantity
        this.sunLight.todayAmount = response.data.dealingMoney
      })
      .catch((error) => {
        console.log(error)
      })
    },
  },
}
</script>

<style lang="less" scope>
.stateCard .content {
  .card-wrapper {
    width: 100%;
    padding-top: 45px;
  }
  .clear {
    clear: both;
  }
  .tCard {
    font-family: 'Bebas Neue';
    font-weight: bold;
    margin-bottom: 10px;
    // border-radius: 10px;
    overflow: hidden;
    .header {
      font-size: 1.3rem;
      padding: .5em 1.2em;
      margin: 0 10px;
      border-radius: 1em;
      text-align: center;
      line-height: 1em;
      vertical-align: baseline;
      background-color: #565a63;
    }
    .content {
      font-size: 5em;
      padding: 40px 20px;
      text-align: center;
      // background-color: #2a2e3a;
      span {
        font-size: 0.5em;
        color: #e2b012;
      }
    }
    &.half {
      width: 50%;
      float: left;
      font-size: 0.8em;
      // border-right: 3px solid #111; 
    }
  }
}
</style>
