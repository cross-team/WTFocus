import React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import SEO from 'components/SEO'

var Main = styled.main`
  height: 100vh;
  width: 100%;
  overflow: auto;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

export default function Layout({ children, title }) {
  if (process.env.NODE_ENV !== 'production') {
    import('react-axe').then(axe => {
      axe.default(React, ReactDOM, 1000)
    })
  }

  return (
    <>
      <SEO title={title} />
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
