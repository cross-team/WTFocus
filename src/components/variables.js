import React from 'react'
import { ChromePicker } from 'react-color'
import Variable from 'components/variable'
import VariableContext from 'providers/variable-context'

import data from 'data/variable-data'

export default function Variables() {
  var { state, setVariable } = React.useContext(VariableContext)

  function handleChange(color) {
    console.log(color)
    setVariable('color', color)
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
        if (state.shape === 'outline') {
          if (variable.name === 'position') {
            return null
          }
        } else {
          if (variable.name === 'outline') {
            return null
          }
          if (variable.name === 'motion') {
            return null
          }
        }
        if (state.motion === 'none') {
          if (
            variable.name === 'duration' ||
            variable.name === 'loop' ||
            variable.name === 'interval'
          ) {
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
