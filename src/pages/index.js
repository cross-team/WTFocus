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
    width: 50%;
    background-color: #343a40;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
  `

  var Column2 = styled.div`
    height: 100%;
    width: 50%;
    background-color: ${state.bgColor};
    color: ${getFontColor(state.bgColor)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (max-width: 1000px) {
      width: 100%;
    }

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

  var ColumnContainer = styled.div`
    width: 100%;
    display: flex;

    @media only screen and (max-width: 1000px) {
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

    @media only screen and (max-width: 1000px) {
      font-size: 1rem;
    }
  `

  return (
    <Layout title="WTFocus">
      <ColumnContainer>
        <Column1>
          <DesktopLogo src={logo} />
          <MobileLogo src={logoWhite} />
          <Variables />
        </Column1>
        <Column2 css={example} ref={ref}>
          <Examples portalRef={ref} />
        </Column2>
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
            Concept by @modulist, design by @muqueca, code by @marcellopaiva
          </Text>
          <Text>Additional contributions by the GitHub community.</Text>
          <Text>
            Follow development, submit issues and patches on our Github
            repository.
          </Text>
        </ContentContainer>
      </div>
    </Layout>
  )
}
