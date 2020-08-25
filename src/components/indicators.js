import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import VariableContext from 'providers/variable-context'
import { hexToRgb, contrast } from 'utils/functions'

var Root = styled.div`
  background-color: white;
  border: 1px solid #777;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 0 1rem 1rem 1rem;
  margin-bottom: 4rem;
`

var Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

var Label = styled.p`
  margin: 0.5rem;
`

export default function Indicators() {
  var { state } = React.useContext(VariableContext)

  // size - Width of the outline in pixels
  // outline - Color of the focus indicator
  // target - Color of the target
  // bg - Color of the adjacent background
  // Colors are passed as an array of the rgb values: [r, g, b]
  function getResults(size, outline, target, bg) {
    console.log(outline, target, bg)
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
    state.width,
    hexToRgb(state.focusColor),
    hexToRgb(state.inputBg),
    hexToRgb(state.bgColor)
  )

  var pass = css`
    font-weight: bold;
    color: #2a039b;
  `

  var fail = css`
    font-weight: bold;
    color: #df6b03;
  `

  var iconStyles = css`
    margin-right: 0.5rem;
  `

  return (
    <Root>
      <Container>
        <p
          css={css`
            color: #767676;
          `}
        >
          <a href="https://www.w3.org/TR/WCAG22/#focus-appearance-minimum">
            SC 2.4.11
          </a>{' '}
          WCAG 2.2 Draft
        </p>
      </Container>
      <Container>
        <Container css={conformanceResults.AA ? pass : fail}>
          {conformanceResults.AA ? (
            <FontAwesomeIcon icon={faCheckCircle} css={iconStyles} />
          ) : (
            <FontAwesomeIcon icon={faTimesCircle} css={iconStyles} />
          )}
          AA
        </Container>
        <Container css={conformanceResults.AAA ? pass : fail}>
          {conformanceResults.AAA ? (
            <FontAwesomeIcon icon={faCheckCircle} css={iconStyles} />
          ) : (
            <FontAwesomeIcon icon={faTimesCircle} css={iconStyles} />
          )}
          AAA
        </Container>
      </Container>
    </Root>
  )
}
