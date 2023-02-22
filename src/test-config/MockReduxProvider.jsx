import { Provider } from 'react-redux'
import React from 'react'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from '../store/store'

export default function MockReduxProvider(props) {
  const { children, customStore } = props

  return (
    <Provider store={customStore || store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  )
}
