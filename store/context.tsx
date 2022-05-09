import React, { ReactNode, useContext, useEffect, useReducer } from 'react'
import { ActionKinds, IState, IValues } from '../typings'
import Reducer from './reducer'

const initialState: IState = {
  isLoading: false,
  isSidebarOpen: false,
  showSearchPage: false,
}

const AppContext = React.createContext({} as IValues)

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  // my logic
  const toggleLoading = () => {
    dispatch({ type: ActionKinds.LOADING })
  }
  const toggleSidebar = () => {
    dispatch({ type: ActionKinds.TOGGLESIDEBAR })
  }
  function openSearch() {
    dispatch({ type: ActionKinds.OPEN_SEARCH, payload: true })
  }
  function closeSearch() {
    dispatch({ type: ActionKinds.CLOSE_SEARCH, payload: false })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleLoading,
        toggleSidebar,
        openSearch,
        closeSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
