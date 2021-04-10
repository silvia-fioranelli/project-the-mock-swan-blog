import React from "react"
import Articles from "../components/Articles"
import { Background } from "../components/shared"

function NewsPage(props) {
  const {
    pageContext: { articles },
  } = props

  return (
    <Background color="white">
      <Articles list={articles} />
    </Background>
  )
}

export default NewsPage
