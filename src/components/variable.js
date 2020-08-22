import React from 'react'
import styled from '@emotion/styled'
import VariableContext from 'providers/variable-context'

var DropDown = styled.select`
  width: 50%;
`

var Input = styled.input`
  width: 50%;
`

var Label = styled.label``

var Option = styled.option``

var VariableContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`

var HelperText = styled.p`
  font-size: 0.75rem;
`

export default function Variable({
  label,
  name,
  options,
  input = false,
  type = '',
  key,
}) {
  var variableContext = React.useContext(VariableContext)

  var handleChange = event => {
    variableContext.setVariable(name, event.target.value)
  }

  if (input) {
    return (
      <VariableContainer>
        <Label for={name}>{label}:</Label>
        <Input
          name={name}
          id={name}
          key={key}
          onChange={handleChange}
          value={variableContext.state[name]}
          type={type}
          min={name === 'thickness' ? '1' : 'any'}
          max={name === 'thickness' ? '10' : 'any'}
        />
      </VariableContainer>
    )
  }

  return (
    <>
      <VariableContainer>
        <Label for={name}>{label}:</Label>
        <DropDown
          name={name}
          id={name}
          key={key}
          onChange={handleChange}
          value={variableContext.state[name]}
          aria-describedBy={name === 'motion' ? 'reducedMotion' : ''}
        >
          {options.map(option => (
            <Option value={option.value} key={option.label}>
              {option.label}
            </Option>
          ))}
        </DropDown>
      </VariableContainer>
      {name === 'motion' && (
        <HelperText id="reducedMotion">
          If you have Prefers Reduced Motion enabled on your OS, all animations
          will be disabled. To learn more about Prefers Reduced Motion, check
          out{' '}
          <a
            href="https://css-tricks.com/introduction-reduced-motion-media-query/"
            aria-lable="An article titled, 'An Introduction to the Reduced Motion Media Query' by Eric Bailey on css-tricks.com"
          >
            this article
          </a>{' '}
          by Eric Bailey
        </HelperText>
      )}
    </>
  )
}
