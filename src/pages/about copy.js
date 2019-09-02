/* eslint-disable */
import React, { useState } from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
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

const About = props => {
  const classes = useStyles()
  return (
    <>
      <Grow in={true} timeout={800}>
        <Container component="main" className={classes.main} maxWidth="md">
          <SEO title="About" />
          <Typography component="div">
            <Box fontSize="h4.fontSize" textAlign="center" m={1}>
              Options
            </Box>
          </Typography>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={12} sm={10}>
              <Typography variant="body1" gutterBottom>
                <p>
                  If your website is over 2 years old, most likely it’s far
                  behind in terms of looks and functionality. It probably has
                  outdated code that can slow down its loading speed or the way
                  it responds on different devices{" "}
                  <em>(if it’s mobile friendly at all)</em>. Technology wise,
                  since 2-3 years ago most website and frameworks have
                  significantly improved their platforms and offer better tools
                  for your website.
                </p>
              </Typography>
            </Grid>
          </Grid>

          <Typography component="div">
            <Box fontSize="h4.fontSize" textAlign="center" m={1}>
              About Me
            </Box>
          </Typography>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={8} sm={4}>
              <Img
                style={{ width: "50%", margin: "0 auto" }}
                fluid={props.data.avatar.childImageSharp.fluid}
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="body1" gutterBottom>
                <p>
                  My name is Bob Lorriman, I'm a semi-retired web developer. My
                  last main project has been{" "}
                  <a
                    href="https://lorros.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                  >
                    LORROS.com
                  </a>
                  , an app for small groups that are tasked with making
                  democratic decissions such as boards, committees, etc.
                </p>
                <p className={classes.paragraph}>
                  I have also done numerous web pages along the way, and I love
                  being able to help people see their visions become realities
                  on the web.
                </p>
                <p>
                  Since I'm now 'semi-retired' - I'm no longer looking for
                  'larger' projects, but rather 'smaller' ones and bringing them
                  back to life.
                </p>
                <p>
                  If you like the idea of working with a non-chaotic, organized
                  and results oriented developer ... let's talk!
                </p>
                <Img
                  style={{ width: "20%" }}
                  fluid={props.data.signature.childImageSharp.fluid}
                />
                <p>Bob Lorriman</p>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  )
}

export default About

export const query = graphql`
  query {
    avatar: file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    signature: file(relativePath: { eq: "bob-grey.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
