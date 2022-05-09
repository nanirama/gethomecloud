import React, { useState, useEffect} from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import DeserveSection from "../components/DeserveSection";
import Usertype from "../components/popups/accesscode/usertype";

const Buyingselling = (props) => {   
  //const { data } = props
  //const { PageData } = data

  const title = 'Home Cloud - Access code'
  const desc = 'Home Cloud Meta Desccription'
  
    return(
    <Layout>
      <SEO
          title={title}
          description={desc}
          location = {props.location.href}
       />
       <Usertype/>
       <DeserveSection/>       
    </Layout>
  )
}
export default Buyingselling