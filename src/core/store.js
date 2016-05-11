
import {createStore} from 'redux'
import reducer from './reducer'


export async function storeFactory({initialState}) {
  const store = createStore(reducer, initialState, devTools())
  return store
}


function devTools() {
  return typeof window !== 'undefined' && window.devToolsExtension ? 
    window.devToolsExtension() : 
    f => f
}