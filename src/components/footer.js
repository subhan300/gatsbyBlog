import React from 'react'
import {Row,Col,Container} from "react-bootstrap"
function footer() {
    return (
      <div className="fluid " style={{backgroundColor:"black"}}>
         <Container className="py-3" style={{backgroundColor:"black"}}>
         <Row>
             <Col lg={6} md={6} sm={12}  style={{textAlign:"center",color:"red",fontSize:"20px"}}>
                 Blogging Website : Food Tarka </Col>
         <Col lg={6} md={6} sm={12}  style={{textAlign:"center",color:"red",fontSize:"20px"}}>Created By : SUBHAN AKRAM</Col>
         </Row>
         </Container>
      </div>
    )
}

export default footer
