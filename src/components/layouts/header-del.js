import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { Link, graphql, useStaticQuery } from "gatsby"
import { IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core/"
import { Container, List, ListItem, ListItemText } from "@material-ui/core"
import Icon from "@mdi/react"
import { mdiMenu } from "@mdi/js"
import "./global.css"

const useStyles = makeStyles(theme => ({
  header: {
    paddingBottom: theme.spacing(0.25),
    margin: 0,
    // display: "flex",
    // alignItems: "flex-end",
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
    // textTransform: "uppercase",
    color: "white",
  },
  navList: {
    flexGrow: 1,
    display: "flex",
    alignItems: "flex-end",
    listStyleType: "none",
    margin: 0,
    marginLeft: theme.spacing(2),
    paddingLeft: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navItem: {
    color: "white",
    // marginRight: "1.3rem",
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
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    // textTransform: `uppercase`,
    color: `white`,
  },
}))

const Header = props => {
  const { theme } = props
  const classes = useStyles()
  const { handleDrawerOpen } = props
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
        <Container className={classes.navbarDisplayFlex}>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            className={classes.menuButton}
          >
            <Icon path={mdiMenu} title="menu" size={1} color="white" />
          </IconButton>
          <Typography component="h1" color="secondary" variant="h5" noWrap>
            <Link className={classes.title} to="/">
              {data.site.siteMetadata.title} <br />
              {/* <em style={{ fontSize: ".95rem" }}>making change happen</em> */}
            </Link>
          </Typography>

          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            <ListItem className={classes.linkText}>
              <Link
                className={classes.linkText}
                activeClassName={classes.activeNavItem}
                to="/oldSites"
              >
                Old Sites
              </Link>
            </ListItem>
            <ListItem className={classes.linkText}>
              <Link
                className={classes.navItem}
                activeClassName={classes.activeNavItem}
                to="/brokenSites"
              >
                Broken Sites
              </Link>
            </ListItem>
            <ListItem className={classes.linkText}>
              <Link
                className={classes.navItem}
                activeClassName={classes.activeNavItem}
                to="/boringSites"
              >
                Boring Sites
              </Link>
            </ListItem>
          </List>

          {/* <nav style={{ float: "right" }}>
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
        </nav> */}
        </Container>
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
