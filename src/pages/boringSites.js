/* eslint-disable */
import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  Box,
  Container,
  Divider,
  Grid,
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

const BoringSites = () => {
  const themeInfo = useContext(ThemeContext)
  const theme = themeInfo.globalTheme
  const classes = useStyles()
  return (
    <>
      <SEO title="OldSites" />
      <Container component="main" className={classes.main} maxWidth="md">
        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item xs={8} sm={4}>
            <BoringSvg theme={theme} />
          </Grid>
          <Grid item xs={8} sm={8}>
            <p className={classes.paragraph}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae doloribus delectus eligendi ipsa voluptates impedit
              ipsam enim ut explicabo, recusandae nam iusto atque eum nobis
              fugit dicta commodi, tempora fugiat?
            </p>
            <p className={classes.paragraph}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae doloribus delectus eligendi ipsa voluptates impedit
              ipsam enim ut explicabo, recusandae nam iusto atque eum nobis
              fugit dicta commodi, tempora fugiat?
            </p>
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
            <p className={classes.paragraph}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae doloribus delectus eligendi ipsa voluptates impedit
              ipsam enim ut explicabo, recusandae nam iusto atque eum nobis
              fugit dicta commodi, tempora fugiat?
            </p>
            <p className={classes.paragraph}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae doloribus delectus eligendi ipsa voluptates impedit
              ipsam enim ut explicabo, recusandae nam iusto atque eum nobis
              fugit dicta commodi, tempora fugiat?
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default BoringSites
