import React from "react"

const TemplateSvg = props => {
  const { theme } = props
  const primary = theme.palette.primary.main
  const secondary = theme.palette.secondary.main
  return <div style={{ paddingTop: theme.spacing(3) }}></div>
}

export default TemplateSvg
