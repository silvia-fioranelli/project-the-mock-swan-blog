import React from "react"
import { Background, Caption, FlexAlign, TextLink } from "../components/shared"
import Text from "../components/shared/Text"

function Page404() {
  return (
    <Background color="white">
      <FlexAlign direction="column" justify="space-between" align="center">
        <Caption>
          <Text size="xx-large" color="grey">
            Ops! :(
          </Text>
        </Caption>
        <Caption>
          <Text size="small" color="black" transform="none">
            The page you're looking for does not exist.
          </Text>
        </Caption>
        <Caption>
          <TextLink to={`/`}>
            <Text transform="none" color="grey">
              Back
            </Text>
          </TextLink>
        </Caption>
      </FlexAlign>
    </Background>
  )
}

export default Page404
