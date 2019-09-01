import React, { useState } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { Link, graphql, useStaticQuery } from "gatsby"
import {
  Drawer,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core/"
import Icon from "@mdi/react"
import { mdiMenu } from "@mdi/js"
import "./global.css"

const useStyles = makeStyles(theme => ({
  header: {
    paddingBottom: theme.spacing(0.25),
    margin: 0,
    // backgroundColor: theme.palette.primary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  title: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: theme.palette.secondary.main,
  },
  navList: {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    marginLeft: theme.spacing(2),
    paddingLeft: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navItem: {
    color: theme.palette.secondary.dark,
    fontSize: "0.9rem",
    marginRight: "1.3rem",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  activeNavItem: {
    display: "none",
  },
}))

const Header = props => {
  const { location, theme } = props
  const classes = useStyles()
  const { handleDrawerOpen, handleDrawerClose } = props
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={classes.header}>
      <Toolbar>
        <IconButton
          color="secondary"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerOpen}
          className={classes.menuButton}
        >
          <Icon
            path={mdiMenu}
            title="menu"
            size={1}
            color={theme.palette.secondary.main}
          />
        </IconButton>
        <Typography component="h1" color="secondary" variant="h5" noWrap>
          <Link className={clsx(classes.title, "stencil")} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </Typography>

        <nav className={classes.paragraph}>
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
        </nav>
      </Toolbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
