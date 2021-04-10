import React from "react"
import Article from "../components/Article"
import { Background } from "../components/shared"

function ArticlePage(props) {
  const {
    pageContext: { article },
  } = props

  return (
    <Background color="white">
      <Article {...article} />
    </Background>
  )
}

export default ArticlePage
