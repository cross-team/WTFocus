import React from 'react'
import styled from '@emotion/styled'
import VariableContext from 'providers/variable-context'

var DropDown = styled.select`
  width: 50%;
`

var Input = styled.input`
  width: 49%;
`

var Label = styled.label``

var Option = styled.option``

var Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`

export default function Variable({
  label,
  name,
  options,
  input = false,
  type = '',
  key,
}) {
  var variableContext = React.useContext(VariableContext)

  var handleChange = event => {
    variableContext.setVariable(name, event.target.value)
  }

  if (input) {
    return (
      <Root>
        <Label for={name}>{label}:</Label>
        <Input
          name={name}
          id={name}
          key={key}
          onChange={handleChange}
          value={variableContext.state[name]}
          type={type}
          min={name === 'thickness' ? '1' : 'any'}
          max={name === 'thickness' ? '10' : 'any'}
        />
      </Root>
    )
  }

  return (
    <Root>
      <Label for={name}>{label}:</Label>
      <DropDown
        name={name}
        id={name}
        key={key}
        onChange={handleChange}
        value={variableContext.state[name]}
      >
        {options.map(option => (
          <Option value={option.value} key={option.label}>
            {option.label}
          </Option>
        ))}
      </DropDown>
    </Root>
  )
}
