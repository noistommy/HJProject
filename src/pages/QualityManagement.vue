<template lang="pug">
  div.ContentPage.column
    div.flex-header
      TopContent(:main-title="mainTitle", :page-type="pageType")
    div.ui.grid
      div.twelve.wide.column.threeRow
        BaseChart(:chart-id='chart1.id', :color-theme='chart1.theme')
        BaseChart(:chart-id='chart2.id', :color-theme='chart2.theme')
        BaseChart(:chart-id='chart3.id', :color-theme='chart3.theme')
      div.four.wide.column.oneRow
        BaseChart(:chart-id='chart4.id', :color-theme='chart4.theme', is-modal=true)
</template>

<script>
import TopContent from '@/components/TopContent'
import BaseChart from '@/components/BaseChart'
import ColorTheme from '../assets/js/colors'


export default {
  name: 'quality-management',
  data() {
    return {
      mainTitle: '품질관리',
      pageType: 'MES',
      chartType: 'base-type',
      chart1: {
        id: 'division_quality',
        theme: ColorTheme.unos,
      },
      chart2: {
        id: 'category_quality',
        theme: ColorTheme.unos,
      },
      chart3: {
        id: 'division_quality_m',
        theme: ColorTheme.dos2,
      },
      chart4: {
        id: 'division_quality_sum',
        theme: [ColorTheme.dos3[0]],
      },
      showchart: false,
    }
  },
  components: {
    TopContent,
    BaseChart,
  },
}
</script>

<style lang="less">



</style>
