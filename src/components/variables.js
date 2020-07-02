import React from 'react'
import { ChromePicker } from 'react-color'
import Variable from 'components/variable'
import VariableContext from 'providers/variable-context'

import data from 'data/variable-data'

export default function Variables() {
  var { state, setVariable } = React.useContext(VariableContext)

  function handleChange(color) {
    console.log(color)
    setVariable('color', color.hex)
  }

  return (
    <>
      <h1>Focus Variables</h1>
      <label for="color">Color:</label>
      <ChromePicker
        name="color"
        id="color"
        color={state.color}
        onChange={handleChange}
      />
      {data.map(variable => {
        if (variable.name === 'position') {
          if (state.shape === 'outline') {
            return null
          }
        }
        if (variable.name === 'outline') {
          if (state.shape !== 'outline') {
            return null
          }
        }
        return (
          <Variable
            label={variable.label}
            name={variable.name}
            options={variable.options}
            key={variable.name}
          />
        )
      })}
    </>
  )
}
