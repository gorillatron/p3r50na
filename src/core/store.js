
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'


export async function storeFactory({initialState}) {
  const enhancer = compose(devTools())
  const store = createStore(reducer, initialState, enhancer)
  return store
}


function devTools() {
  return typeof window !== 'undefined' && window.devToolsExtension ? 
    window.devToolsExtension() : 
    f => f
}