/* eslint-disable */
import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  Box,
  Container,
  Grid,
  Grow,
  makeStyles,
  Typography,
} from "@material-ui/core"

import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  paragraph: {
    ...theme.typography.body1,
  },
}))

const About = () => {
  const classes = useStyles()
  return (
    <>
      <Grow in={true} timeout={800}>
        <Container component="main" className={classes.main} maxWidth="md">
          <SEO title="About" />
          <Typography component="div">
            <Box fontSize="h4.fontSize" textAlign="center" m={1}>
              About Page
            </Box>
          </Typography>
          <p className={classes.paragraph}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae doloribus delectus eligendi ipsa voluptates impedit
            ipsam enim ut explicabo, recusandae nam iusto atque eum nobis fugit
            dicta commodi, tempora fugiat?
          </p>
        </Container>
      </Grow>
    </>
  )
}

export default About
