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
import { hexToRgb } from 'utils/functions'

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
    select:focus,
    input:focus {
      animation: ${state.motion} ${state.duration};
      animation-iteration-count: ${state.loop};
    }

    @keyframes pulse {
      0% {
        outline-width: ${state.width}px;
      }
      50% {
        outline-width: 12px;
      }
      100% {
        outline-width: ${state.width}px;
      }
    }

    @keyframes fade {
      0% {
        outline-color: rgba(
          ${hexToRgb(state.focusColor)[0]},
          ${hexToRgb(state.focusColor)[1]},
          ${hexToRgb(state.focusColor)[2]},
          1
        );
      }
      50% {
        outline-color: rgba(
          ${hexToRgb(state.focusColor)[0]},
          ${hexToRgb(state.focusColor)[1]},
          ${hexToRgb(state.focusColor)[2]},
          0
        );
      }
      100% {
        outline-color: rgba(
          ${hexToRgb(state.focusColor)[0]},
          ${hexToRgb(state.focusColor)[1]},
          ${hexToRgb(state.focusColor)[2]},
          1
        );
      }
    }
  `

  var outlineStyles = css`
    a:focus,
    button:focus,
    select:focus,
    input:focus {
      outline: ${state.outline} ${state.width}px ${state.focusColor};
      outline-offset: ${state.offset}px;
    }

    ${state.motion !== 'none' && animations}

    @media (prefers-reduced-motion) {
      a:focus,
      button:focus,
      select: focus,
      input:focus {
        animation: none;
      }
    }
  `
  var Root = styled.div`
    width: 60%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    font-size: 1.25rem;
  `
  //calc(50vw * (212 / 889) + 4rem)
  var Heading = styled.h2`
    font-size: 3rem;
    margin-top: calc(50vw * (212 / 889) + 4rem);
  `

  var InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1rem;
  `

  var Input = styled.input`
    height: 36px;
    width: 100%;
    border: 2px solid #767676;
    border-radius: 4px;
    margin-top: ${+state.width + +state.offset + 4}px;
    font-size: 1.25rem;
  `

  var DropDown = styled.select`
    height: 36px;
    width: 100%;
    border: 2px solid #767676;
    border-radius: 4px;
    margin-top: ${+state.width + +state.offset + 4}px;
    font-size: 1.25rem;
  `

  var Checkbox = styled.input`
    margin-right: 1rem;
  `

  var CheckboxContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0.5rem;
  `

  var LinkContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  var Link = styled.a`
    color: #001aff;
    text-decoration: underline;
  `

  var Button = styled.button`
    align-self: flex-end;
    background-color: #207df8;
    color: white;
    font-size: 1.25rem;
    padding: 0.5rem;
    border-radius: 8px;
    border: 0px;
  `

  return (
    <Root css={outlineStyles}>
      <Heading>Preview</Heading>
      <InputContainer>
        <label for="input-ex">Input</label>
        <Input
          name="input-ex"
          id="input-ex"
          aria-label="input element example"
        />
      </InputContainer>
      <InputContainer>
        <label for="select-ex">Select</label>
        <DropDown
          name="select-ex"
          id="select-ex"
          aria-label="select element example"
        />
      </InputContainer>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          name="checkbox-ex"
          id="checkbox-ex"
          aria-label="checkbox element example"
        />
        <label for="checkbox-ex">Checkbox</label>
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          type="radio"
          name="radio-ex"
          id="radio-ex"
          aria-label="radio element example"
        />
        <label for="radio-ex">Radio</label>
      </CheckboxContainer>
      <LinkContainer>
        <Link href="#">Link</Link>
        <Button>Button</Button>
      </LinkContainer>
      <Indicators />
    </Root>
  )
}
