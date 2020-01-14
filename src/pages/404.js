import React from "react"
import { Container, makeStyles, Typography } from "@material-ui/core"
import notFoundSvg from "../images/404.svg"

import Layout from "../components/layouts/layout"

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  img: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    width: "80%",
  },
}))

const NotFoundPage = () => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.main} maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom>
          Ooops ...
        </Typography>
        <center>
          <img src={notFoundSvg} alt="404 not found" className={classes.img} />
        </center>

        <Typography variant="subtitle1" align="center" gutterBottom>
          You just hit a page that doesn't exist... the sadness.
        </Typography>
      </Container>
    </>
  )
}

export default NotFoundPage
