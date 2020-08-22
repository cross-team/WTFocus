import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Layout from 'components/layout'
import Examples from 'components/examples'
import Variables from 'components/variables'
import VariableContext from 'providers/variable-context'
import { getFontColor } from 'utils/functions'
var example = css``

export default function Index() {
  var { state } = React.useContext(VariableContext)
  var ref = React.useRef(null)

  var Column1 = styled.div`
    padding-top: 1rem;
    height: 100%;
    width: 100%;
    background-color: #222;
    color: #fff;
  `

  var Column2 = styled.div`
    padding-top: 1rem;
    height: 100%;
    width: 100%;
    background-color: ${state.bgColor.hex};
    color: ${getFontColor(state.bgColor.hex)};

    input,
    select,
    button {
      background-color: ${state.inputBg.hex};
      color: ${getFontColor(state.inputBg.hex)};
    }
  `

  return (
    <Layout title="WTFocus">
      <Column1>
        <Variables />
      </Column1>
      <Column2 css={example} ref={ref}>
        <Examples portalRef={ref} />
      </Column2>
    </Layout>
  )
}
