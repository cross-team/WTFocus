import React from 'react'
import { Global, css } from '@emotion/core'
import '@a11y/focus-trap'
import LoginExample from 'components/login-example'
import Indicators from 'components/indicators'
import VariableContext from 'providers/variable-context'

export default function Examples() {
  var { state } = React.useContext(VariableContext)
  var [trapInactive, setTrapInactive] = React.useState(false)
  var symbol
  var symbolWeight

  function handleClick() {
    let focusTrap = document.querySelector('focus-trap')
    focusTrap.inactive = !trapInactive
    setTrapInactive(!trapInactive)
  }

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
          ${state.color.rgb.r},
          ${state.color.rgb.g},
          ${state.color.rgb.b},
          1
        );
      }
      50% {
        outline-color: rgba(
          ${state.color.rgb.r},
          ${state.color.rgb.g},
          ${state.color.rgb.b},
          0
        );
      }
      100% {
        outline-color: rgba(
          ${state.color.rgb.r},
          ${state.color.rgb.g},
          ${state.color.rgb.b},
          1
        );
      }
    }
  `

  var outlineStyles = css`
    a:focus,
    button:focus,
    input:focus {
      outline: ${state.outline} ${state.thickness}px ${state.color.hex};
    }

    ${state.motion !== 'none' && animations}
  `

  var bulletStyles = css`
    a:focus::${state.position}, button:focus::${state.position} {
      content: "${symbol}";
      color: ${state.color.hex};
      font-weight: ${symbolWeight};
    }
  `

  return (
    <>
      <Global
        styles={state.shape === 'outline' ? outlineStyles : bulletStyles}
      />
      <focus-trap>
        <LoginExample />
        <button onClick={handleClick}>
          {trapInactive ? 'Enable Focus Trap' : 'Disable Focus Trap'}
        </button>
      </focus-trap>
      <Indicators />
    </>
  )
}
