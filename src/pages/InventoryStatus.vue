<template lang="pug">
  div.ContentPage.column
    div.flex-header
      TopContent(:main-title="mainTitle", :page-type='pageType', :date-select='isDateSelect')
    div.ui.grid
      div.four.wide.column.twoRow
        PieChart(:chart-id='chart1.id', :color-theme='chart1.theme')
        BaseTable(:chart-id='table1.id', :color-theme='table1.theme')
      div.twelve.wide.column
        div.rowWrapper
          BaseChart(:chart-id='chart2.id', :color-theme='chart2.theme')
          BaseTable(:chart-id='table2.id',)
    
</template>

<script>
import TopContent from '@/components/TopContent'
import BaseChart from '@/components/BaseChart'
import PieChart from '@/components/PieChart'
import BaseTable from '@/components/BaseTable'
import ColorTheme from '../assets/js/colors'

export default {
  name: 'inventory-status',
  data() {
    return {
      mainTitle: '재고현황',
      pageType: 'PMS',
      isDateSelect: false,
      chartType: 'base-type',
      // chart1: 'IS001',
      // chart2: 'IS002',
      chart1: {
        // id: 'PCS001',
        id: 'stock_rate',
        theme: ColorTheme.dose,
      },
      table1: {
        // id: 'PCS001',
        id: 'stock_rate_table',
        theme: ColorTheme.dose,
      },
      chart2: {
        id: 'stock',
        theme: ColorTheme.dose,
      },
      table2: {
        id: 'stock_table',
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
  methods: {},
}
</script>

<style lang="less"></style>
