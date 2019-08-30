import React, { useContext } from "react"
import { Link } from "gatsby"
import Plx from "react-plx"
import clsx from "clsx"
import Icon from "@mdi/react"
import { mdiAccount, mdiArrowRightCircleOutline } from "@mdi/js"

import i18n from "../components/lng/i18"
import {
  Button,
  Container,
  Divider,
  Grid,
  Grow,
  Hidden,
  makeStyles,
  Typography,
  useTheme,
  Zoom,
} from "@material-ui/core"
import { indigo, pink } from "@material-ui/core/colors"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import FixSvg from "../components/svg/fixSvg"
import OldSvg from "../components/svg/oldSvg"
import Mobile2Svg from "../components/svg/mobile2Svg"
import DataTrendsSvg from "../components/svg/dataTrendsSvg"
import NotFoundSvg from "../components/svg/notFoundSvg"
import BoringSvg from "../components/svg/boringSvg"
import UserFriendlySvg from "../components/svg/userFriendlySvg"

import {
  myTheme,
  greenTheme,
  amberTheme,
  redTheme,
} from "../components/utils/myThemes"
import { ThemeContext } from "../components/layouts/layout"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  img: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    width: "80%",
  },
  title: {
    marginTop: theme.spacing(4),
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },
  divider: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
  },
  lessToolbar: {
    marginTop: -56,
  },
  // arrowLeft: {
  //   color: theme.palette.secondary.main,
  //   [theme.breakpoints.down("xs")]: {
  //     transform: "rotate(90deg)",
  //   },
  // },
  button: {
    margin: theme.spacing(1),
    // backgroundColor: pink[500],
  },
}))

const animateScaleOld = [
  {
    start: "self",
    end: "75vh",
    properties: [
      {
        startValue: 0.5,
        endValue: 1,
        property: "scale",
      },
    ],
  },
  {
    start: "self",
    end: "75vh",
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
]

const animateScaleBroken = [
  {
    start: "self",
    end: "175vh",
    properties: [
      {
        startValue: 0.5,
        endValue: 1,
        property: "scale",
      },
    ],
  },
  {
    start: "self",
    end: "175vh",
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
]

const animateScaleBoring = [
  {
    start: "self",
    end: "200vh",
    properties: [
      {
        startValue: 0.5,
        endValue: 1,
        property: "scale",
      },
    ],
  },
  {
    start: "self",
    end: "200vh",
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
]

const Landing = props => {
  const themeInfo = useContext(ThemeContext)
  const theme = themeInfo.globalTheme
  let lng
  if (themeInfo) {
    lng = themeInfo.lang
  }
  const classes = useStyles()
  const primary = theme.palette.primary.main
  const secondary = theme.palette.secondary.main

  const directionArrow = (
    <>
      <Hidden xsDown>
        <Icon
          path={mdiArrowRightCircleOutline}
          title="becomes"
          size={4}
          color={theme.palette.secondary.main}
          className="animate-flicker"
        />
      </Hidden>
      <Hidden smUp>
        <Icon
          path={mdiArrowRightCircleOutline}
          title="becomes"
          size={4}
          color={theme.palette.secondary.main}
          className="animate-flicker"
          rotate={90}
        />
      </Hidden>
    </>
  )

  return (
    <>
      <Container component="main" className={classes.main} maxWidth="md">
        <SEO title="Home" />
        <center className={classes.lessToolbar}>
          <Grow in={true} timeout={1000}>
            <FixSvg theme={theme} />
          </Grow>
        </center>

        <Grow in={true} timeout={3000}>
          <Typography
            variant="h2"
            align="center"
            className={clsx(classes.title, "stencil")}
            gutterBottom
            color="secondary"
          >
            I Fix Websites!
          </Typography>
        </Grow>

        <Divider className={classes.divider} />

        <Plx className="outOfDate" parallaxData={animateScaleOld}>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={8} sm={4}>
              <Typography variant="h5" align="center" gutterBottom>
                Old Sites
              </Typography>
              <center>
                <OldSvg theme={theme} />
              </center>
            </Grid>

            <Grid item align="center" xs={12} sm={2}>
              {directionArrow}
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h5" align="center" gutterBottom>
                Mobile Friendly
              </Typography>
              <Mobile2Svg theme={theme} />
              <center>
                <Link to="/oldSites">
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                  >
                    Learn More ...
                  </Button>
                </Link>
              </center>
            </Grid>
          </Grid>
        </Plx>

        <Divider className={classes.divider} />

        <Plx className="broken" parallaxData={animateScaleBroken}>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={8} sm={4}>
              <div style={{ cursor: "pointer" }}>
                <Typography variant="h5" align="center" gutterBottom>
                  Broken Sites
                </Typography>
                <center>
                  <Grow in={true} timeout={2000}>
                    <NotFoundSvg theme={theme} />
                  </Grow>
                </center>
              </div>
            </Grid>

            <Grid item align="center" xs={12} sm={2}>
              {directionArrow}
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h5" align="center" gutterBottom>
                SEO Friendly
              </Typography>
              <Grow in={true} timeout={2000}>
                <DataTrendsSvg theme={theme} />
              </Grow>

              <center>
                <Link to="/brokenSites">
                  <Button
                    variant="outlined"
                    color="secondary"
                    // fullWidth
                    className={classes.button}
                  >
                    Learn More ...
                  </Button>
                </Link>
              </center>
            </Grid>
          </Grid>
        </Plx>

        <Divider className={classes.divider} />

        <Plx className="boring" parallaxData={animateScaleBoring}>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={8} sm={4}>
              <div style={{ cursor: "pointer" }}>
                <Typography variant="h5" align="center" gutterBottom>
                  Boring Sites
                </Typography>
                <center>
                  <Grow in={true} timeout={2000}>
                    <BoringSvg theme={theme} />
                  </Grow>
                </center>
              </div>
            </Grid>

            <Grid item align="center" xs={12} sm={2}>
              {directionArrow}
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h5" align="center" gutterBottom>
                User Friendly
              </Typography>
              <Grow in={true} timeout={2000}>
                <UserFriendlySvg theme={theme} />
              </Grow>

              <center>
                <Link to="/boringSites">
                  <Button
                    variant="outlined"
                    color="secondary"
                    // fullWidth
                    className={classes.button}
                  >
                    Learn More ...
                  </Button>
                </Link>
              </center>
            </Grid>
          </Grid>
        </Plx>
      </Container>
    </>
  )
}

export default Landing
