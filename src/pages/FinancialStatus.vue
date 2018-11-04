<template lang="pug">
  div.ContentPage.column
    div.flex-header
      TopContent(:main-title="mainTitle", :page-type='pageType', :date-select='isDateSelect')
    div.ui.grid
      div.eight.wide.column
        div.rowWrapper
          BaseChart(:chart-id='chart1.id', :color-theme='chart1.theme')
          BaseTable(:chart-id='table1.id')
      div.eight.wide.column
        div.rowWrapper
          BaseChart(:chart-id='chart2.id', :color-theme='chart2.theme')
          BaseTable(:chart-id='table2.id')
</template>

<script>
import TopContent from '@/components/TopContent'
import BaseChart from '@/components/BaseChart'
import BaseTable from '@/components/BaseTable'
import ColorTheme from '../assets/js/colors'

export default {
  name: 'financial-status',
  data() {
    return {
      mainTitle: '재무현황',
      pageType: 'PMS',
      isDateSelect: true,
      chartType: 'base-type',
      chart1: {
        // id: 'PLS001',
        id: 'amt_asset',
        theme: ColorTheme.unos,
      },
      chart2: {
        // id: 'PLS002',
        id: 'amt_capital',
        theme: ColorTheme.unos,
      },
      table1: {
        // id: 'PLS001',
        id: 'amt_asset_table',
        theme: ColorTheme.unos,
      },
      table2: {
        // id: 'PLS002',
        id: 'amt_capital_table',
        theme: ColorTheme.unos,
      },
    }
  },
  components: {
    TopContent,
    BaseChart,
    BaseTable,
  },
  methods: {},
}
</script>

<style lang="less"></style>
