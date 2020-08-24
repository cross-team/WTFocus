import React from 'react'
import { css } from '@emotion/core'
import { Form, Button, FormGroup, Label, Input } from 'reactstrap'
import VariableContext from 'providers/variable-context'
import { getFontColor } from 'utils/functions'

export default function BootstrapExample() {
  var { state } = React.useContext(VariableContext)

  return (
    <span>
      <Form>
        <FormGroup>
          <Label for="emailBoot">Email</Label>
          <Input
            type="email"
            name="email"
            id="emailBoot"
            css={css`
              &:focus {
                box-shadow: 0 0 0 ${state.width}px ${state.focusColor} !important;
                border: none !important;
              }
            `}
          />
        </FormGroup>
        <FormGroup>
          <Label for="passwordBoot">Password</Label>
          <Input
            type="password"
            name="password"
            id="passwordBoot"
            css={css`
              &:focus {
                box-shadow: 0 0 0 ${state.width}px ${state.focusColor} !important;
                border: none !important;
              }
            `}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Remember Me
          </Label>
        </FormGroup>
        <Button
          css={css`
            margin-top: 1rem;
            &:focus {
              box-shadow: 0 0 0 ${state.width}px ${state.focusColor} !important;
              border: none !important;
              background-color: ${state.inputBg};
              color: ${getFontColor(state.inputBg)};
            }
          `}
        >
          Submit
        </Button>
      </Form>
    </span>
  )
}
