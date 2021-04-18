/* eslint-disable */
import React, { useContext } from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import { Link, StaticQuery, graphql } from "gatsby"
import {
  Button,
  Container,
  Divider,
  Grid,
  Grow,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { ThemeContext } from "../components/layouts/layout"

import MackLanding from "../components/imagePages/mackLanding"
import MackWork from "../components/imagePages/mackWork"
import SEO from "../components/seo"
import OldSvg from "../components/svg/oldSvg"
import Mobile2Svg from "../components/svg/mobile2Svg"

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
  headingTitle: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    // color: theme.palette.primary.dark,
    padding: theme.spacing(1),
  },
  // root: {
  //   backgroundColor: theme.palette.secondary.main,
  //   // padding: theme.spacing(1),
  // },
  // button: {
  //   color: "white",
  //   fontWeight: 400,
  //   // fontSize: ".95rem",
  //   margin: theme.spacing(1),
  //   border: "solid 1px white",
  //   textTransform: "capitalize",
  // },
}))

const Landing = () => {
  const themeInfo = useContext(ThemeContext)
  const theme = themeInfo.globalTheme
  const classes = useStyles()
  return (
    <>
      <SEO title="Landing" />
      <Grow in={true} timeout={800}>
        <>
          <Container component="main" className={classes.main} maxWidth="md">
            <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
              <MackLanding />
            </div>
            <Grid container justify="center" alignItems="center" spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h5" className={classes.headingTitle}>
                  <b>Mackenzie Kyle</b>
                </Typography>
                <Typography variant="body1">
                  … a man who has been attempting to puzzle out the secrets of
                  human existence for his entire life. Some progress may have
                  been made, and some of it has been written down. Other bits
                  come out in front of crowds, sometimes at random times and
                  sometimes in front of groups that intended to be there to hear
                  about it.
                  <br />
                  <br />
                  His first published book, Making It Happen, detailed the
                  trials and tribulations of practical project management. The
                  book was written as a novel, and despite (or perhaps because
                  of) the subject matter, it went on to sell more than 45,000
                  copies in Canada, the US, and around the world. A training
                  program based on these principles now has more than 15,000
                  graduates worldwide.
                  <br />
                  <br />
                  His second book, The Performance Principle continues the story
                  and provides perspective on what motivates people and how to
                  work with that.
                  <br />
                  <br />
                  Mackenzie speaks (learn more) on a variety of topics related
                  to employee motivation, team work, and project management.
                </Typography>
              </Grid>
            </Grid>

            <Divider className={classes.divider} />

            <Grid container justify="center" alignItems="center" spacing={4}>
              <Grid item xs={12} sm={7}>
                <MackWork />
              </Grid>
              <Grid item xs={12} sm={5}>
                <Typography variant="body1">
                  His day job is as British Columbia Managing Partner at MNP, a
                  national Consulting and Accounting firm. Mackenzie has more
                  than 25 years experience in operations improvement and
                  restructuring, and has provided specific assistance in
                  everything from strategic planning to performance management
                  to managing small projects. He has hands-on experience in a
                  wide variety of industries, and his services are frequently of
                  use in situations requiring the application of more than a
                  single specialty.
                  <br />
                  <br />
                  He has worked in a variety of industries including
                  manufacturing, transportation, telecommunications, as well as
                  the public sector and internationally in the United States,
                  Australia, New Zealand and Asia.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </>
      </Grow>
    </>
  )
}

export default Landing
