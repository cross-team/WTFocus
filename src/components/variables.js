import React from 'react'
import styled from '@emotion/styled'
// import { css } from '@emotion/core'
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

var variableData = [
  {
    label: 'Size',
    name: 'size',
    options: [
      { label: 'Thin', value: 'thin' },
      { label: 'Medium', value: 'medium' },
      { label: 'Thick', value: 'thick' },
    ],
  },
  {
    label: 'Color',
    name: 'color',
    options: [
      { label: 'Green', value: '#0a0' },
      { label: 'Blue', value: '#04f' },
      { label: 'Pink', value: '#f5f' },
    ],
  },
  {
    label: 'Shape',
    name: 'shape',
    options: [
      { label: 'Solid', value: 'solid' },
      { label: 'Dashed', value: 'dashed' },
      { label: 'Dotted', value: 'dotted' },
    ],
  },
]

export default function Variables() {
  return (
    <>
      <h1>Focus Variables</h1>
      {variableData.map(variable => (
        <Variable
          label={variable.label}
          name={variable.name}
          options={variable.options}
        />
      ))}
    </>
  )
}
