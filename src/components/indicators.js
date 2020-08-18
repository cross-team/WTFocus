import React from 'react'
import styled from '@emotion/styled'
import Indicator from 'components/indicator'
import VariableContext from 'providers/variable-context'
import { hexToRgb, contrast } from 'utils/functions'

var Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

var Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`

var Label = styled.p`
  margin: 0.5rem;
`

export default function Indicators() {
  var { state } = React.useContext(VariableContext)

  // size - Thickness of the outline in pixels
  // outline - Color of the focus indicator
  // target - Color of the target
  // bg - Color of the adjacent background
  // Colors are passed as an array of the rgb values: [r, g, b]
  function getResults(size, outline, target, bg) {
    console.log('size', size)
    console.log('outline', outline)
    console.log('target', target)
    console.log('bg', bg)
    let results = {
      AA: false,
      AAA: false,
    }

    if (
      size >= 1 &&
      contrast(outline, target) >= 3 &&
      contrast(outline, bg) >= 3
    ) {
      results.AA = true
    }

    if (
      size >= 2 &&
      contrast(outline, target) >= 4 &&
      contrast(outline, bg) >= 3
    ) {
      results.AAA = true
    }

    return results
  }

  var conformanceResults = getResults(
    state.thickness,
    [state.color.rgb.r, state.color.rgb.g, state.color.rgb.b],
    hexToRgb(state.inputBg),
    hexToRgb(state.bgColor)
  )

  return (
    <Root>
      <Container>
        <Indicator result={conformanceResults.AA} />
        <Label>Level AA Compliance</Label>
      </Container>
      <Container>
        <Indicator result={conformanceResults.AAA} />
        <Label>Level AAA Compliance</Label>
      </Container>
      <p>According to WCAG 2.2 W3C Working Draft 11 August 2020</p>
    </Root>
  )
}
