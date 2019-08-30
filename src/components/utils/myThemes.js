/* eslint-disable */
import { createMuiTheme } from "@material-ui/core/styles"
/* remove any colors that will not be used */
import {
  amber,
  blue,
  blueGrey,
  brown,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from "@material-ui/core/colors"
import "typeface-roboto"

const myDefault = createMuiTheme({
  palette: {
    error: {
      light: red[500],
      main: red[700],
      dark: red[900],
    },
    text: {
      primary: grey[700],
      secondary: grey[500],
      disabled: grey[400],
      hint: lightGreen[600],
    },
    background: {
      paper: grey[100],
      default: "#fafafa",
    },
  },
  typography: {
    fontSize: 16,
    h1: { color: grey[700] },
    h2: { color: grey[700] },
    h3: { color: grey[700] },
    h4: { color: grey[700] },
    h5: { color: grey[700] },
    h6: { color: grey[700] },
    body1: { color: grey[700] },
    body2: { color: grey[700] },
    caption: { color: grey[500] },
  },
  stepper: {
    iconColor: "green", // or logic to change color
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // Ripple: {
      //   color: "white",
      // },
      // The default props to change
      // disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
})

const myTheme = createMuiTheme({
  ...myDefault,
  palette: {
    // primary: amber,
    primary: {
      main: amber[700],
    },
    // secondary: red,
    secondary: deepOrange,
    background: {
      default: amber[100]
    }
  },
})

const greenTheme = createMuiTheme({
  ...myDefault,
  palette: {
    primary: lightGreen,
    secondary: {
      main: lightBlue[200],
    },
  },
})

const amberTheme = createMuiTheme({
  ...myDefault,
  palette: {
    primary: amber,
    secondary: orange,
  },
})

const redTheme = createMuiTheme({
  ...myDefault,
  palette: {
    primary: red,
    secondary: amber,
  },
})

export { myTheme, greenTheme, amberTheme, redTheme }
