import * as React from 'react'
import { Provider } from 'react-redux'

import { render } from '@testing-library/react'
import { ConnectedRouter } from 'connected-react-router'
import { MemoryHistory } from 'history'
import { ThemeProvider } from 'styled-components'

import store from 'store'
import { theme } from 'theme'
import { getHistory } from 'utils'

export default (node: React.ReactNode, history?: MemoryHistory) => {
  const routerHistory = history || getHistory()

  //  custom render function which wraps tested component into context and router
  return render(
    <Provider store={store}>
      <ConnectedRouter history={routerHistory}>
        <ThemeProvider theme={theme}>{node}</ThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}
