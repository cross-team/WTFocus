import React from 'react'
import styled from '@emotion/styled'
import ColorVariable from 'components/color-variable'
import Variable from 'components/variable'
import VariableContext from 'providers/variable-context'

import data from 'data/variable-data'

export default function Variables() {
  var { state, setVariable } = React.useContext(VariableContext)
  var [fontFamilies, setFontFamilies] = React.useState([])

  React.useEffect(() => {
    fetch(
      'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCw_oxERFZFVJ45N0HglwdJR6h12F4471M'
    )
      .then(response => response.json())
      .then(data => {
        setFontFamilies(
          data.items.map(font => {
            return { label: font.family, value: font.family }
          })
        )
      })
  }, [])

  var Root = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
  `

  var Colors = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  `

  return (
    <Root>
      <h1>Focus Variables</h1>
      <Colors>
        <ColorVariable name="focusColor" label="Focus Color" />
        <ColorVariable name="bgColor" label="Background Color" />
        <ColorVariable name="inputBg" label="Input Color" />
      </Colors>
      <Variable
        label="Font Family"
        name="fontFamily"
        options={fontFamilies}
        key="fontFamily"
      />
      {data.map(variable => {
        if (state.motion === 'none') {
          if (
            variable.name === 'duration' ||
            variable.name === 'loop' ||
            variable.name === 'interval'
          ) {
            return null
          }
        }

        return (
          <Variable
            label={variable.label}
            name={variable.name}
            options={variable.options ? variable.options : []}
            input={variable.input ? true : false}
            type={variable.type ? variable.type : ''}
            key={variable.name}
          />
        )
      })}
    </Root>
  )
}
