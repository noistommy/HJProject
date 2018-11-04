<template lang="pug">
  div.ContentPage.column
    ExtendView(:chart-id='chartextend.id', :color-theme="chartextend.theme", :show-extend="showchart", @close="showchart = false")
    div.flex-header
      TopContent(:main-title="mainTitle", :page-type="pageType", @show="showchart = true")
    div.ui.grid
      div.six.wide.column
        .dbWrapper
          .chartWrap
            PieChart(:chart-id='chart1.id', :color-theme="chart1.theme")
          .extraWrap.shipment
             BaseTable(:chart-id="table1.id")
      div.six.wide.column
        .dbWrapper
          .chartWrap
            PieChart(:chart-id='chart2.id', :color-theme="chart2.theme")
          .extraWrap.purchase
             BaseTable(:chart-id="table2.id")
      div.four.wide.column
        .dbWrapper 
          SunLight
      div.four.wide.column.half
        PieChart(:chart-id='chart3.id', :color-theme="chart3.theme")
      div.four.wide.column.half
        PieChart(:chart-id='chart4.id', :color-theme="chart4.theme")
      div.four.wide.column.half
        PieChart(:chart-id='chart5.id', :color-theme="chart5.theme")
      div.four.wide.column
        BaseChart(:chart-id='chart6.id', :color-theme="chart6.theme")
</template>

<script>
import { mapGetters } from 'vuex'
import TopContent from '@/components/TopContent'
import ExtendView from '@/components/ExtendView'
import BaseChart from '@/components/BaseChart'
import BaseTable from '@/components/BaseTable'
import PieChart from '@/components/PieChart'
import SunLight from '@/components/SunLight'
import ColorTheme from '../assets/js/colors'

export default {
  name: 'total-status',
  data() {
    return {
      mainTitle: '종합현황',
      pageType: 'MES',
      chartType: 'base-type',
      chart1: {
        // id: 'SS001',
        id: 'shipment_doughnut',
        theme: ColorTheme.dos1,
      },
      table1: {
        // id: 'SS001',
        id: 'shipment_sum',
        theme: ColorTheme.dos1,
      },
      chart2: {
        // id: 'STS001',
        id: 'stock_doughnut',
        theme: ColorTheme.dos2,
      },
      table2: {
        // id: 'STS001',
        id: 'stock_sum',
        theme: ColorTheme.dos2,
      },
      chart3: {
        id: 'achievement_sum',
        theme: ColorTheme.dos1,
      },
      chart4: {
        id: 'productivity_sum',
        theme: ColorTheme.dos2,
      },
      chart5: {
        id: 'operating',
        theme: ColorTheme.dos3,
      },
      chart6: {
        id: 'division_quality_sum',
        theme: [ColorTheme.dos3[0]],
      },
      chartextend: {
        id: 'stock_shipment',
        theme: ColorTheme.dos1,
      },
      chart7: 'saleshorizontal',
      showchart: false,
    }
  },
  components: {
    TopContent,
    BaseChart,
    BaseTable,
    PieChart,
    SunLight,
    ExtendView,
  },
}
</script>

<style lang="less">
  .half .chart-container {
    padding: 0 3vw;
  }
  .extraWrap {
      &.shipment .stateCard.tableCard {
        height: 42vh;
        display:flex;
        align-items: center;
        .content {
          font-size: 1em;
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
      &.purchase .stateCard.tableCard {
        height: 42vh;
        display:flex;
        align-items: center;
        .content {
          font-size: 1em;
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
    }
</style>
