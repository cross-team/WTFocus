import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Layout from 'components/layout'

var Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #000aaa;
`

var example = css`
  background-color: #bbb;
`

export default () => (
  <Layout title="WTFocus">
    <Column />
    <Column css={example} />
  </Layout>
)
