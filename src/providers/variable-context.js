import React from 'react'

var VariableContext = React.createContext()
export default VariableContext

var initialState = {
  theme: 'html',
  fontSize: 1.2,
  fontFamily: 'Roboto',
  fontWeight: 400,
  width: 2,
  offset: 4,
  bgColorHidden: true,
  variableBg: '#343a40',
  bgColor: '#f2f2f2',
  inputBgHidden: true,
  inputBg: '#ffffff',
  focusColorHidden: true,
  focusColor: '#0e63c8',
  outline: 'solid',
  motion: 'none',
  duration: '1s',
  loop: 'infinite',
  reducedMotion: 'true',
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
