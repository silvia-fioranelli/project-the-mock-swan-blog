import React from "react"
import { media } from "styled-bootstrap-grid"
import styled from "styled-components"
import { Caption, FlexAlign } from "."
import Text from "./Text"

function Header() {
  const ResponsiveBox = styled.div`
    ${media.smaller`
    margin: 1rem 0;
    `}
      ${media.phone`
      margin: 1.5rem 0;
    `}
    ${media.tablet`
      margin: 2rem 0;
    `}
    ${media.desktop`
      margin: 3rem 0;
    `}
  `

  return (
    <>
      <FlexAlign justify="space-between" align="center">
        <Caption>
          <Text size="small" color="white">
            Menu
          </Text>
        </Caption>
        <Caption>
          <Text size="large" color="white">
            The Mock Swan
          </Text>
        </Caption>
        <Caption>
          <Text size="small" color="white">
            Register
          </Text>
        </Caption>
      </FlexAlign>
      <ResponsiveBox>
        <Text size="xxx-large" color="white" transform="none">
          Latest News
        </Text>
      </ResponsiveBox>
    </>
  )
}

export default Header
