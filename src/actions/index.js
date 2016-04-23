
export const unlockApp = () => {
  return {
    type: 'UNLOCK_APP'
  }
}

export const lockApp = () => {
  return {
    type: 'LOCK_APP'
  }
}

export const setText = (text) => {
  return {
    type: 'SET_TEXT',
    text
  }
}
