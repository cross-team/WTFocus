import React from 'react'
import styled from '@emotion/styled'
import VariableContext from 'providers/variable-context'

var Label = styled.label``

var Option = styled.option``

var VariableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
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
  var [value, setValue] = React.useState(variableContext.state[name])

  var DropDown = styled.select`
    height: 36px;
    width: 100%;
    background-color: #343a40;
    color: white;
    border: 2px solid white;
    border-radius: 4px;
    margin-top: 0.5rem;
    font-size: ${variableContext.state.fontSize}rem;
  `

  var Input = styled.input`
    height: 36px;
    width: 100%;
    background-color: #343a40;
    color: white;
    border: 2px solid white;
    border-radius: 4px;
    margin-top: 0.5rem;
    font-size: ${variableContext.state.fontSize}rem;
    padding-top: 0;
    padding-bottom: 0;
  `

  var handleChange = event => {
    setValue(event.target.value)
  }

  if (input) {
    return (
      <VariableContainer>
        <Label for={name}>{label}:</Label>
        <Input
          name={name}
          id={name}
          key={key}
          type={type}
          min={type === 'number' ? '1' : 'any'}
          max={type === 'number' ? '10' : 'any'}
          value={value}
          onChange={handleChange}
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
          value={value}
          onChange={handleChange}
        >
          {options.map(option => (
            <Option value={option.value} key={option.label}>
              {option.label}
            </Option>
          ))}
        </DropDown>
      </VariableContainer>
      {/* {name === 'motion' && (
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
      )} */}
    </>
  )
}
