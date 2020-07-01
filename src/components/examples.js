import React from 'react'
import { Global, css } from '@emotion/core'
import LoginExample from 'components/login-example'
import VariableContext from 'providers/variable-context'

export default function Examples({ portalRef }) {
  var variableContext = React.useContext(VariableContext)
  var [update, setUpdate] = React.useState(true)

  if (portalRef.current === null) {
    setTimeout(() => {
      console.log(portalRef.current)
      setUpdate(!update)
    }, 1)
    return null
  }

  return (
    <>
      <Global
        styles={css`
          a,
          input:focus {
            outline: ${variableContext.variables.size}
              ${variableContext.variables.color}
              ${variableContext.variables.shape};
          }
        `}
      />
      <LoginExample />
    </>
  )
}
