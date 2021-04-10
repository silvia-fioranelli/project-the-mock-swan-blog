import { Link } from "gatsby"
import styled from "styled-components"

export const Background = styled.div`
  background-color: ${props => props.color};
`

export const Caption = styled.div`
  padding: 0.5rem 2rem;
`

export const TextLink = styled(Link)`
  text-decoration: none;
`

// plain Bootstrap can avoid this manual work with classNames
export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
`

export const Align = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`

// merged in a single element
export const FlexAlign = styled(Flex)`
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`
