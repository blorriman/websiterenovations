/* eslint-disable */
import React, { useState, useContext } from "react"
import { useGlobal, getGlobal } from "reactn"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  Box,
  Container,
  FormLabel,
  FormControl,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core"

import { myTheme } from "../utils/myThemes"
import { ThemeContext } from "../layouts/layout"

const useStyles = makeStyles(theme => ({
  group: {
    margin: theme.spacing(1, 0),
    display: "inline-block",
  },
  root: {
    marginLeft: theme.spacing(3),
  },
}))

const LangForm = props => {
  const classes = useStyles()
  const themeInfo = useContext(ThemeContext)
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="language"
          name="language"
          className={classes.group}
          value={props.lang}
          onChange={props.handleChange}
        >
          <FormControlLabel value="en" control={<Radio />} label="English" />
          <FormControlLabel value="fr" control={<Radio />} label="French" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(future)"
          />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default LangForm
