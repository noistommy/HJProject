<template lang="pug">
  div.ContentPage.column
    div.flex-header
      TopContent(:main-title="mainTitle", :page-type="pageType")
    div.ui.grid
      div.eight.wide.column
        .dbWrapper
          .chartWrap
            .subChart
              PieChart(:chart-id='chart1.id', :color-theme='chart1.theme')
          .extraWrap.purchase
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
import ColorTheme from '../assets/js/colors'


export default {
  name: 'stock-status',
  data() {
    return {
      mainTitle: '입고현황',
      chartType: 'base-type',
      pageType: 'MES',
      // chart1: 'STS001',
      // chart2: 'STS002',
      // chart3: 'STS003',
      chart1: {
        // id: 'STS001',
        id: 'stock_doughnut',
        theme: ColorTheme.dos2,
      },
      table1: {
        // id: 'STS001',
        id: 'stock_sum',
        theme: ColorTheme.dos2,
      },
      chart2: {
        id: 'stock',
        theme: ColorTheme.dos1,
      },
      chart3: {
        // id: 'STS003',
        id: 'stock_m',
        theme: ColorTheme.dos2Reverse,
      },
      showchart: false,
    }
  },
  components: {
    TopContent,
    BaseChart,
    BaseTable,
    PieChart,
  },
  methods: {},
}
</script>

<style lang="less">
.purchase .stateCard.tableCard {
   height: 42vh;
  display:flex;
  align-items: center;
  .content {
    font-size: 1.5em;
    font-weight: bold;
    display:flex;
    align-items: center;
    .ui.table {
      thead.thead {
        display: none !important;
      }
      tbody tr {
        span {
          display: none;
        }
        &:first-child {
          td:last-child {
             color: #d744b9;
          }
        }
        &:last-child {
          td:last-child {
           
            color: #b154cc;
          }
        }
      }
    } 
  }
}
</style>
