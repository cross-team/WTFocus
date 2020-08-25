import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Layout from 'components/layout'
import Examples from 'components/examples'
import Variables from 'components/variables'
import VariableContext from 'providers/variable-context'
import { getFontColor } from 'utils/functions'
import logoWhite from 'assets/svgs/logo-white.svg'
import logo from 'assets/svgs/logo.svg'

var example = css``

export default function Index() {
  var { state } = React.useContext(VariableContext)
  var ref = React.useRef(null)

  var Column1 = styled.div`
    height: 100%;
    width: 100%;
    background-color: #343a40;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `

  var Column2 = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${state.bgColor};
    color: ${getFontColor(state.bgColor)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    input,
    select,
    button {
    }
  `

  var MobileLogo = styled.img`
    margin-top: 2rem;
    width: 70%;
    @media only screen and (min-width: 1000px) {
      display: none;
    }
  `
  var DesktopLogo = styled.img`
    position: relative;
    left: calc(49%);
    margin-top: 2rem;
    width: 100%;
    @media only screen and (max-width: 1000px) {
      display: none;
    }
  `

  return (
    <Layout title="WTFocus">
      <Column1>
        <DesktopLogo src={logo} />
        <MobileLogo src={logoWhite} />
        <Variables />
      </Column1>
      <Column2 css={example} ref={ref}>
        <Examples portalRef={ref} />
      </Column2>
    </Layout>
  )
}
