import React from 'react'
import {Card,CardGroup,Col,Row} from "react-bootstrap"
import {Link} from "gatsby"
function card() {
    return (
        <div >
            
            
            <CardGroup class="py-3">
             
            <Row >
    <Col lg={4} md={12} sm={12} style={{marginTop:"7px"}}><Card >
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/03/05/21/42/appetite-1239048__340.jpg" />
    <Card.Body>
      <Card.Title>Paties Fire</Card.Title>
      <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
<hr></hr>
<Link to="/Articles/paties" class="btn btn-warning btn-lg d" tabindex="-1" role="button" >Read More</Link>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card></Col>
  <Col  style={{marginTop:"7px"}} lg={4} md={12} sm={12} >  <Card>
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/03/18/07/19/dish-4943028__340.jpg" />
    <Card.Body>
      <Card.Title>Tikka Boti</Card.Title>
      <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      <hr></hr>
<Link to="/Articles/Tikka" class="btn btn-warning btn-lg d" tabindex="-1" role="button" >Read More</Link>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card></Col>
  <Col style={{marginTop:"7px"}} lg={4} sm={12} md={12}><Card>
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/04/20/06/01/tikka-masala-2244667__340.jpg" />
    <Card.Body>
      <Card.Title>Magase Rice Garliz</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
        <hr></hr>
<Link to="/Articles/Rice" class="btn btn-warning btn-lg d" tabindex="-1" role="button" >Read More</Link>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card></Col>
  </Row>
  

  
</CardGroup>

        </div>
    )
}

export default card
