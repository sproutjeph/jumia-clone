import { IconType } from 'react-icons'

export enum ActionKinds {
  'ADD_TO_CART' = 'ADD_TO_CART',
  'REMOVE_ITEM' = 'REMOVE_ITEM',
  'LOADING' = 'LOADING',
  'DISPLAY_ITEMS' = 'DISPLAY_ITEMS',
  'CLEAR_CART' = 'CLEAR_CART',
  'INCREASEITEM' = 'INCREASEITEM',
  'DECREASEITEM' = 'DECREASEITEM',
  'GET_TOTAL' = 'GET_TOTAL',
  'GET_TOTAL_PRICE' = 'GET_TOTAL_PRICE',
  'OPEN_CART' = 'OPEN_CART',
  'CLOSE_CART' = 'CLOSE_CART',
  'SHOW_BY_CATEGORY' = 'SHOW_BY_CATEGORY',
  'TOGGLESIDEBAR' = 'TOGGLESIDEBAR',
  'AUTH_USER' = 'AUTH_USER',
  'OPEN_SEARCH' = 'OPEN_SEARCH',
  'CLOSE_SEARCH' = 'CLOSE_SEARCH',
}

export interface IValues extends IState {
  toggleLoading: () => void
  toggleSidebar: () => void
  openSearch: () => void
  closeSearch: () => void
}

export interface IState {
  isLoading: boolean
  isSidebarOpen: boolean
  showSearchPage: boolean
}

export interface IActions {
  type: ActionKinds
  payload?: any
}
export interface IAccount {
  icon: IconType
  text: string
}
