import React, { useState } from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"
import {
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  Hidden,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Switch,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

import Logo from "./logo"
import { myTheme } from "../utils//myThemes"
import LogoSvg from "../svg/logoSvg"
import LangForm from "../dashboard/langForm"
import ThemeForm from "../dashboard/themeForm"

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
    marginLeft: theme.spacing(3),
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  logoDiv: {
    backgroundColor: grey[300],
    // backgroundColor: theme.palette.primary[100],
  },
  logo: {
    maxWidth: 75,
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 50,
    },
  },
  listItemText: {
    color: grey[900],
  },
  ripple: {
    color: grey[700],
  },
}))

const DrawerCode = props => {
  const classes = useStyles()
  const theme = myTheme

  return (
    <>
      <div className={classes.logoDiv}>
        <div className={classes.logo}>
          <LogoSvg theme={theme} />
        </div>
      </div>
      <Divider />

      <List>
        <Location>
          {({ location }) => {
            if (location.pathname !== "/") {
              return (
                <Link to="/" onClick={props.handleDrawerToggle}>
                  <ListItem button divider className={classes.ripple}>
                    <ListItemText disableTypography>
                      <Typography
                        variant="body1"
                        className={classes.listItemText}
                      >
                        Home
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </Link>
              )
            }
          }}
        </Location>
      </List>

      <LangForm lang={props.lang} handleChange={props.handleChange} />
      <Divider />
      <ThemeForm
        lang={props.lang}
        globalTheme={props.globalTheme}
        handleThemeChange={props.handleThemeChange}
      />
    </>
  )
}

export default DrawerCode
