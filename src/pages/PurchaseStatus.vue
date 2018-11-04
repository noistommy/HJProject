<template lang="pug">
  div.ContentPage.column
    div.flex-header
      TopContent(:main-title="mainTitle", :page-type='pageType', :date-select='isDateSelect')
    div.ui.grid
      div.four.wide.column.twoRow
        PieChart(:chart-id='chart1.id', :color-theme='chart1.theme')
        BaseTable(:chart-id='table1.id')
      div.twelve.wide.column
        div.rowWrapper
          BaseChart(:chart-id='chart2.id', :color-theme='chart2.theme')
          BaseTable(:chart-id='table2.id')
</template>

<script>
import TopContent from '@/components/TopContent'
import BaseChart from '@/components/BaseChart'
import PieChart from '@/components/PieChart'
import BaseTable from '@/components/BaseTable'
import ColorTheme from '../assets/js/colors'

export default {
  name: 'purhase-status',
  data() {
    return {
      mainTitle: '매입현황',
      pageType: 'PMS',
      isDateSelect: false,
      chartType: 'base-type',
      // chart1: 'PCS001',
      // chart2: 'PCS002',
      chart1: {
        // id: 'IS001',
        id: 'purch_rate',
        theme: ColorTheme.seis,
      },
      table1: {
        // id: 'IS001',
        id: 'purch_rate_table',
        theme: ColorTheme.seis,
      },
      chart2: {
        // id: 'IS002',
        id: 'purch',
        theme: ColorTheme.seis,
      },
      table2: {
        id: 'purch_table',
        theme: ColorTheme.seis,
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
}
</script>

<style lang="less">
</style>
