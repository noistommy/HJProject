<template lang="pug">
  div.ContentPage.column
    div.flex-header
      TopContent(:main-title="mainTitle", :page-type='pageType')
    div.ui.grid
      div.four.wide.column
        BaseChart(:chart-id='chart4')
      div.eight.wide.column
        BaseChart(:chart-id='chart1')
      div.four.wide.column
        BaseChart(:chart-id='chart1')
      div.four.wide.column
        BaseChart(:chart-id='chart2')
      div.eight.wide.column
        BaseChart(:chart-id='chart1')
      div.four.wide.column
        BaseChart(:chart-id='chart1')
    
</template>

<script>
import TopContent from '@/components/TopContent'
import BaseChart from '@/components/BaseChart'

export default {
  name: 'content1-page',
  data() {
    return {
      mainTitle: '경영관리',
      pageType: 'peformence management',
      chartType: 'base-type',
      chart1: 'salesflow',
      chart2: 'salessales',
      chart3: 'salesgauge',
      chart4: 'salesgauge1',
      showchart: false,
    }
  },
  components: {
    TopContent,
    BaseChart,
  },
  methods: {},
}
</script>

<style lang="less"></style>
