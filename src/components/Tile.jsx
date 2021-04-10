import React from "react"
import { media } from "styled-bootstrap-grid"
import styled from "styled-components"
import { parseDate } from "../utils"
import { Align, Caption, Flex, TextLink } from "./shared"
import Text from "./shared/Text"

function Tile(props) {
  const { id, date, title, thumbnail } = props

  const Box = styled.div`
    margin: 1rem;
  `

  const Thumbnail = styled.img`
    ${media.smaller`
      max-width: 100vw;
    `}
    ${media.phone`
      max-width: 100vw;
    `}
    ${media.tablet`
      max-width: 40vw;
    `}
    ${media.desktop`
      max-width: 28vw;
    `}
  `

  return (
    <Box>
      <Flex direction="column">
        <Align justify="center">
          <Caption>
            <Text size="small" color="grey">
              {parseDate(date)}
            </Text>
          </Caption>
        </Align>
        <Align justify="center">
          <Thumbnail src={thumbnail} alt={title} />
        </Align>
        <Align justify="center">
          <Caption>
            <TextLink to={`/article-${id}`}>
              <Text color="#cd733f">{title}</Text>
            </TextLink>
          </Caption>
        </Align>
      </Flex>
    </Box>
  )
}

export default Tile
