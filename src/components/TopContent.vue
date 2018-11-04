<template lang="pug">
  div#topMenuBar.ui.inverted.menu
    div.selectMenu(v-if="pageType === 'PMS'")
      .ui.inverted.menu
        .item(:class="{active: mainTitle == '손익현황'}")
          router-link(:to="{ name: 'profitloss-status' }") 손익현황 
        .item(:class="{active: mainTitle == '재무현황'}")
          router-link(:to="{ name: 'financial-status' }") 재무현황 
        .item(:class="{active: mainTitle == '재무비율'}")
          router-link(:to="{ name: 'profit-ratio' }") 재무비율 
        .item(:class="{active: mainTitle == '매출현황'}")
          router-link(:to="{ name: 'sales-status' }") 매출현황 
        .item(:class="{active: mainTitle == '매입현황'}")
          router-link(:to="{ name: 'purchase-status' }") 매입현황 
        .item(:class="{active: mainTitle == '재고현황'}")
          router-link(:to="{ name: 'inventory-status' }") 재고현황
    div.mainTitle.header.item(v-else)
      div.content {{mainTitle}}
    div.modalBtn.item(v-if="mainTitle === '종합현황'", @click="$emit('show')") 입고 출하 실적 현황 보기
    div.mainMenu.item(v-if="dateSelect")
      div.dateSelect
        .ui.buttons
          button.ui.button.month(@click="setmonthsterm", :class="{active: getFullId.term == '_m'}") 월
          button.ui.button.day(@click="setyearsterm", :class="{active: getFullId.term == '_y'}") 년
    div.mainMenu.item(v-if="pageType === 'MES'")
      div.factorySelect
        .ui.buttons
            button.ui.button.first(@click="setfirstfactory", :class="{active: getFullId.factory == 'factory001_'}") 1공장
            button.ui.button.second(@click="setsecondfactory", :class="{active: getFullId.factory == 'factory002_'}") 2공장
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'top-content',
  props: {
    mainTitle: String,
    pageType: String,
    dateSelect: Boolean,
  },
  data() {
    return {
      type: 'chart bar',
      isDatePicker: false,
      // setFactory: 'first',
      // selectDate: 'date',
      setDateStart: '',
      setDateEnd: '',
      setDate: '',
      activeItem: 'profitloss',
    }
  },
  computed: {
    ...mapGetters([
      'getFullId',
    ]),
  },
  created() {
    console.log(`PAGETYPE:${this.pageType}`)
    if (this.pageType === 'PMS') {
      this.setmonthsterm()
    }
    if (this.pageType === 'MES') {
      this.setfirstfactory()
    }
  },
  mounted() {
    $('.ui.dropdown').dropdown()
    $('.mainTitle').click(() => {
      $('.ui.dropdown').dropdown('show')
    })
  },
  methods: {
    ...mapActions([
      'setmonthsterm',
      'setyearsterm',
      'setfirstfactory',
      'setsecondfactory',
    ]),
  },
}
</script>

<style lang="less">
#topMenuBar {
  position: relative;
  display:flex;
  font-size: 1em;
  height: 60px;
  .modalBtn.item {
    font-size: 1.2em;
    position: absolute;
    top: 8px;
    right: 15px;
    z-index: 999;
    background: #454545 !important;
    border-radius: 5px;
    &:hover {
      background-color: #121212;
    }
  }
  .mainTitle.item {
    position: absolute;
    padding: 20px;
    color: #ffffff;
    font-size: 1.5em;
    font-weight: bold;
    .icon {
      font-size: .8em;
    }
    .content {
      margin-right: 10px
    }
  }
  .selectMenu {
    position: absolute;
    bottom: 0;
    left: 20px;
    z-index: 999;
    .ui.menu {
      .item {
        text-align: center;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        overflow: hidden;
        padding: 0 !important;
        a {
          color: #aaa;
          display: inline-block;
          width:100%;
          height: 100%;
          padding: .8em 1.2em;
          font-size: 1.2em;
        }
        &:hover a {
          color: #fff;
          font-weight: bold;
          // background-color: #282b37;
        }
        &.active a {
          color: #fff;
          font-weight: bold;
          background-color: #282b37;
        }
      }
    }
  }
  .mainMenu {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    color: #888;
    .dateSelect {
      .ui.buttons {
        .ui.button {
          color: #ffffff;
          background-color: #343436;
          border: 1px solid #888;
          &.active {
            background-color: #DC704A;
          }
        }
      }
    }
    .factorySelect {
      .ui.buttons {
        .ui.button {
          color: #ffffff;
          background-color: #343436;
          border: 1px solid #888;
          &.active {
            background-color: #20aaff;
          }
        }
      }
    }
  }
}
</style>
