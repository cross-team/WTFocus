import React from 'react'

var VariableContext = React.createContext()
export default VariableContext

var initialState = {
  theme: 'html',
  fontFamily: 'Roboto',
  fontWeight: 400,
  thickness: '2',
  bgColorHidden: true,
  bgColor: {
    hex: '#222222',
    rgb: {
      r: '34',
      g: '34',
      b: '34',
      a: '1',
    },
  },
  inputBgHidden: true,
  inputBg: {
    hex: '#ffffff',
    rgb: {
      r: '255',
      g: '255',
      b: '255',
      a: '1',
    },
  },
  focusColorHidden: true,
  focusColor: {
    hex: '#00aa00',
    rgb: {
      r: '0',
      g: '170',
      b: '0',
      a: '1',
    },
  },
  outline: 'solid',
  motion: 'none',
  duration: '1s',
  loop: 'infinite',
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
