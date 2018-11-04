import * as types from '../mutation-types'

const state = {
  term: '',
  factory: 'factory001_'
}

const mutations = {
  [types.TWELVE_MONTHS_TERM](state) {
    state.term = '_m'
    state.factory = ''
  },
  [types.FIVE_YEARS_TERM](state) {
    state.term = '_y'
    state.factory = ''
  },
  [types.FIRST_FACTORY_NUMBER](state) {
    state.factory = 'factory001_'
    state.term = ''
  },
  [types.SECOND_FACTORY_NUMBER](state) {
    state.factory = 'factory002_'
    state.term = ''
  },
}

export default {
  state,
  mutations,
}
