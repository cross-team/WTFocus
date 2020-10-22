import React from 'react'
import FocusTrap from 'focus-trap-react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import Indicators from 'components/indicators'
import VariableContext from 'providers/variable-context'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { hexToRgb } from 'utils/functions'

export default function Examples() {
  var { state, setVariable } = React.useContext(VariableContext)
  var [trapActive, setTrapActive] = React.useState(false)

  function handleFocusTrap() {
    setTrapActive(!trapActive)
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
        outline-width: calc(${state.width}px + 10px);
      }
      100% {
        outline-width: ${state.width}px;
      }
    }

    @keyframes bounce {
      0% {
        outline-offset: ${state.offset}px;
      }
      50% {
        outline-offset: calc(${state.offset}px + 10px);
      }
      100% {
        outline-offset: ${state.offset}px;
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

    ${animations}

    @media (prefers-reduced-motion) {
      a:focus,
      button:focus,
      select: focus,
      input:focus {
        animation: none;
      }
    }
  `
  var Root = styled.section`
    width: 80%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 2rem;
    font-size: ${state.fontSize}rem;
  `

  var TrapContainer = styled.div`
    width: 100%;
  `

  var Heading = styled.h2`
    font-size: 3rem;
    white-space: nowrap;
  `

  var InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `

  var Input = styled.input`
    height: auto;
    width: 100%;
    border: 2px solid #767676;
    border-radius: 4px;
    margin-bottom: ${+state.width + +state.offset}px;
    margin-top: ${+state.width + +state.offset}px;
    font-size: ${state.fontSize}rem;
    padding: 0.5rem;
    background-color: ${state.inputBg};
  `

  var DropDown = styled.select`
    height: auto;
    width: 100%;
    border: 2px solid #767676;
    border-radius: 4px;
    margin-bottom: ${+state.width + +state.offset}px;
    margin-top: ${+state.width + +state.offset}px;
    font-size: ${state.fontSize}rem;
    padding: 0.5rem;
    background-color: ${state.inputBg};
  `

  var Checkbox = styled.input`
    margin-right: ${+state.width + +state.offset}px;
  `

  var CheckboxContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    label {
      margin-right: 2rem;
      margin-bottom: 0;
    }
  `

  var LinkContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${+state.width + +state.offset}px;
    margin-top: ${+state.width + +state.offset}px;
  `

  var Link = styled.a`
    color: #001aff;
    text-decoration: underline;
  `

  var Button = styled.button`
    align-self: flex-end;
    background-color: #333b3f;
    color: white;
    font-size: ${state.fontSize}rem;
    padding: 0.5rem;
    border-radius: 8px;
    border: 0px;
    padding: 1rem 2rem;
  `

  return (
    <Root role="region" css={outlineStyles} aria-labelledby="previewHeading">
      <Heading id="previewHeading">Focus Preview</Heading>
      <Indicators />
      <FocusTrap
        active={trapActive}
        focusTrapOptions={{
          clickOutsideDeactivates: false,
          allowOutsideClick: true,
        }}
      >
        <TrapContainer>
          <InputContainer>
            <label for="input-ex">Input</label>
            <Input
              name="input-ex"
              id="input-ex"
              aria-label="input element example"
            />
          </InputContainer>
          <InputContainer
            css={css`
              margin-top: ${+state.width + +state.offset}px;
            `}
          >
            <label for="select-ex">Select</label>
            <DropDown
              name="select-ex"
              id="select-ex"
              aria-label="select element example"
            />
          </InputContainer>
          <LinkContainer>
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

            <Link href="#" aria-label="link example">
              Link
            </Link>
          </LinkContainer>
          <LinkContainer>
            <Button aria-label="button example">Button</Button>
            <CheckboxContainer
              css={css`
                justify-content: flex-end;
              `}
            >
              <Checkbox
                type="checkbox"
                name="enableFocusTrap"
                id="enableFocusTrap"
                aria-label="Focus Trap Checkbox"
                value="enableFocusTrap"
                checked={trapActive}
                onChange={handleFocusTrap}
              />
              <label for="enableFocusTrap">Focus Trap</label>
            </CheckboxContainer>
          </LinkContainer>
        </TrapContainer>
      </FocusTrap>
    </Root>
  )
}
