import React from 'react'
import styled from '@emotion/styled'
import VariableContext from 'providers/variable-context'

var DropDown = styled.select``

var Label = styled.label``

var Option = styled.option``

function Variable({ label, name, options }) {
  var variableContext = React.useContext(VariableContext)

  var handleChange = event => {
    variableContext.setVariable(name, event.target.value)
  }

  return (
    <>
      <Label for={name}>{label}</Label>
      <DropDown
        name={name}
        id={name}
        onChange={handleChange}
        value={variableContext.variables[name]}
      >
        {options.map(option => (
          <Option value={option.value}>{option.label}</Option>
        ))}
      </DropDown>
    </>
  )
}
