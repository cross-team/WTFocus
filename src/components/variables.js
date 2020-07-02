import React from 'react'
import Variable from 'components/variable'
import VariableContext from 'providers/variable-context'

import data from 'data/variable-data'

export default function Variables() {
  var variableContext = React.useContext(VariableContext)

  return (
    <>
      <h1>Focus Variables</h1>
      {data.map(variable => {
        if (variable.name === 'position') {
          if (variableContext.state.shape === 'outline') {
            return null
          }
        }
        if (variable.name === 'outline') {
          if (variableContext.state.shape !== 'outline') {
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
