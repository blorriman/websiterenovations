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
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="language"
          name="language"
          className={classes.group}
          value={props.globalTheme}
          onChange={props.handleThemeChange}
        >
          <FormControlLabel
            value="myTheme"
            control={<Radio />}
            label="Purple"
          />
          <FormControlLabel
            value="greenTheme"
            control={<Radio />}
            label="Green"
          />
          <FormControlLabel
            value="amberTheme"
            control={<Radio />}
            label="Amber"
          />
          <FormControlLabel value="redTheme" control={<Radio />} label="Red" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default ThemeForm
