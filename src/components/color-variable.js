import React from 'react'
import styled from '@emotion/styled'
import { ChromePicker } from 'react-color'
import VariableContext from 'providers/variable-context'
import { getFontColor } from 'utils/functions'

export default function ColorVariable({ name, label }) {
  var { state, setVariable } = React.useContext(VariableContext)

  function handleChange(color) {
    setVariable(`${name}`, color)
  }

  function handleClick() {
    console.log('clicked')
    setVariable(`${name}Hidden`, !state[`${name}Hidden`])
  }

  var Root = styled.div`
    width: 30%;
    .picker {
      position: absolute;
    }
  `

  var ColorButton = styled.button`
    width: 100%;
    background-color: ${state[name].hex};
    border: 2px solid white;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    padding: 0.4rem 0;
    font-family: ${state.fontFamily};
    color: ${getFontColor(state[name].hex)};
  `

  return (
    <Root>
      <ColorButton onClick={handleClick}>
        <label for={name}>{label}</label>
      </ColorButton>
      <ChromePicker
        className={`picker${state[`${name}Hidden`] ? ' hidden' : ''}`}
        name={name}
        id={name}
        color={state[name]}
        onChange={handleChange}
      />
    </Root>
  )
}
