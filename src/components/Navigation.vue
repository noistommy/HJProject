<template lang="pug">
  div#navigation.ui.inverted.sticky.menu.fixed.bottom
    div.item.logo
      a(href="/").title HANJUNG ncs
    div.item
      router-link(:to="{ name: 'total-status' }") 종합현황
    div.item
      router-link(:to="{ name: 'shipment-status' }") 영업관리
    div.item
      router-link(:to="{ name: 'stock-status' }") 구매관리
    div.item
      router-link(:to="{ name: 'production-management' }") 생산관리
    div.item
      router-link(:to="{ name: 'quality-management' }") 품질관리
    div.item
      router-link(:to="{ name: 'profitloss-status' }") 경영관리

</template>

<script>

export default {
  name: 'navigation',
}
</script>

<style lang="less" scoped>
  #navigation {
    padding: 0;
    // display: none;
  }
  .logo .title{
    margin-left: 15px;
  }
  .logo img {
    width: 25px;
  }
  .btn-d {
    position: absolute;
    bottom: 0;
  }
</style>
