import React from 'react'
// import '@a11y/focus-trap'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import LoginExample from 'components/login-example'
import MaterialExample from 'components/material-example'
import BootstrapExample from 'components/bootstrap-example'
import Indicators from 'components/indicators'
import VariableContext from 'providers/variable-context'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { getFontColor } from 'utils/functions'

export default function Examples() {
  var { state, setVariable } = React.useContext(VariableContext)
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

    @media (prefers-reduced-motion) {
      a:focus,
      button:focus,
      input:focus {
        animation: none;
      }
    }
  `
  var Root = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
  `

  const lightTheme = createMuiTheme({
    typography: {
      fontFamily: state.fontFamily,
    },
    palette: {
      type: 'light',
      primary: {
        main: `${state.focusColor.hex}`,
      },
    },
  })

  const darkTheme = createMuiTheme({
    typography: {
      fontFamily: state.fontFamily,
    },
    palette: {
      type: 'dark',
      primary: {
        main: `${state.focusColor.hex}`,
      },
    },
  })

  return (
    <Root css={outlineStyles}>
      <h1>Examples</h1>
      {/* <focus-trap> */}
      {state.theme === 'html' && <LoginExample />}
      {state.theme === 'material' && (
        <ThemeProvider
          theme={
            getFontColor(state['bgColor'].hex) === '#ffffff'
              ? darkTheme
              : lightTheme
          }
        >
          <MaterialExample />
        </ThemeProvider>
      )}
      {state.theme === 'bootstrap' && <BootstrapExample />}
      {/* <button onClick={handleClick}>
          {trapInactive ? 'Enable Focus Trap' : 'Disable Focus Trap'}
        </button>
      </focus-trap> */}
      <Indicators />
    </Root>
  )
}
