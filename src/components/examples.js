import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import LoginExample from 'components/login-example'
import VariableContext from 'providers/variable-context'

export default function Examples() {
  var { state } = React.useContext(VariableContext)

  var symbol
  var symbolWeight

  if (state.shape !== 'outline') {
    switch (state.shape) {
      case 'circle':
        symbol = '●'
        break
      case 'diamond':
        symbol = '◆'
        break
      case 'square':
        symbol = '■'
        break
      default:
        throw new Error()
    }
    switch (state.size) {
      case 'thin':
        symbolWeight = 'lighter'
        break
      case 'medium':
        symbolWeight = 'normal'
        break
      case 'thick':
        symbolWeight = 'bold'
        break
      default:
        throw new Error()
    }
  }

  return (
    <>
      <Global
        styles={
          state.shape === 'outline'
            ? css`
                a,
                input:focus {
                  outline: ${state.outline} ${state.size} ${state.color};
                }
              `
            : css`
        a:focus::${state.position} {
          content: "${symbol}";
          color: ${state.color};
          font-weight: ${symbolWeight};
        }
      `
        }
      />
      <LoginExample />
    </>
  )
}
