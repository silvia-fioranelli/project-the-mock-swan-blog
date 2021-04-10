import React from "react"
import styled from "styled-components"
import { Background, Caption, FlexAlign } from "."
import Text from "./Text"

function Footer() {
  const Box = styled.div`
    padding: 3rem 6rem;
  `

  return (
    <Background color="#190e30">
      <Box>
        <FlexAlign direction="row" justify="space-around" align="center">
          <Caption>
            <Text color="#cd733f" size="x-small">
              Location
            </Text>
            <Text color="#cd733f" size="x-small">
              Development
            </Text>
            <Text color="#cd733f" size="x-small">
              Lifestyle
            </Text>
            <Text color="#cd733f" size="x-small">
              Team
            </Text>
          </Caption>
          <Caption>
            <Text color="#cd733f" size="large">
              The Mock Swan
            </Text>
          </Caption>
          <Caption>
            <Text color="#cd733f" size="x-small">
              Contact
            </Text>
            <Text color="#cd733f" size="x-small">
              News
            </Text>
            <Text color="#cd733f" size="x-small">
              Register
            </Text>
            <Text color="#cd733f" size="x-small">
              Terms
            </Text>
          </Caption>
        </FlexAlign>
      </Box>
    </Background>
  )
}

export default Footer
