import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Layout from 'components/layout'
import Examples from 'components/examples'
import Variables from 'components/variables'
import VariableContext from 'providers/variable-context'

var example = css``

export default function Index() {
  var { state } = React.useContext(VariableContext)
  var ref = React.useRef(null)

  var Column = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: ${state.bgColor.hex};
    color: #fff;
    padding: 2rem;

    input,
    select {
      background-color: ${state.inputBg.hex};
    }
  `

  return (
    <Layout title="WTFocus">
      <Column>
        <Variables />
      </Column>
      <Column css={example} ref={ref}>
        <h1>Examples</h1>
        <Examples portalRef={ref} />
      </Column>
    </Layout>
  )
}
