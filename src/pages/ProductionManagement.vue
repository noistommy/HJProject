<template lang="pug">
  div.ContentPage.column
    div.flex-header
      TopContent(:main-title="mainTitle" , :page-type="pageType")
    div.ui.grid
      div.twelve.wide.column
        div.ui.grid
          div.five.wide.column.half
            PieChart(:chart-id='chart1.id', :color-theme="chart1.theme")
          div.eleven.wide.column
            BaseChart(:chart-id='chart2.id', :color-theme="chart2.theme" )
          div.five.wide.column.half
            PieChart(:chart-id='chart3.id', :color-theme="chart3.theme")
          div.eleven.wide.column
            BaseChart(:chart-id='chart4.id', :color-theme="chart4.theme")
      div.four.wide.column.half
        div.rowWrapper
          PieChart(:chart-id='chart5.id', :color-theme="chart5.theme")
          BaseTable(:chart-id='table1.id', :color-theme="table1.theme")
</template>

<script>
import TopContent from '@/components/TopContent'
import BaseChart from '@/components/BaseChart'
import BaseTable from '@/components/BaseTable'
import PieChart from '@/components/PieChart'
import ChartnTable from '@/components/ChartnTable'
import ColorTheme from '../assets/js/colors'

export default {
  name: 'production-management',
  data() {
    return {
      mainTitle: '생산관리',
      chartType: 'base-type',
      pageType: 'MES',
      // chart1: 'PM101',
      // chart2: 'PM102',
      // chart3: 'PM201',
      // chart4: 'PM202',
      // chart5: 'PM301',
      chart1: {
        id: 'achievement_sum',
        theme: ColorTheme.dos1,
      },
      chart2: {
        id: 'achievement',
        theme: [ColorTheme.dos1[1]],
      },
      chart3: {
        id: 'productivity_sum',
        theme: ColorTheme.dos2,
      },
      chart4: {
        id: 'productivity',
        theme: [ColorTheme.dos2[1]],
      },
      chart5: {
        id: 'operating',
        theme: ColorTheme.dos3,
      },
      table1: {
        id: 'operating_table',
        theme: ColorTheme.dos3,
      },
      showchart: false,
    }
  },
  components: {
    TopContent,
    BaseChart,
    BaseTable,
    ChartnTable,
    PieChart,
  },
  methods: {},
}
</script>

