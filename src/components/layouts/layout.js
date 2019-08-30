import React, { useState, createContext } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { StaticQuery, graphql } from "gatsby"

import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Fade,
  Grow,
  Hidden,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Slide,
  Typography,
  useTheme,
  Zoom,
} from "@material-ui/core/"
import { amber, grey, yellow } from "@material-ui/core/colors"

// THEME
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import { myTheme } from "../utils/myThemes"

import Header from "./header"
import Footer from "./footer"

import "./global.css"

const useStyles = makeStyles(theme => ({
  "@global": {
    html: {
      [theme.breakpoints.up("xs")]: {
        fontSize: 14,
      },
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(100vh - 67px) ",
    // background: amber[100],
    // background: `linear-gradient(0deg, ${amber[100]} 0%, $amber[200] 35%, ${
    //   amber[300]
    // } 100%)`,
    background: `linear-gradient(to bottom, ${grey[100]} 0%, ${
      yellow[200]
    } 100%)`,
    // background: "linear-gradient(to bottom, red 0%, green 100%)",
    paddingBottom: theme.spacing(15),
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
}))

export const ThemeContext = createContext()

const Layout = ({ children, location }) => {
  const classes = useStyles()
  const theme = myTheme
  const lang = "en"

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeContext.Provider
          value={{
            lang: lang,
            globalTheme: theme,
          }}
        >
          <MuiThemeProvider theme={theme}>
            <div>
              <CssBaseline />
              {location.pathname !== "/" && (
                <AppBar position="fixed" className={classes.appBar}>
                  <Header siteTitle={data.site.siteMetadata.title} />
                </AppBar>
              )}

              <div className={classes.root}>
                <Grow in={true} timeout={800}>
                  <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {children}
                  </main>
                </Grow>
              </div>
              <Footer />
            </div>
          </MuiThemeProvider>
        </ThemeContext.Provider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
