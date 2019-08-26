import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import { IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core/"
import Icon from "@mdi/react"
import { mdiMenu } from "@mdi/js"
import "./global.css"

const useStyles = makeStyles(theme => ({
  header: {
    paddingTop: theme.spacing(0.025),
    paddingBottom: theme.spacing(0.25),
    margin: 0,
    backgroundColor: theme.palette.primary.main,
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
    color: "white",
  },
}))

const Header = props => {
  const classes = useStyles()
  const { handleDrawerToggle } = props
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
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <Icon path={mdiMenu} title="menu" size={1} color="white" />
        </IconButton>
        <Typography component="h1" variant="h5" noWrap>
          <Link className={classes.title} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </Typography>
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
