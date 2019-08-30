import React from "react"
import { ThemeProvider } from "@material-ui/styles"

import { myTheme } from "../components/utils/myThemes"

import Landing from "./landing"

const theme = myTheme

const IndexPage = props => {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  )
}

export default IndexPage
