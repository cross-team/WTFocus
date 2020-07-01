import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Layout from 'components/layout'
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

var example = css`
  background-color: #bbb;
  justify-content: center;
`

export default () => (
  <Layout title="WTFocus">
    <VariableController>
      <Column>
        <Variables />
      </Column>
      <Column css={example}></Column>
    </VariableController>
  </Layout>
)
