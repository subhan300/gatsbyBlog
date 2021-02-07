import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {Container,Row,Col} from "react-bootstrap"
import Nav from "../nav"
function Articles({pageContext}) {
    console.log(pageContext)
    const {Item_Details}=pageContext
    console.log()
    const Article_Writing=Item_Details.childContentfulReactjsVsAngularDesarticleTextNode.desarticle
    const Image=Item_Details.images[0].file.url
    const l= Image.replace('//','https://').trim()
    const Title=Item_Details.title
    console.log(Title,"title")
    console.log(l)


    return (


      <div>
            <Nav />


<div class="container">



<Container class="textCenter containerFluid">
<Row >
<Col class="textCenter"    lg="2" xs={12}  md={12}  sm={12} style={{
justifyContent:"center",display:"flex"}}>
{/* <h5>ARTICLES </h5> */}
{/* <img src={"https://images.ctfassets.net/4zihlu1n5ck9/cXqAglXdoN68nhOvQzAIT/1a137530d977ad4b02eecd1ffcf1af90/streetfood2.jpg"} thumbnail /> */}

</Col>
<Col  class="textCenter"   lg="8" xs={12} md={12}  sm={12}>

    <div style={{border:"2px solid green",textAlign:"center",padding:"30px",
  color:"orange",backgroundColor:"black"}}> <h1>{Title}</h1></div>
   
<p class="text-justify" style={{fontSize:"20px",fontWeight:"bold"}}>
  



<br></br>{Article_Writing}</p>

<div  style={{border:"2px solid green",textAlign:"center",
  color:"orange"}}>
    <img src={l} class="imgFluid"  />
    </div>



</Col>
<Col  class="textCenter"   lg="2" xs={12} md={12}  sm={12} style={{color:"white"}}>3 of 3</Col>

</Row>

</Container>


</div>


      </div>


    )
}

export default Articles
