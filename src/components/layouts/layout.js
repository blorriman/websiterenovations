import React, { useState, createContext } from "react"
import { setGlobal, useGlobal } from "reactn"
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

// THEME
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import { myTheme, greenTheme, amberTheme, redTheme } from "../utils/myThemes"

import Header from "./header"
import Footer from "./footer"
import DrawerCode from "./drawer"

import "./global.css"

const drawerWidth = 240

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
    // minHeight: "100vh",
    // minHeight: `calc(100vh - ${theme.mixins.toolbar})`,
    minHeight: "calc(100vh - 67px) ",
    background: theme.palette.background.default,
    paddingBottom: theme.spacing(15),
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      marginLeft: `${drawerWidth}px`,
    },
  },
}))

export const ThemeContext = createContext()

const Layout = ({ children, location }) => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [value, setValue] = useState("en")
  const [globalTheme, setGlobalTheme] = useState("myTheme")

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

  // theme changer
  function handleThemeChange(event) {
    setGlobalTheme(event.target.value)
  }
  let theme
  switch (globalTheme) {
    case "greenTheme":
      theme = greenTheme
      break
    case "amberTheme":
      theme = amberTheme
      break
    case "redTheme":
      theme = redTheme
      break

    default:
      theme = myTheme
      break
  }

  function handleThemeChangeMobile(event) {
    handleThemeChange(event)
    handleDrawerToggle()
  }

  // language changer
  function handleChange(event) {
    setValue(event.target.value)
  }
  // for mobile
  function handleChangeMobile(event) {
    setValue(event.target.value)
    handleDrawerToggle()
  }
  const lang = value

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
              <AppBar position="fixed" className={classes.appBar}>
                <Header
                  siteTitle={data.site.siteMetadata.title}
                  handleDrawerToggle={handleDrawerToggle}
                />
              </AppBar>

              <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                  <Drawer
                    variant="temporary"
                    anchor={theme.direction === "rtl" ? "right" : "left"}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                  >
                    <DrawerCode
                      lang={lang}
                      handleChange={handleChangeMobile}
                      globalTheme={globalTheme}
                      handleThemeChange={handleThemeChangeMobile}
                      handleDrawerToggle={handleDrawerToggle}
                    />
                  </Drawer>
                </Hidden>

                <Hidden xsDown implementation="css">
                  <Drawer
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                  >
                    <DrawerCode
                      handleChange={handleChange}
                      value={value}
                      globalTheme={globalTheme}
                      handleThemeChange={handleThemeChange}
                    />
                  </Drawer>
                </Hidden>
              </nav>

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
