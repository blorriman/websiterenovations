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
}))

const OldSites = () => {
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
              <OldSvg theme={theme} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="body1">
                <p>
                  Websites get out of date and stale quickly. You probably had
                  your website done a few years ago and forgot about it.
                </p>
                <p>
                  Your website is your brand … your image. If you want to be
                  ‘leading edge’ and current … your website has to be as well.
                </p>
              </Typography>
              <Typography variant="h6" align="center">
                At the very least - your site should be mobile-friendly!
              </Typography>
            </Grid>
          </Grid>

          <Divider className={classes.divider} />

          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={8} sm={6}>
              <Mobile2Svg theme={theme} />
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={12} sm={10}>
              <Typography variant="body1">
                <p>
                  In 2016, mobile users surpassed desktop in Internet traffic.
                  Today, just over 51% of all Internet users browse websites
                  from a smartphone. This means that more than half of those
                  people visiting your site are doing so from mobile technology.
                </p>
                <p>
                  Why is this important? Because having a basic site simply does
                  not look well when viewed on a small screen. It’s more
                  difficult to use and requires visitors to zoom into content in
                  order to read it.
                </p>
              </Typography>
              <Typography variant="h6" align="center">
                The experience results in a poor opinion from the visitor, who
                may not come back to your site later.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  )
}

export default OldSites
