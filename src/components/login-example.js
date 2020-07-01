import React from 'react'
import styled from '@emotion/styled'

var InputContainer = styled.fieldset`
  margin: 0.5rem;
  border: none;
`

var TextLabel = styled.label`
  margin-right: 1rem;
`

var Checkbox = styled.input`
  margin-right: 1rem;
`

export default function LoginExample() {
  return (
    <form>
      <fieldset>
        <legend>Login</legend>
        <InputContainer>
          <TextLabel for="email">Email:</TextLabel>
          <input type="email" name="email" id="email" />
        </InputContainer>
        <InputContainer>
          <TextLabel for="password">Password:</TextLabel>
          <input type="password" name="password" id="password" />
        </InputContainer>
        <InputContainer>
          <Checkbox type="checkbox" name="rememberMe" id="rememberMe" />
          <label for="rememberMe">Remember me</label>
        </InputContainer>
        <InputContainer>
          <input type="submit" value="Sumbit!" />
        </InputContainer>
      </fieldset>
    </form>
  )
}
