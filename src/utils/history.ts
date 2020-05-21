import { createBrowserHistory, createMemoryHistory } from 'history'

const browserHistory = createBrowserHistory()
const memoryHistory = createMemoryHistory()

export default () =>
  process.env.NODE_ENV === 'test' ? memoryHistory : browserHistory
