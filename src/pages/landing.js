import React, { useContext } from "react"
import i18n from "../components/lng/i18"
import { Container, makeStyles, Typography, useTheme } from "@material-ui/core"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import LandingSvg from "../components/svg/landingSvg"

import {
  myTheme,
  greenTheme,
  amberTheme,
  redTheme,
} from "../components/utils/myThemes"
import { ThemeContext } from "../components/layouts/layout"

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  img: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    width: "80%",
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },
}))

const Landing = props => {
  const themeInfo = useContext(ThemeContext)
  const theme = themeInfo.globalTheme
  let lng
  if (themeInfo) {
    lng = themeInfo.lang
  }
  const classes = useStyles()
  const primary = theme.palette.primary.main
  const secondary = theme.palette.secondary.main

  return (
    <>
      <Container component="main" className={classes.main} maxWidth="md">
        <SEO title="Home" />
        <Typography
          variant="h2"
          align="center"
          className={classes.title}
          gutterBottom
        >
          {i18n.t("landing_page", { lng })}
        </Typography>

        <Typography variant="subtitle1" align="center" gutterBottom>
          {i18n.t("welcome_to_new_site", { lng })}
        </Typography>

        <center>
          <div style={{ padding: theme.spacing(3) }}>
            <LandingSvg theme={theme} />
          </div>
        </center>
      </Container>
    </>
  )
}

export default Landing
