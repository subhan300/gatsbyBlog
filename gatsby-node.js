
const { Component } = require("react");


var path=require("path");
exports.createPages=async ({actions,graphql})=>{
 
  const {createPage} = actions;
  

  const result=await graphql(` {
    allContentfulReactjsVsAngular {
      nodes {
        title
        images {
          file {
            url
          }
        }
        childContentfulReactjsVsAngularDesarticleTextNode {
          desarticle
        }
        slug
      }
    }
  }
  
  
  `)
  
  console.log("resultsjsj",JSON.stringify(result))
  result.data.allContentfulReactjsVsAngular.nodes.forEach(
    (obj)=>{
console.log(obj)
    createPage({
      path:`/Articles/${obj.slug}`,
      component:path.resolve("./src/components/templates/Articles.js"),

      context:{
          Item_Details:obj
      }
    })





  })




}
