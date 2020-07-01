import React from 'react'
import Variable from 'components/variable'

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
