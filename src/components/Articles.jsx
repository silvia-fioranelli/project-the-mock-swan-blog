import React from "react"
import { Col, Row } from "styled-bootstrap-grid"
import styled from "styled-components"
import Tile from "../components/Tile"

function Articles(props) {
  const { list } = props

  const Box = styled.div`
    padding: 3rem;
  `

  /**
   * Not really "semantic", one row and many cols
   * It should have a map of map based on current viewSize:
   * * chunk(list, 3) for lg
   * * chunk(list, 2) for md
   * * chunk(list, 1) for sm
   * */

  return (
    <Box>
      <Row>
        {list.map(tile => (
          <Col lg={4} md={6} sm={12}>
            <Tile {...tile} />
          </Col>
        ))}
      </Row>
    </Box>
  )

  /**
   * The below solution is using flex distirbution of items
   * And is covering also responsive layouts for tablet/mobile
   * */

  // const FlexCol = styled(Col)`
  //   flex: 1;
  // `

  // return (
  //   <Box>
  //     <Flex direction="row">
  //       <Row>
  //         {list.map(tile => (
  //           <FlexCol key={tile.id}>
  //             <Tile {...tile} />
  //           </FlexCol>
  //         ))}
  //       </Row>
  //     </Flex>
  //   </Box>
  // )
}

export default Articles
