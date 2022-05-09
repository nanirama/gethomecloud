import * as React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PricingSection from "../components/pricing/PricingSection";
import DeserveSection from "../components/DeserveSection";


const Pricing = (props) => {
  const { data } = props
  const { PageData } = data

  const title = PageData.data.meta_title ? PageData.data.meta_title : 'Home Cloud'
  const desc = PageData.data.meta_description ? PageData.data.meta_description : 'Home Cloud Meta Desccription'
  
    return(
    <Layout>
      <SEO
          title={title}
          description={desc}
          location = {props.location.href}
       />
        <PricingSection data={PageData}/>
        <DeserveSection/>       
    </Layout>
  )
}
export const query = graphql`
  query getPricingPageData {
    PageData: prismicPagesPricing {
      data {
        meta_title
        meta_description
        description {
          richText
        }
        body {
          ... on PrismicPagesPricingDataBodyCertificateAddOns {
            id
            slice_type
            items {
              addon {
                document {
                  ... on PrismicCertificateAddons {
                    id
                    data {
                      name {
                        text
                        html
                      }
                      price_1
                      price_2
                      short_description
                      description {
                        richText
                        text
                        html
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }  
`;
  export default Pricing