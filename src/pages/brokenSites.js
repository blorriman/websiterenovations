/* eslint-disable */
import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  Box,
  Container,
  Divider,
  Grid,
  Grow,
  makeStyles,
  Typography,
} from "@material-ui/core"
import { ThemeContext } from "../components/layouts/layout"

import SEO from "../components/seo"
import NotFoundSvg from "../components/svg/notFoundSvg"
import DataTrendsSvg from "../components/svg/dataTrendsSvg"

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

const BrokenSites = () => {
  const themeInfo = useContext(ThemeContext)
  const theme = themeInfo.globalTheme
  const classes = useStyles()
  return (
    <>
      <SEO title="OldSites" />
      <Grow in={true} timeout={800}>
        <Container component="main" className={classes.main} maxWidth="md">
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={8} sm={4}>
              <NotFoundSvg theme={theme} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" align="center">
                A broken site is BAD ... really BAD.
              </Typography>
              <Typography variant="body1">
                <ol>
                  <li>It’s a source of frustration for the user.</li>
                  <li>
                    It shows that you don’t do regular housekeeping (care about
                    your site).
                  </li>
                  <li>It can harm your credibility.</li>
                  <li>It can hurt your SEO and page rankings.</li>
                  <li>... etc.</li>
                </ol>
              </Typography>
            </Grid>
          </Grid>

          <Divider className={classes.divider} />

          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={8} sm={6}>
              <DataTrendsSvg theme={theme} />
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={12} sm={10}>
              <Typography variant="h6" align="center">
                Search Engine Optimization (SEO Friendly)
              </Typography>
              <Typography variant="body1" gutterBottom>
                <p>
                  Full on SEO optimization can be very expensive. Expect to pay
                  north of $1,000/month ... and that still can't guarantee that
                  you will be on top ... or even on the first page.
                </p>
              </Typography>
              <Typography variant="h6" align="center">
                but ...
              </Typography>
              <Typography variant="body1" gutterBottom>
                <p>
                  A clean, well organized (and mobile friendly) site along with
                  meta page descriptions utilizing keywords in your content will
                  go a long way ... without blowing your budget :)
                </p>
              </Typography>
              <Typography variant="h6" align="center">
                ... and I can help you with that.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  )
}

export default BrokenSites
