import React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

var theme = createMuiTheme()

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
