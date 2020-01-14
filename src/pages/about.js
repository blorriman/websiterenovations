import React, { useState } from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import {
  Box,
  Container,
  Divider,
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
  main: {
    marginTop: theme.spacing(4),
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.dark,
  },
}))

const About = props => {
  const classes = useStyles()
  return (
    <>
      <Grow in={true} timeout={800}>
        <Container component="main" className={classes.main} maxWidth="md">
          <SEO title="About" />
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Typography component="div">
              <Box fontSize="h4.fontSize" textAlign="center" m={1}>
                Options
              </Box>
            </Typography>
          </Grid>

          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={12} sm={10}>
              <Typography component={"span"} gutterBottom>
                <p>
                  If your website is over 2 years old, most likely it’s far
                  behind in terms of looks and functionality. It probably has
                  outdated code that can slow down its loading speed or the way
                  it responds on different devices{" "}
                  <em>(if it’s mobile friendly at all)</em>.
                </p>
              </Typography>
            </Grid>
          </Grid>

          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={8} sm={4}>
              <Img
                style={{ width: "100%" }}
                fluid={props.data.gatsby.childImageSharp.fluid}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" align="center" gutterBottom>
                Static Sites
              </Typography>
              <Typography component={"span"} gutterBottom>
                <p>
                  Let me start by explaining what static sites are. First, the
                  term "static" does not mean that your site has no dynamic
                  capabilities. It simply means that that your site consists of
                  a set of "pre-built" files that are directly served on
                  request.
                </p>
                <Box fontSize="h5.fontSize" textAlign="center" m={1}>
                  <em>
                    The lack of database calls and dynamic content generation
                    makes Static Sites incredibly fast!
                  </em>
                </Box>
                <p>
                  Since content is pre generated, the time it takes to
                  dynamically generate content is taken out of the picture!
                </p>
                <p>
                  I do my development on the{" "}
                  <a
                    href="https://www.gatsbyjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                  >
                    Gatsby
                  </a>{" "}
                  framework based on React. Gatsby sites are 2-3 times faster
                  than similar types of sites.
                </p>
                <p>
                  As a matter of fact ... this is a static site developed with
                  Gatsby!
                </p>
                <p>
                  If you want a FAST site that you don't need to edit very often
                  ... then a static site is for you.
                </p>
                <p>
                  However, if you need (want) to add or edit content and images
                  on your website regularily, static sites are a bit more
                  complicated and may not be the right solution for you. If this
                  is the case, I would recommend that you go with a Wordpress
                  site using the Divi theme framework.
                </p>
              </Typography>
            </Grid>
          </Grid>

          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={8} sm={4}>
              <Img
                style={{ width: "100%" }}
                fluid={props.data.wordpress.childImageSharp.fluid}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" align="center" gutterBottom>
                WordPress
              </Typography>
              <Typography component={"span"} gutterBottom>
                <p>
                  WordPress holds the largest CMS market share by far, and
                  currently accounts for over a quarter of all websites ...
                  possibly, your current website is a WordPress site.
                </p>
                <p>
                  If you need to constantly add or edit content on your site ...
                  or maybe you blog on your site, then Wordpress is probably the
                  best choice for you. It's easy to use, and with the Divi
                  theme, adding and editing content is now easier than ever.
                </p>
              </Typography>
            </Grid>
          </Grid>

          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={8} sm={4}>
              <Img
                style={{ width: "50%", margin: "0 auto" }}
                fluid={props.data.divi.childImageSharp.fluid}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography component={"span"} gutterBottom>
                <p>
                  I use the{" "}
                  <a
                    href="https://www.elegantthemes.com/gallery/divi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                  >
                    Divi
                  </a>{" "}
                  theme exclusively in all my WordPress development. Divi is one
                  of the most popular WordPress themes in the world.
                </p>
                <p className={classes.paragraph}>
                  Divi includes lots of{" "}
                  <a
                    href="https://www.elegantthemes.com/layouts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                  >
                    premade layouts
                  </a>{" "}
                  to help you get started. Layouts include blogs, shops,
                  homepages, landing pages, splash page, about pages,
                  maintenance, coming soon, project, portfolio, contact, case
                  studies, creative agency, product features, and more. Using
                  Divi theme layouts can save a lot of time (money).
                </p>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="subtitle1" align="center" gutterBottom>
                <em>
                  If you're not sure whether a staic site or a WordPress site is
                  best for you, I can go over both options in detail with you
                  and make a recommendation.
                </em>
              </Typography>
            </Grid>
          </Grid>

          <Divider className={classes.divider} />

          <Grid container justify="center" alignItems="center" spacing={4}>
            <Typography component="div">
              <Box fontSize="h4.fontSize" textAlign="center" m={1}>
                About Me
              </Box>
            </Typography>
          </Grid>

          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={8} sm={4}>
              <Img
                style={{ width: "50%", margin: "0 auto" }}
                fluid={props.data.avatar.childImageSharp.fluid}
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography component={"span"} gutterBottom>
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
                <p>
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
              </Typography>
              <Img
                style={{ width: "20%" }}
                fluid={props.data.signature.childImageSharp.fluid}
              />
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
    gatsby: file(relativePath: { eq: "Gatsby.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    divi: file(relativePath: { eq: "Divi.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wordpress: file(relativePath: { eq: "Wordpress.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
