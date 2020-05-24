import React from 'react'
import { Provider } from 'react-redux'

import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from 'styled-components'

import store from 'store'
import { GlobalStyle, theme } from 'theme'
import { getHistory } from 'utils'

import Main from './Main'

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={getHistory()}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Main />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
