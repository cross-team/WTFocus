import React from 'react'
import { css } from '@emotion/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import VariableContext from 'providers/variable-context'
import { getFontColor } from 'utils/functions'

export default function MaterialExample() {
  var { state } = React.useContext(VariableContext)
  var useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },

    input: {
      margin: '1rem 0',
    },
    label: {
      color: getFontColor(state.bgColor.hex),
    },
  })
  var classes = useStyles()

  var CustomTextField = withStyles({
    root: {
      '& .MuiOutlinedInput-root:focus-within': {
        border: `${state.thickness}px ${state.outline} ${state.focusColor.hex}`,
      },
      '& .MuiOutlinedInput-input': {
        borderRadius: '4px',
      },
      '& .MuiInputLabel-root': {
        color: getFontColor(state.inputBg.hex),
      },
      '& .MuiInputLabel-shrink': {
        color: state.focusColor.hex,
      },
    },
  })(TextField)

  var CustomCheckbox = withStyles({
    root: {
      '& .MuiIconButton-label:focus-within': {
        border: `${state.thickness}px ${state.outline} ${state.focusColor.hex}`,
      },
    },
  })(Checkbox)

  return (
    <form className={classes.root}>
      <CustomTextField
        className={classes.input}
        variant="outlined"
        label="Email"
        css={css`
          &:focus-within {
            label {
              top: ${-5 - state.thickness}px;
            }
          }
        `}
      />
      <CustomTextField
        className={classes.input}
        variant="outlined"
        label="Password"
        css={css`
          &:focus-within {
            label {
              top: ${-5 - state.thickness}px;
            }
          }
        `}
      />
      <FormControlLabel
        className={classes.label}
        control={<CustomCheckbox disableRipple color="primary" />}
        label="Remember Me"
      />
      <Button className={classes.input} disableRipple variant="contained">
        Submit
      </Button>
    </form>
  )
}
