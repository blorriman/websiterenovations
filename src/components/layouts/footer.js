import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { Box, makeStyles, Typography } from "@material-ui/core"

import { grey } from "@material-ui/core/colors"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: grey[300],
    padding: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: drawerWidth,
    },
  },
  logo: {
    maxHeight: 30,
    marginBottom: -10,
  },
}))

const Footer = props => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={classes.root}>
      <Typography component="div">
        <Box
          fontWeight="fontWeightLight"
          fontSize={12}
          textAlign="center"
          m={1}
          color={grey[700]}
        >
          created by {data.site.siteMetadata.author} ©{" "}
          {new Date().getFullYear()}
        </Box>
      </Typography>
    </footer>
  )
}

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: ``,
}

export default Footer
