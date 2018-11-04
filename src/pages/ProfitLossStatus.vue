<template lang="pug">
  div.ContentPage.column
    div.flex-header
      TopContent(:main-title="mainTitle", :page-type='pageType', :date-select='isDateSelect')
    div.ui.grid
      div.four.wide.column
        div.rowWrapper.oneRow
          BaseChart(:chart-id='chart1.id', :color-theme='chart1.theme')
      div.twelve.wide.column
        div.rowWrapper
          BaseChart(:chart-id='chart2.id',  :color-theme='chart2.theme')
          BaseTable(:chart-id='table1.id')
</template>

<script>
import { mapGetters } from 'vuex'
import TopContent from '@/components/TopContent'
import BaseChart from '@/components/BaseChart'
import BaseTable from '@/components/BaseTable'
import ColorTheme from '../assets/js/colors'


export default {
  name: 'profitloss-status',
  data() {
    return {
      mainTitle: '손익현황',
      pageType: 'PMS',
      isDateSelect: true,
      chartType: 'base-type',
      chart1: Object,
      chart2: Object,
      table1: Object,
      changeData: true,
      term: this.$route.params.term,
    }
  },
  proprs: ['term'],
  components: {
    TopContent,
    BaseChart,
    BaseTable,
  },
  computed: {
    ...mapGetters([
      'getFullId',
    ]),
  },
  created() {
    this.chart1 = {
      id: 'pa_oper',
      theme: ColorTheme.cuatro,
    }
    this.chart2 = {
      id: 'pa',
      theme: ColorTheme.seis,
    }
    this.table1 = {
      id: 'pa_table',
      theme: ColorTheme.seis,
    }
  },
  methods: {
    getChangeData() {
      this.changeData = false
    },
  },
}
</script>

<style lang="less">

</style>
