import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Layout from 'components/layout'
import Examples from 'components/examples'
import Variables from 'components/variables'
import VariableContext from 'providers/variable-context'
import { getFontColor, getURLData } from 'utils/functions'
import LogoWhiteSVG from 'assets/svgs/logo-white-svg'
import LogoSVG from 'assets/svgs/logo-svg'

import 'bootstrap/dist/css/bootstrap.min.css'

var example = css``

export default function Index(props) {
  var { state, setVariable } = React.useContext(VariableContext)
  var ref = React.useRef(null)

  React.useEffect(() => {
    console.log(props.location.search)
    let urlData = getURLData(props.location)
    console.log(urlData)

    setVariable('bgColor', '#' + urlData.bgColor)
    setVariable('inputBg', '#' + urlData.inputBg)
    setVariable('focusColor', '#' + urlData.focusColor)
    setVariable('width', urlData.width)
    setVariable('offset', urlData.offset)
    setVariable('outline', urlData.outline)
    if (urlData.reducedMotion === 'false') {
      setVariable('reducedMotion', false)
      setVariable('motion', urlData.motion)
      setVariable('duration', urlData.duration)
      setVariable('loop', urlData.loop)
    } else {
      setVariable('reducedMotion', true)
    }
  }, [])

  var Column1Container = styled.div`
    width: 50vw;
    background-color: #343a40;
    color: #fff;
    display: table-cell;
    vertical-align: top;

    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
  `

  var Column1 = styled.div`
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `

  var Column2Container = styled.div`
    height: 100%;
    width: 50vw;
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
    margin-top: 266px;

    input,
    select,
    button {
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

  var Heading2 = styled.h2`
    font-size: 2rem;
    font-weight: bold;
  `

  var Text = styled.p`
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

  return (
    <Layout title="WTFocus">
      <ColumnContainer>
        <Column1Container>
          <LogoSVG />
          <Column1>
            <LogoWhiteSVG />
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
          background-color: #fff;
          color: #000;
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
            Accessibility Testing Symposium by Claudio Luis Vera, Marcelo Paiva,
            and Marcello Paiva
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
