import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import LoginExample from 'components/login-example'
import Indicators from 'components/indicators'
import VariableContext from 'providers/variable-context'

export default function Examples() {
  var { state } = React.useContext(VariableContext)
  console.log(state.focusColor)
  var [trapInactive, setTrapInactive] = React.useState(false)
  var symbol
  var symbolWeight

  function handleClick() {
    let focusTrap = document.querySelector('focus-trap')
    focusTrap.inactive = !trapInactive
    setTrapInactive(!trapInactive)
  }

  var animations = css`
    a:focus,
    button:focus,
    input:focus {
      animation: ${state.motion} ${state.duration};
      animation-iteration-count: ${state.loop};
    }

    @keyframes pulse {
      0% {
        outline-width: ${state.thickness}px;
      }
      50% {
        outline-width: 12px;
      }
      100% {
        outline-width: ${state.thickness}px;
      }
    }

    @keyframes fade {
      0% {
        outline-color: rgba(
          ${state.focusColor.rgb.r},
          ${state.focusColor.rgb.g},
          ${state.focusColor.rgb.b},
          1
        );
      }
      50% {
        outline-color: rgba(
          ${state.focusColor.rgb.r},
          ${state.focusColor.rgb.g},
          ${state.focusColor.rgb.b},
          0
        );
      }
      100% {
        outline-color: rgba(
          ${state.focusColor.rgb.r},
          ${state.focusColor.rgb.g},
          ${state.focusColor.rgb.b},
          1
        );
      }
    }
  `

  var outlineStyles = css`
    a:focus,
    button:focus,
    input:focus {
      outline: ${state.outline} ${state.thickness}px ${state.focusColor.hex};
    }

    ${state.motion !== 'none' && animations}
  `
  var Root = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
  `

  return (
    <Root>
      <Global styles={outlineStyles} />
      <h1>Examples</h1>
      {/* <focus-trap> */}
      <LoginExample />
      {/* <button onClick={handleClick}>
          {trapInactive ? 'Enable Focus Trap' : 'Disable Focus Trap'}
        </button>
      </focus-trap> */}
      <Indicators />
    </Root>
  )
}
