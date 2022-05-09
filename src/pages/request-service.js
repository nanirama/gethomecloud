import * as React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import DeserveSection from "../components/DeserveSection";
import WaitlistForm from "../components/popups/waitlist/waitlistform"


const Requestservice = (props) => {
  //const { data } = props
  //const { PageData } = data

  const title = 'Home Cloud - Request Service'
  const desc = 'Home Cloud Meta Desccription'
  
    return(
    <Layout>
      <SEO
          title={title}
          description={desc}
          location = {props.location.href}
       />
       <WaitlistForm/>
       <DeserveSection/>       
    </Layout>
  )
}
export default Requestservice