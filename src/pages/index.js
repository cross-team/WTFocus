import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Layout from 'components/layout'
import Examples from 'components/examples'
import Variables from 'components/variables'
import { VariableController } from 'providers/variable-context'

var Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #222;
  color: #fff;
  padding: 2rem;
`

var example = css``

export default function Index() {
  var ref = React.useRef(null)

  return (
    <Layout title="WTFocus">
      <VariableController>
        <Column>
          <Variables />
        </Column>
        <Column css={example} ref={ref}>
          <h1>Examples</h1>
          <Examples portalRef={ref} />
        </Column>
      </VariableController>
    </Layout>
  )
}
