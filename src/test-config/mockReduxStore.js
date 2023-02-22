import configureStore from 'redux-mock-store'

const mockStoreConf = configureStore([])
export const mockStore = mockStoreConf({
  counter: {
    value: 4
  }
})
