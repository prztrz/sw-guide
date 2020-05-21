import * as React from 'react'
import { Provider } from 'react-redux'

import {
  renderHook,
  RenderHookOptions,
  RenderHookResult,
} from '@testing-library/react-hooks'
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'
import { ThemeProvider } from 'styled-components'

import store from 'store'
import { theme } from 'theme'
import { getHistory } from 'utils'

//  custom hook wrapper providing global context and router
const defaultWrapper = (history: History) => ({
  children,
}: {
  children?: React.ReactNode
}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ConnectedRouter>
  </Provider>
)

export default <P, R>(
  callback: (props: P) => R,
  options?: RenderHookOptions<P>,
  history?: History
): RenderHookResult<P, R> => {
  const routerHistory = history || getHistory()
  const wrapper = options?.wrapper || defaultWrapper(routerHistory)

  return renderHook<P, R>(callback, { ...options, wrapper })
}
