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
import LogoSVG from 'assets/svgs/logo-svg'

var example = css``

export default function Index() {
  var { state } = React.useContext(VariableContext)
  var ref = React.useRef(null)

  var Column1Container = styled.div`
    height: 100%;
    width: 50%;
    background-color: #343a40;
    color: #fff;
    display: table-cell;
    vertical-align: top;

    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
  `

  var Column1 = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `

  var Column2Container = styled.div`
    height: 100%;
    width: 50%;
    background-color: ${state.bgColor};
    color: ${getFontColor(state.bgColor)};
    display: table-cell;
    vertical-align: top;

    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
  `

  var Column2 = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-grow: 1;
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

  var ColumnContainer = styled.div`
    width: 100%;
    display: table-row;

    @media only screen and (max-width: 1000px) {
      display: flex;
      flex-direction: column;
    }
  `

  var ContentContainer = styled.div`
    margin: 6rem;

    @media only screen and (max-width: 1000px) {
      margin: 3rem;
    }
  `

  var Heading2 = styled.div`
    font-size: 2rem;
    font-weight: bold;
  `

  var Text = styled.div`
    font-size: ${state.fontSize}rem;
    margin-top: 1rem;

    a {
      color: #77b1fc;
    }

    @media only screen and (max-width: 1000px) {
      font-size: 1rem;
    }
  `

  var Github = styled.div`
    margin-top: 7rem;
  `

  console.log('logo: ', logo)
  console.log('LogoSVG: ', LogoSVG())
  return (
    <Layout title="WTFocus">
      <ColumnContainer>
        <Column1Container>
          <LogoSVG />
          <Column1>
            <MobileLogo src={logoWhite} />
            <Variables />
          </Column1>
        </Column1Container>
        <Column2Container>
          <Column2 css={example} ref={ref}>
            <Examples portalRef={ref} />
          </Column2>
        </Column2Container>
      </ColumnContainer>
      <div
        css={css`
          width: 100%;
          background-color: ${state.focusColor};
          color: ${getFontColor(state.focusColor)};
        `}
      >
        <ContentContainer>
          <Heading2>Understanding Focus Appearance</Heading2>
          <Text>
            Many people can't or don't use a mouse and instead navigate with a
            keyboard, keyboard emulator, or other input device. Keyboard
            accessibility is foundational to digital accessibility.
          </Text>
          <Text>
            When designing interfaces, consider how you may help alleviate
            fatigue in users with motor disabilities relying on good keyboard
            accessibility by providing a sufficiently-visible indicator to show
            them which element is currently receiving focus.
          </Text>
        </ContentContainer>
      </div>
      <div
        css={css`
          width: 100%;
          background-color: '#343a40';
          color: ${getFontColor('#343a40')};
        `}
      >
        <ContentContainer>
          <Heading2>About wtfoc.us</Heading2>
          <Text>
            This project was created to support a white paper submission to ICT
            Accessibility Testing Symposium by Claudio Luis Vera and Marcelo
            Paiva
          </Text>
          <Text>
            Concept by <a href="https://github.com/modulist">@modulist</a>,
            design by <a href="mpaiva">@mpaiva</a>, code by{' '}
            <a href="https://github.com/MarcelloPaiva">@MarcelloPaiva</a>
          </Text>
          <Text>Additional contributions by the GitHub community.</Text>
          <Github>
            <Text>
              Follow development, submit issues and patches on our{' '}
              <a href="https://github.com/cross-team/WTFocus">
                Github repository
              </a>
              .
            </Text>
          </Github>
        </ContentContainer>
      </div>
    </Layout>
  )
}
