import React from 'react'
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
      margin: '0.5rem 0',
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
    },
  })(TextField)

  return (
    <form className={classes.root}>
      <CustomTextField
        className={classes.input}
        variant="outlined"
        label="Email"
      />
      <CustomTextField
        className={classes.input}
        variant="outlined"
        label="Password"
      />
      <FormControlLabel
        className={classes.label}
        control={<Checkbox color="primary" />}
        label="Remember Me"
      />
      <Button className={classes.input} variant="contained">
        Submit
      </Button>
    </form>
  )
}
