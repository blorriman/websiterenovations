/* eslint-disable */
import React, { useState, useContext } from "react"
import { useGlobal, getGlobal } from "reactn"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  Box,
  Card,
  Container,
  FormLabel,
  FormControl,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core"
import {
  amber,
  lightBlue,
  lightGreen,
  orange,
  purple,
  red,
} from "@material-ui/core/colors"

import { myTheme } from "../utils/myThemes"
import { ThemeContext } from "../layouts/layout"

const useStyles = makeStyles(theme => ({
  group: {
    margin: theme.spacing(1, 0),
    display: "inline-block",
  },
  root: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(2),
  },
  themeButtons: {
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    "&:hover": {
      cursor: "pointer",
      boxShadow: theme.shadows[5],
    },
  },
}))

const ThemeForm = props => {
  const classes = useStyles()
  const themeInfo = useContext(ThemeContext)

  function handleThemeChange(theme) {
    console.log("handleThemeChange ", theme)
  }

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" gutterBottom>
        Themes
      </Typography>
      <Card
        className={classes.themeButtons}
        onClick={() => handleThemeChange("myTheme")}
      >
        <Typography variant="body2">purple/blue</Typography>
        <svg viewBox="0 0 170 25" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="25" fill={purple[500]} />
          <rect x="100" width="50" height="25" fill={lightBlue[500]} />
        </svg>
      </Card>

      <Card
        className={classes.themeButtons}
        onClick={() => handleThemeChange("greenTheme")}
      >
        <Typography variant="body2">green/blue</Typography>
        <svg viewBox="0 0 170 25" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="25" fill={lightGreen[500]} />
          <rect x="100" width="50" height="25" fill={lightBlue[500]} />
        </svg>
      </Card>

      <Card
        className={classes.themeButtons}
        onClick={() => handleThemeChange("amberTheme")}
      >
        <Typography variant="body2">amber/orange</Typography>
        <svg viewBox="0 0 170 25" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="25" fill={amber[500]} />
          <rect x="100" width="50" height="25" fill={orange[500]} />
        </svg>
      </Card>

      <Card
        className={classes.themeButtons}
        onClick={() => handleThemeChange("redTheme")}
      >
        <Typography variant="body2">red/amber</Typography>
        <svg viewBox="0 0 170 25" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="25" fill={red[500]} />
          <rect x="100" width="50" height="25" fill={amber[500]} />
        </svg>
      </Card>
    </div>
  )
}

export default ThemeForm
