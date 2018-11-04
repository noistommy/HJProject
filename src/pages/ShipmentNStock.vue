<template lang="pug">
  div.ContentPage.column
    div.flex-header
      TopContent(:main-title="mainTitle", :page-type="pageType")
    div.ui.grid
      div.sixteen.wide.column.oneRow
        BaseChart(:chart-id='chart3.id', :color-theme='chart3.theme')
    
</template>

<script>
import TopContent from '@/components/TopContent'
import BaseChart from '@/components/BaseChart'
import BaseTable from '@/components/BaseTable'
import PieChart from '@/components/PieChart'
import ChartnTable from '@/components/ChartnTable'
import ColorTheme from '../assets/js/colors'

export default {
  name: 'shipment-n-stock',
  data() {
    return {
      mainTitle: '출하현황',
      pageType: 'MES',
      chartType: 'base-type',
      chart3: {
        // id: 'SS003',
        id: 'shipment_m',
        theme: ColorTheme.dos1Reverse,
      },
    }
  },
  components: {
    TopContent,
    BaseChart,
    BaseTable,
    PieChart,
    ChartnTable,
  },
  created() {

  },
}
</script>

<style lang="less">
.shipment .stateCard.tableCard{
  height: 42vh;
  display:flex;
  align-items: center;
  .content {
    font-size: 1.5em;
    font-weight: bold;
    display:flex;
    align-items: center;
  }
}

</style>
 