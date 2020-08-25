import React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { Helmet } from 'react-helmet'
import VariableContext from 'providers/variable-context'

export default function Layout({ children, title }) {
  var { state } = React.useContext(VariableContext)
  if (process.env.NODE_ENV !== 'production') {
    import('react-axe').then(axe => {
      axe.default(React, ReactDOM, 1000)
    })
  }

  var [fontFiles, setFontFiles] = React.useState(``)

  // React.useEffect(() => {
  //   fetch(
  //     'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCw_oxERFZFVJ45N0HglwdJR6h12F4471M'
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.items)
  //       setFontFiles(
  //         data.items.reduce(
  //           (accumulator, font) =>
  //             accumulator +
  //             `
  //               @font-face {
  //                 font-family: ${font.family};
  //                 src: url('${font.files.regular}');
  //               }
  //             `,
  //           ``
  //         )
  //       )
  //     })
  // }, [])

  var Main = styled.main`
    ${fontFiles}
    background-color: #343a40;
    min-height: 100vh;
    width: 100%;
    overflow-y: auto;
    display: flex;
    align-items: flex-start;
    font-family: 'Roboto', sans-serif;
    font-weight: ${state.fontWeight};

    .hidden {
      display: none;
    }

    @media only screen and (max-width: 1000px) {
      flex-direction: column;
    }
  `

  return (
    <>
      <Helmet
        title="WTFocus"
        meta={[
          {
            name: 'description',
            content: 'An accessibility focus outline demo',
          },
          {
            property: `og:title`,
            content: 'WTFocus',
          },
          {
            property: `og:description`,
            content: 'An accessibility focus outline demo',
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:title`,
            content: `WTFocus`,
          },
          {
            name: `twitter:description`,
            content: 'An accessibility focus outline demo',
          },
        ]}
      >
        <html lang="en" />
        <meta charSet="utf-8" />
      </Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Main>{children}</Main>
    </>
  )
}
