import React, { useState, createContext } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { Link, StaticQuery, graphql } from "gatsby"

import {
  AppBar,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Fade,
  Grow,
  Hidden,
  IconButton,
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
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"

// THEME
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import { myTheme } from "../utils/myThemes"

import Header from "./header"
import Footer from "./footer"
import ContactForm from "../contactForm"

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
    minHeight: "calc(100vh - 67px) ",
    background: `linear-gradient(to bottom, ${grey[100]} 0%, ${
      yellow[200]
    } 100%)`,
    paddingBottom: theme.spacing(15),
  },
  toolbar: theme.mixins.toolbar,
  appBar: {
    boxShadow: theme.shadows[1],
  },
  content: {
    flexGrow: 1,
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(0.5),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: grey[200],
  },
  // navItem: {
  //   // color: grey[700],
  //   // textDecoration: "none",
  //   "&:hover": {
  //     backgroundColor: grey[300],
  //     // textDecoration: "underline",
  //   },
  // },
}))

export const ThemeContext = createContext()

const Layout = ({ children, location }) => {
  const classes = useStyles()
  const theme = myTheme
  const lang = "en"

  const [open, setOpen] = useState(false)

  function handleDrawerOpen() {
    setOpen(true)
  }

  function handleDrawerClose() {
    setOpen(false)
  }

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
            <CssBaseline />
            {location && location.pathname !== "/" && (
              <AppBar position="fixed" className={classes.appBar}>
                <Header
                  siteTitle={data.site.siteMetadata.title}
                  location={location}
                  theme={theme}
                  handleDrawerOpen={handleDrawerOpen}
                  handleDrawerClose={handleDrawerClose}
                />
              </AppBar>
            )}

            <div className={classes.root}>
              <Grow in={true} timeout={800}>
                <main className={classes.content}>
                  <Drawer
                    variant="temporary"
                    open={open}
                    onClose={handleDrawerOpen}
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                  >
                    <div className={classes.drawerHeader}>
                      <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                      </IconButton>
                    </div>
                    <Divider />
                    <List component="nav">
                      <Link to="/oldSites">
                        <ListItem button divider onClick={handleDrawerClose}>
                          <ListItemText>Old Sites</ListItemText>
                        </ListItem>
                      </Link>

                      <Link to="/brokenSites">
                        <ListItem button divider onClick={handleDrawerClose}>
                          <ListItemText>Broken Sites</ListItemText>
                        </ListItem>
                      </Link>

                      <Link to="/boringSites">
                        <ListItem button divider onClick={handleDrawerClose}>
                          <ListItemText>Boring Sites</ListItemText>
                        </ListItem>
                      </Link>

                      <Link to="/about">
                        <ListItem button divider onClick={handleDrawerClose}>
                          <ListItemText>About</ListItemText>
                        </ListItem>
                      </Link>
                    </List>
                  </Drawer>
                  <div className={classes.toolbar} />
                  {children}

                  <Container
                    component="main"
                    className={classes.main}
                    maxWidth="md"
                  >
                    <Divider
                      className={classes.divider}
                      style={{ backgroundColor: theme.palette.primary.main }}
                    />

                    <Typography variant="h5" align="center" gutterBottom>
                      Contact Me
                    </Typography>
                    <ContactForm />
                  </Container>
                </main>
              </Grow>
            </div>
            <Footer />
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
