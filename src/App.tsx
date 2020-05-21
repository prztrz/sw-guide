import React from 'react'
import { Provider } from 'react-redux'

import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from 'styled-components'

import store from 'store'
import { GlobalStyle, theme } from 'theme'
import { getHistory } from 'utils'

import './App.css'
import logo from './logo.svg'

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={getHistory()}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
