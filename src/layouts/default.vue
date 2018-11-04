<template lang="pug">
  div#app
    //- Navigation
    div.base
      div.Content
        router-view
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'default',
  data() {
    return {
      term: this.$route.params.term,
    }
  },
  components: {
    Navigation,
  },
}
</script>

<style lang="less">
html, body {
  font-size: 13px !important;
  font-family: "Segoe UI" !important;
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
  }
}

.number {
  font-family: 'Bebas Neue';
}
#app {
  height: 100%;
  display: flex;
  flex-direction:column;
  background-color: #282b37;
  color: #ffffff;
  font-family: 'NoTo Sans CJK KR Regular';
  .topnav{
    margin:0;
    flex-basis: auto;
  }
  .base {
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    align-items: stretch;

    .Content {
      flex-grow: 1;
      display: flex;
      //PAGE STYLE
      .ContentPage {
        flex-grow: 1;
        // text-align: center;
        display: flex;
        .flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          // box-shadow: 2px 2px 4px #e0e0e0;
          margin-bottom: 10px;
          &.flex-1 {
            flex-grow: 1;
          }
          &.flex-3 {
            flex-grow: 1;
          }
        }
        & > :last-child {
          margin: 0;
        }
        .flex-header {
        }
        .flex-footer {
          height:2rem;
          flex-grow: 0;
        }
        &.column {
          flex-direction: column;
        }
      }
      .ContentPage.column {
        width: 100%;
        height: 100%;
        .ui.grid {
          height:100%;
        }
        .dbWrapper {
          display: flex;
          background-color: #14161c;
          .chartWrap {
            display: flex;
            width: 50%;
          }
          .extraWrap {
            width: 100%;
            display: flex;
            justify-content: start;
            align-items: center;
            font-size: 1em;
            .table {
              width: 90%;
              tr {
                td:first-child {
                  text-align: center;
                  font-size: 1.2em;
                }
                td:last-child {
                  text-align: right;
                  font-size: 3em;
                  font-family: 'Bebas Neue';
                }
              }
            }
          }
        }
        .colWrapper {
          display: flex;
          background-color: #14161c;
          .chartWrap {
            display: flex;
          }
        }
        .rowWrapper {
          height: 90vh;
          background-color: #14161c;
        }
        .fullHeight .stateCard {
          height: 91.5vh;
        }
        .half .chart-container {
          padding: 0 3vw;
        }
        .threeRow .stateCard {
          height: 28.5vh;
          margin-bottom: 2vh;
        }
        .oneRow .stateCard {
          height: 90vh;
        }
        .twoRow .stateCard {
          height: 44vh;
          margin-bottom: 20px;
        }
        .doughtnut-type .range {
          display: none;
        }
        .range.pie-type{
          display: none;
        }
      }
    }
  }
}
</style>
