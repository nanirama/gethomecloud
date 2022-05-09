import React, { useState, useEffect} from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import DeserveSection from "../components/DeserveSection";
import WaitlistForm from "../components/popups/waitlist/waitlistform"
import AccessIndex from "../components/popups/accesscode";


const Accesscode = (props) => {   
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
       <AccessIndex/>
       <DeserveSection/>       
    </Layout>
  )
}
export default Accesscode