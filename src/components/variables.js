import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Variable from 'components/variable'
import VariableContext from 'providers/variable-context'

import data from 'data/variable-data'

export default function Variables() {
  var { state, setVariable } = React.useContext(VariableContext)
  // var [fontFamilies, setFontFamilies] = React.useState([])

  // React.useEffect(() => {
  //   fetch(
  //     'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCw_oxERFZFVJ45N0HglwdJR6h12F4471M'
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       setFontFamilies(
  //         data.items.map(font => {
  //           return { label: font.family, value: font.family }
  //         })
  //       )
  //     })
  // }, [])

  var Root = styled.div`
    width: 60%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    font-size: ${state.fontSize}rem;
  `

  var VariablesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `

  var VariablesColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  var Heading = styled.h2`
    font-size: 3rem;
    margin-top: 2rem;
  `

  var Checkbox = styled.input`
    margin-right: 1rem;
  `

  var CheckboxContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
  `

  var Button = styled.button`
    align-self: flex-end;
    background-color: #207df8;
    color: white;
    font-size: ${state.fontSize}rem;
    padding: 0.5rem;
    border-radius: 8px;
    border: 0px;
    margin-bottom: 4rem;
  `

  var MotionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
  `

  var MotionVariables = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `

  var MotionText = styled.p`
    font-size: 1rem;
    a {
      color: #77b1fc;
    }
  `

  function handleApply() {
    console.log('apply called')
    let width = document.getElementById('width').value
    let focusColor = document.getElementById('focusColor').value
    let bgColor = document.getElementById('bgColor').value
    let offset = document.getElementById('offset').value
    let outline = document.getElementById('outline').value

    setVariable('width', width)
    setVariable('focusColor', focusColor)
    setVariable('bgColor', bgColor)
    setVariable('offset', offset)
    setVariable('outline', outline)

    if (!state.reducedMotion) {
      let motion = document.getElementById('motion').value
      let duration = document.getElementById('duration').value
      let loop = document.getElementById('loop').value

      setVariable('motion', motion)
      setVariable('duration', duration)
      setVariable('loop', loop)
    }
  }

  function handleReducedMotion(event) {
    if (!state.reducedMotion) {
      setVariable('motion', 'none')
    }
    setVariable('reducedMotion', !state.reducedMotion)
  }

  return (
    <Root>
      <Heading>Focus Styles</Heading>
      <VariablesContainer>
        <VariablesColumn
          css={css`
            margin-right: 1rem;
          `}
        >
          <Variable
            label="Width"
            name="width"
            input={true}
            type="number"
            key="width"
          />
          <Variable
            label="Color"
            name="focusColor"
            input={true}
            type="color"
            key="focusColor"
          />
          <Variable
            label="Background"
            name="bgColor"
            input={true}
            type="color"
            key="bgColor"
          />
        </VariablesColumn>
        <VariablesColumn
          css={css`
            margin-left: 1rem;
          `}
        >
          <Variable
            label="Offset"
            name="offset"
            input={true}
            type="number"
            key="offset"
          />
          <Variable
            label="Style"
            name="outline"
            key="outline"
            options={[
              { label: 'Solid', value: 'solid' },
              { label: 'Dashed', value: 'dashed' },
              { label: 'Dotted', value: 'dotted' },
            ]}
          />
        </VariablesColumn>
      </VariablesContainer>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          name="reducedMotion"
          id="reducedMotion"
          value="reducedMotion"
          checked={state.reducedMotion}
          onChange={handleReducedMotion}
        />
        <label for="reducedMotion">Prefers reduced motion</label>
      </CheckboxContainer>
      {state.reducedMotion ? null : (
        <MotionContainer>
          <MotionText>
            Learn about Reduced Motion in this article by{' '}
            <a href="https://ericwbailey.design/">Eric Bailey</a>.
          </MotionText>
          <MotionText>
            <a href="https://css-tricks.com/introduction-reduced-motion-media-query/">
              An Introduction to the Reduced Motion Media Query
            </a>
          </MotionText>
          <MotionVariables>
            <Variable
              label="Motion"
              name="motion"
              key="motion"
              options={[
                { label: 'None', value: 'none' },
                { label: 'Pulsing', value: 'pulse' },
                { label: 'Bouncing', value: 'bounce' },
                { label: 'Fading', value: 'fade' },
              ]}
            />
            <Variable
              label="Speed"
              name="duration"
              key="duration"
              options={[
                { label: 'Slow', value: '2s' },
                { label: 'Medium', value: '1s' },
                { label: 'Fast', value: '650ms' },
              ]}
            />
            <Variable
              label="Loop"
              name="loop"
              key="loop"
              options={[
                { label: 'One', value: '1' },
                { label: 'Two', value: '2' },
                { label: 'Indefinitely', value: 'infinite' },
              ]}
            />
          </MotionVariables>
        </MotionContainer>
      )}
      <Button onClick={handleApply}>Apply</Button>
    </Root>
  )
}
