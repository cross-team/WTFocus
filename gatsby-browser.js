import React from 'react'
import { VariableController } from './src/providers/variable-context'

export const wrapRootElement = ({ element }) => {
  return <VariableController>{element}</VariableController>
}
