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
  name: 'sales-status',
  data() {
    return {
      mainTitle: '매출현황',
      pageType: 'PMS',
      isDateSelect: false,
      chartType: 'base-type',
      chart1: {
        // id: 'SLS001',
        id: 'sales_rate',
        theme: ColorTheme.seis,
      },
      table1: {
        id: 'sales_rate_table',
        theme: ColorTheme.seis,
      },
      chart2: {
        // id: 'SLS002',
        id: 'sales_product',
        theme: ColorTheme.seis,
      },
      table2: {
        // id: 'SLS001',
        id: 'sales_product_table',
        theme: ColorTheme.seis,
      },
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

