<template lang="pug">
  div.ContentPage.column
    div.flex-header
      TopContent(:main-title="mainTitle", :page-type="pageType")
    div.ui.grid
      div.eight.wide.column
        .dbWrapper
          .chartWrap
            .subChart
              PieChart(:chart-id='chart1.id', :color-theme='chart1.theme' :page-type='pageType')
          .extraWrap.shipment
            BaseTable(:chart-id='table1.id')
      div.eight.wide.column
        BaseChart(:chart-id='chart2.id', :color-theme='chart2.theme')
      div.sixteen.wide.column
        BaseChart(:chart-id='chart3.id', :color-theme='chart3.theme')
    
</template>

<script>
import TopContent from '@/components/TopContent'
import BaseChart from '@/components/BaseChart'
import BaseTable from '@/components/BaseTable'
import PieChart from '@/components/PieChart'
import ChartnTable from '@/components/ChartnTable'
import ColorTheme from '../assets/js/colors'

export default {
  name: 'shipment-status',
  data() {
    return {
      mainTitle: '출하현황',
      pageType: 'MES',
      chartType: 'base-type',
      chart1: {
        // id: 'SS001',
        id: 'shipment_doughnut',
        theme: ColorTheme.dos1,
      },
      table1: {
        // id: 'SS001T',
        id: 'shipment_sum',
        theme: ColorTheme.dos1,
      },
      chart2: {
        id: 'shipment',
        theme: ColorTheme.dos2,
      },
      chart3: {
        // id: 'SS003',
        id: 'shipment_m',
        theme: ColorTheme.dos1Reverse,
      },
    }
  },
  components: {
    TopContent,
    BaseChart,
    BaseTable,
    PieChart,
    ChartnTable,
  },
  created() {

  },
}
</script>

<style lang="less">
.shipment .stateCard.tableCard{
  height: 42vh;
  display:flex;
  align-items: center;
  .content {
    font-size: 1.5em;
    font-weight: bold;
    display:flex;
    align-items: center;
    .table {
      thead {
        display: none;
      }
      tbody tr {
        span {
          display: none;
        }
        &:first-child {
          td:last-child {
            color: #00d8f9;
          }
        }
        &:last-child {
          td:last-child {
            color: #ff9e02;
          }
        }
      }
    }
  }
}

</style>
 