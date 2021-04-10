import React from "react"
import styled from "styled-components"

function Text(props) {
  const { children, element = "p", ...rest } = props

  const Element = styled(element)`
    ${({ font }) => font && `font-family: '${font}'`};
    ${({ size }) => size && `font-size: ${size}`};
    color: ${({ color }) => color};
    text-transform: ${({ transform = "uppercase" }) => transform};
    text-align: ${({ align = "center" }) => align};
  `
  return <Element {...rest}>{children}</Element>
}

export default Text
