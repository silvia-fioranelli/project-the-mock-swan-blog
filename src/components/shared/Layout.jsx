import React from "react"
import { BaseCSS, GridThemeProvider } from "styled-bootstrap-grid"
import styled from "styled-components"
import Footer from "./Footer"
import GlobalStyle from "./GlobalStyle"
import Header from "./Header"

function Layout(props) {
  const { children } = props

  const grid = {
    col: {
      padding: 0,
    },
    container: {
      padding: 0,
    },
  }

  // background-image: linear-gradient(to bottom, transparent, lightgray)

  const Image = styled.img`
    position: absolute;
    z-index: -1;
    width: 100%;
  `

  const Box = styled.div`
    margin 2rem;
  `

  /**
   * dynamic source for top image
   * may change with location i.e. when /article is visited
   */
  const backgrounds = [
    "https://i.picsum.photos/id/474/1200/400.jpg?hmac=icBwjDq0cl5yGqRhxYFlXgqLobsmdMFhIuBsGv5jRqk",
    "https://i.picsum.photos/id/651/1200/600.jpg?hmac=0wAXsoNCSjTEf6bFX7qD5ssfA0jwPX1EBL-Hl8sVIlM",
    "https://i.picsum.photos/id/526/1200/600.jpg?hmac=S-v_scNW5KZqluZ_zT9EcJ2qMKmOJTNzQVVVJBYisLI",
    "https://i.picsum.photos/id/1021/1200/600.jpg?hmac=tcFu2KcgUcvsrs_f5NW5PLOC9hLXhlF2KKdPoGMZhJc",
    "https://i.picsum.photos/id/110/1200/600.jpg?hmac=lSn33eMyZSVh9E41X6iKAjzBfzE3ftvih1ZmIN9Fpaw",
    "https://i.picsum.photos/id/249/1200/600.jpg?hmac=novzZSJaD7T1DIg0YCrGOP4vlxfPSmrbEhbXDxSIHaU",
  ]

  return (
    <>
      <BaseCSS />
      <GlobalStyle />
      <Image src={backgrounds[3]} />
      <Header />
      <Box>
        <GridThemeProvider gridTheme={grid}>{children}</GridThemeProvider>
      </Box>
      <Footer />
    </>
  )
}

export default Layout
