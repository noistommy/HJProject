import * as types from './mutation-types'

export const setmonthsterm = ({commit,}) => {
  commit(types.TWELVE_MONTHS_TERM)
}

export const setyearsterm = ({commit,}) => {
  commit(types.FIVE_YEARS_TERM)
}

export const setfirstfactory = ({commit,}) => {
  commit(types.FIRST_FACTORY_NUMBER);
}

export const setsecondfactory = ({commit,}) => {
  commit(types.SECOND_FACTORY_NUMBER);
}

