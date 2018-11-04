<template lang="pug">
  div.ContentPage.column
    div.flex-header
      TopContent(:main-title="mainTitle", :page-type='pageType', :date-select='isDateSelect')
    div.ui.grid
      div.eight.wide.column
        BaseChart(:chart-id='chart1.id', :color-theme='chart1.theme')
      div.eight.wide.column
        BaseChart(:chart-id='chart2.id', :color-theme='chart2.theme')
      div.eight.wide.column
        BaseChart(:chart-id='chart3.id', :color-theme='chart3.theme')
      div.eight.wide.column
        BaseChart(:chart-id='chart4.id', :color-theme='chart4.theme')
</template>

<script>
import TopContent from '@/components/TopContent'
import BaseChart from '@/components/BaseChart'
import ChartnTable from '@/components/ChartnTable'
import ColorTheme from '../assets/js/colors'

export default {
  name: 'profit-ratio',
  data() {
    return {
      mainTitle: '재무비율',
      pageType: 'PMS',
      isDateSelect: true,
      chartType: 'base-type',
      chart1: {
        id: 'rate_growth',
        theme: ColorTheme.unos,
      },
      chart2: {
        id: 'rate_profit',
        theme: ColorTheme.unos,
      },
      chart3: {
        id: 'rate_safe',
        theme: ColorTheme.unos,
      },
      chart4: {
        id: 'rate_activity',
        theme: ColorTheme.unos,
      },
      showchart: false,
    }
  },
  components: {
    TopContent,
    BaseChart,
    ChartnTable,
  },
  methods: {},
}
</script>

<style lang="less"></style>
