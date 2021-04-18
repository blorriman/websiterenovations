/* eslint-disable */
import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  Box,
  Container,
  Grid,
  Grow,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { ThemeContext } from "../components/layouts/layout"

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(4),
  },
}))

const Books = () => {
  const classes = useStyles()
  const themeInfo = useContext(ThemeContext)
  const theme = themeInfo.globalTheme
  return (
    <Grow in={true} timeout={800}>
      <Container component="main" className={classes.main} maxWidth="md">
        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Books Page
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Books
