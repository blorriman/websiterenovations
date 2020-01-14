import React, { useContext } from "react"
import Plx from "react-plx"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import {
  Box,
  Container,
  Divider,
  Grid,
  Grow,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { ThemeContext } from "../components/layouts/layout"

import SEO from "../components/seo"
import BoringSvg from "../components/svg/boringSvg"
import UserFriendlySvg from "../components/svg/userFriendlySvg"

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(4),
  },
  paragraph: {
    ...theme.typography.body1,
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
  },
}))

const blastOff = [
  {
    start: "98vh",
    // start: "self",
    duration: 400,
    properties: [
      {
        startValue: 0,
        endValue: 500,
        property: "translateX",
      },
      {
        startValue: 0,
        endValue: -800,
        property: "translateY",
      },
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      },
    ],
  },
]

const BoringSites = props => {
  const themeInfo = useContext(ThemeContext)
  const theme = themeInfo.globalTheme
  const classes = useStyles()
  return (
    <>
      <SEO title="Boring Sites" />
      <Grow in={true} timeout={800}>
        <Container component="main" className={classes.main} maxWidth="md">
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={8} sm={4}>
              <BoringSvg theme={theme} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" align="center">
                BWS (Boring Website Syndrome)
              </Typography>
              <Typography variant="body1" gutterBottom>
                <p>
                  There’s a time and place for boring (like attending a physics
                  lecture). But one place where boring doesn’t belong is your
                  website.
                </p>
                <ol>
                  <li>Your home page has no focal point.</li>
                  <li>Text runs on forever.</li>
                  <li>Your site hasn’t been updated in months (or years).</li>
                  <li>There’s no opportunity for interaction.</li>
                  <li>... etc.</li>
                </ol>
              </Typography>
            </Grid>
          </Grid>

          <Divider className={classes.divider} />

          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={8} sm={6}>
              <UserFriendlySvg theme={theme} />
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={12} sm={10}>
              <Typography variant="body1" gutterBottom>
                <p>
                  Today, users are extremely demanding when it comes to website
                  design and functionality ... as they should be. Landing on a
                  so-so website is just plain disappointing.
                </p>
                <p>
                  Visitors are reading less and expecting more photos and other
                  visual components. Use high-quality images that enhance the
                  text, but don’t overcrowd your pages.
                </p>
                <p></p>
              </Typography>
              <Typography variant="h6" align="center" gutterBottom>
                Make your site lighting fast!!!
              </Typography>
              <Typography variant="body1" gutterBottom>
                Slow loading websites just don’t cut it today. If your website
                doesn’t load in 3 seconds or less, you’re going to lose
                visitors. According to a study done by Google, “53% of mobile
                site visits were abandoned if a page took longer than 3 seconds
                to load.”
              </Typography>
              <Hidden xsDown>
                <Plx className="rocket" parallaxData={blastOff}>
                  <Img
                    style={{ width: "50%", margin: "0 auto" }}
                    fluid={props.data.rocketship.childImageSharp.fluid}
                  />
                </Plx>
              </Hidden>
              <Hidden smUp>
                <Img
                  style={{ width: "50%", margin: "0 auto" }}
                  fluid={props.data.rocketship.childImageSharp.fluid}
                />
              </Hidden>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  )
}

export default BoringSites

export const query = graphql`
  query {
    rocketship: file(relativePath: { eq: "rocketship.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
