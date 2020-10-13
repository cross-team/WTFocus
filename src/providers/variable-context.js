import React from 'react'

var VariableContext = React.createContext()
export default VariableContext

var initialState = {
  // URL Settings
  bgColor: '#f2f2f2',
  inputBg: '#ffffff',
  focusColor: '#0e63c8',
  width: 2,
  offset: 4,
  outline: 'solid',
  reducedMotion: true,
  motion: 'none',
  duration: '1s',
  loop: 'infinite',
  // theme: 'html',
  // inputBgHidden: true,
  // focusColorHidden: true,
  // bgColorHidden: true,
  fontSize: 1.2,
  fontFamily: 'Roboto',
  fontWeight: 400,
  variableBg: '#343a40',
}

function reducer(state, action) {
  switch (action.type) {
    case 'update':
      return { ...state, [action.field]: action.value }
    default:
      throw new Error()
  }
}

export function VariableController({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  function setVariable(field, value) {
    dispatch({ type: 'update', field, value })
  }

  var value = {
    state,
    setVariable,
  }

  return (
    <VariableContext.Provider value={value}>
      {children}
    </VariableContext.Provider>
  )
}
