import * as React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import DeserveSection from "../components/DeserveSection";
import RealtorForm from '../components/popups/realtor'


const RealtorContact = (props) => {
  const title = 'Home Cloud - Realtor Contact'
  const desc = 'Home Cloud Realtor Contact'
  
    return(
    <Layout>
      <SEO
          title={title}
          description={desc}
          location = {props.location.href}
       />
       <RealtorForm/>
       <DeserveSection/>       
    </Layout>
  )
}
export default RealtorContact