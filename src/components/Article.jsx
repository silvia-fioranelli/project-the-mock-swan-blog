import React from "react"
import { media } from "styled-bootstrap-grid"
import styled from "styled-components"
import { parseDate } from "../utils"
import { Align, Caption, Flex, TextLink } from "./shared"
import Text from "./shared/Text"

function Article(props) {
  const { content, date, title } = props

  const Box = styled.div`
    margin: 2rem;
  `

  const Image = styled.img`
    min-width: 50vw;
  `

  // Responsive design example
  const ResponsiveCaption = styled(Caption)`
    ${media.smaller`
      margin: 0;
    `}
    ${media.phone`
      margin: 0 1rem;
    `}
    ${media.tablet`
      margin: 0 3rem;
    `}
    ${media.desktop`
      margin: 0 10rem;
    `}
    ${media.giant`
      margin: 0 20rem;
    `}
  `

  /**
   * Imagining the article content coming as structured data,
   * each section has a type (example text, image), so this 
   * can be extended easily
   */
  const articleContent = content.map(section => {
    switch (section.type) {
      case "text":
        return (
          <Align justify="center">
            <ResponsiveCaption>
              <Text
                font="Nolan Medium"
                color="grey"
                transform="none"
                align="initial"
                size="small"
              >
                {section.content}
              </Text>
            </ResponsiveCaption>
          </Align>
        )

      case "image":
        return (
          <Align justify="center">
            <Image src={section.content} alt={title} />
          </Align>
        )

      default:
        return null
    }
  })

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
          <Caption>
            <Text color="#cd733f">{title}</Text>
          </Caption>
        </Align>
        {articleContent}
        <Align justify="center">
          <Caption>
            <TextLink to={`/`}>
              <Text transform="none" color="grey">
                Back
              </Text>
            </TextLink>
          </Caption>
        </Align>
      </Flex>
    </Box>
  )
}

export default Article
