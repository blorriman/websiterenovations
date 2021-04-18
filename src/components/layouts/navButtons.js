/* eslint-disable */
import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  Button,
  Container,
  Grid,
  Grow,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { ThemeContext } from "./layout"

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(4),
  },
  root: {
    backgroundColor: theme.palette.secondary.main,
    // padding: theme.spacing(1),
  },
  button: {
    color: "white",
    fontWeight: 400,
    // fontSize: ".95rem",
    margin: theme.spacing(1),
    border: "solid 1px white",
    textTransform: "capitalize",
  },
  navList: {
    display: "flex",
    justifyItems: "center",
    listStyleType: "none",
    paddingLeft: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    // padding: theme.spacing(2),
  },
  navItem: {
    color: "white",
    margin: "1.3rem",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  activeNavItem: {
    display: "none",
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
}))

const NavButtons = () => {
  const classes = useStyles()
  const themeInfo = useContext(ThemeContext)
  const theme = themeInfo.globalTheme
  return (
    <Grow in={true} timeout={800}>
      <Container component="main" className={classes.main} maxWidth="md">
        <Grid container justify="center" alignItems="center" spacing={4}>
          <div className={classes.root}>
            <Grid item xs={12} align="center">
              <nav>
                <ul className={classes.navList}>
                  <li>
                    <Link
                      className={classes.navItem}
                      activeClassName={classes.activeNavItem}
                      to="/books"
                    >
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.navItem}
                      activeClassName={classes.activeNavItem}
                      to="/speaking"
                    >
                      Speaking
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.navItem}
                      activeClassName={classes.activeNavItem}
                      to="/media"
                    >
                      Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.navItem}
                      activeClassName={classes.activeNavItem}
                      to="/thoughts"
                    >
                      Thoughts
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.navItem}
                      activeClassName={classes.activeNavItem}
                      to="/working"
                    >
                      Working With Mackenzie
                    </Link>
                  </li>
                </ul>
              </nav>
            </Grid>
          </div>
        </Grid>
      </Container>
    </Grow>
  )
}

export default NavButtons
