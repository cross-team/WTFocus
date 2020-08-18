import React from 'react'
import styled from '@emotion/styled'
import { ChromePicker } from 'react-color'
import Variable from 'components/variable'
import VariableContext from 'providers/variable-context'

import data from 'data/variable-data'

export default function Variables() {
  var { state, setVariable } = React.useContext(VariableContext)

  var Colors = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  `

  function handleFocusChange(color) {
    setVariable('focusColor', color)
  }

  function handleBGChange(color) {
    setVariable('bgColor', color)
  }

  function handleInputChange(color) {
    setVariable('inputBg', color)
  }

  return (
    <>
      <h1>Focus Variables</h1>
      <Colors>
        <div>
          <label for="focusColor">Focus Color:</label>
          <ChromePicker
            name="focusColor"
            id="focusColor"
            color={state.focusColor}
            onChange={handleFocusChange}
          />
        </div>
        <div>
          <label for="bgColor">Background Color:</label>
          <ChromePicker
            name="bgColor"
            id="bgColor"
            color={state.bgColor}
            onChange={handleBGChange}
          />
        </div>
        <div>
          <label for="inputBg">Input Color:</label>
          <ChromePicker
            name="inputBg"
            id="inputBg"
            color={state.inputBg}
            onChange={handleInputChange}
          />
        </div>
      </Colors>

      {data.map(variable => {
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
            options={variable.options ? variable.options : []}
            input={variable.input ? true : false}
            type={variable.type ? variable.type : ''}
            key={variable.name}
          />
        )
      })}
    </>
  )
}
