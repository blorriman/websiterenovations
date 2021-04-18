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
    padding: theme.spacing(2),
  },
  navItem: {
    color: "white",
    marginRight: "1.3rem",
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
          <Grid item xs={12} align="center">
            <div className={classes.root}>
              {" "}
              <nav>
                <Grid item xs={12} align="center">
                  <ul className={classes.navList}>
                    <li>
                      <Link
                        className={classes.navItem}
                        activeClassName={classes.activeNavItem}
                        to="/oldSites"
                      >
                        Old Sites
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={classes.navItem}
                        activeClassName={classes.activeNavItem}
                        to="/brokenSites"
                      >
                        Broken Sites
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={classes.navItem}
                        activeClassName={classes.activeNavItem}
                        to="/boringSites"
                      >
                        Boring Sites
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={classes.navItem}
                        activeClassName={classes.activeNavItem}
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </Grid>
              </nav>
              {/* <Link to="/NavButtons">
                <Button
                  color="primary"
                  size="small"
                  variant="outlined"
                  className={classes.button}
                >
                  NavButtons
                </Button>
              </Link>

              <Link to="/NavButtons">
                <Button
                  color="primary"
                  size="small"
                  variant="outlined"
                  className={classes.button}
                >
                  Speaking
                </Button>
              </Link>

              <Link to="/oldSites">
                <Button
                  color="primary"
                  size="small"
                  variant="outlined"
                  className={classes.button}
                >
                  Media
                </Button>
              </Link>

              <Link to="/oldSites">
                <Button
                  color="primary"
                  size="small"
                  variant="outlined"
                  className={classes.button}
                >
                  Thoughts
                </Button>
              </Link>
              <Link to="/oldSites">
                <Button
                  color="primary"
                  size="small"
                  variant="outlined"
                  className={classes.button}
                >
                  Working With Mackenzie
                </Button>
              </Link> */}
            </div>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default NavButtons
