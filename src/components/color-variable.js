import React from 'react'
import styled from '@emotion/styled'
import { ChromePicker } from 'react-color'
import VariableContext from 'providers/variable-context'
import { getFontColor } from 'utils/functions'

export default function ColorVariable({ name, label }) {
  var { state, setVariable } = React.useContext(VariableContext)
  var pickerRef = React.useRef(null)

  function handleClickOutside() {
    console.log(`closing ${name} picker`)
    setVariable(`${name}Hidden`, true)
  }

  function handleChange(color) {
    setVariable(`${name}`, color)
  }

  function handleClick() {
    setVariable(`${name}Hidden`, !state[`${name}Hidden`])
  }

  var Root = styled.div`
    padding: 0.5rem 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .picker {
      position: absolute;
    }
  `

  var ColorButton = styled.button`
    width: 50%;
    background-color: ${state[name]};
    border: 4px solid white;
    border-radius: 4px;
    padding: 0.75rem;
  `

  return (
    <Root>
      <label for={name}>{label}:</label>
      <ColorButton
        id={name}
        aria-label={`${label}: ${state[name]}`}
        onClick={handleClick}
      >
        <span
          className={state[`${name}Hidden`] ? 'hidden' : ''}
          ref={pickerRef}
        >
          <ChromePicker
            className={`picker`}
            name={name}
            id={`${name}Picker`}
            color={state[name]}
            onChange={handleChange}
          />
        </span>
      </ColorButton>
    </Root>
  )
}
