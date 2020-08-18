import React from 'react'
import styled from '@emotion/styled'

export default function Indicator({ result }) {
  var Root = styled.span`
    color: ${result ? 'green' : 'red'};
  `

  return <Root>{result ? '✓' : '✕'}</Root>
}
