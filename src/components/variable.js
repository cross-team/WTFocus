import React from 'react'
import styled from '@emotion/styled'
import VariableContext from 'providers/variable-context'

var DropDown = styled.select`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`

var Input = styled.input`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`

var Label = styled.label``

var Option = styled.option``

export default function Variable({
  label,
  name,
  options,
  input = false,
  type,
}) {
  var variableContext = React.useContext(VariableContext)

  var handleChange = event => {
    variableContext.setVariable(name, event.target.value)
  }

  if (input) {
    return (
      <>
        <Label for={name}>{label}:</Label>
        <Input
          name={name}
          id={name}
          onChange={handleChange}
          value={variableContext.state[name]}
          type={type}
          min={name === 'thickness' ? '1' : 'any'}
        />
      </>
    )
  }

  return (
    <>
      <Label for={name}>{label}:</Label>
      <DropDown
        name={name}
        id={name}
        onChange={handleChange}
        value={variableContext.state[name]}
      >
        {options.map(option => (
          <Option value={option.value} key={option.label}>
            {option.label}
          </Option>
        ))}
      </DropDown>
    </>
  )
}
