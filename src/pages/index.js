// import React from 'react'
// import {Link} from "gatsby"
// function index() {
//     return (
//         <div>
//             <h1>move on blogging website</h1>
//           <Link to="/Articles">Click on it to move there</Link>
//         </div>
//     )
// }

// export default index
import React from 'react'
import Nav from "../components/nav"
import Card from "../components/card"
import Carousel from "../components/carousel"
import Footer from "../components/footer"
function index() {
    return (
        <div class="containerFluid">
             <Nav />
             <div><Carousel /></div>
         
           <div class="container py-5"  >
         <div className="py-2" style={{textAlign:"center"}}>  <h1>ALL BLOGS ! </h1>
               </div>
         
   {/* card */}
   
  
   <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
     <Card />
 
     </div>
 

   {/* card */}
  
    
 
           </div>

           <Footer />
        </div>
    )
}

export default index
