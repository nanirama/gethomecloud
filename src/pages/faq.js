import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DeserveSection from "../components/DeserveSection";
import FaqSection from "../components/faq/FaqSection";

const Faq = (props) => {
  const title = 'Home Cloud Faq'
  const desc = 'Home Cloud Meta Desccription'
  console.log('Props', props)
  return(
    <Layout>
      <SEO
          title={title}
          description={desc}
          location = {props.location.href}
       />
      <FaqSection/>   
      <DeserveSection/>
    </Layout>
  )
}
  
  export default Faq