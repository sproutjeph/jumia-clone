import { ActionKinds, IActions, IState } from '../typings'

const reducer = (state: IState, action: IActions) => {
  if (action.type === ActionKinds.LOADING) {
    return { ...state, isLoading: !state.isLoading }
  }
  if (action.type === ActionKinds.TOGGLESIDEBAR) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen }
  }
  if (action.type === ActionKinds.OPEN_SEARCH) {
    return { ...state, showSearchPage: action.payload }
  }
  if (action.type === ActionKinds.CLOSE_SEARCH) {
    return { ...state, showSearchPage: action.payload }
  }

  return state
}

export default reducer
