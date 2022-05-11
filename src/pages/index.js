import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from "../components/home/Herosection";
import Howitworksection from "../components/home/Howitworksection";
import Services from "../components/services"
import Benefitssection from "../components/home/Benefitssection";
import Featuressection from "../components/home/Featuressection";
import Testimonialsection from "../components/Testimonialsection";
import DeserveSection from "../components/DeserveSection";

import { BrowserView, TabletView, MobileView } from "react-device-detect"
import styled from "styled-components"

const IndexPage = (props) => {
  const { data } = props
  const { PageData, site, SiteLogo, HowItWorks, OurBenefits } = data

  const siteURL = site.siteMetadata.siteUrl 
  const siteLogo = siteURL+SiteLogo.publicURL;

  const title = PageData.data.meta_title ? PageData.data.meta_title : 'Home Cloud'
  const desc = PageData.data.meta_description ? PageData.data.meta_description : 'Home Cloud Meta Desccription'
  return(
  <Layout page="home">
       <SEO
          title={title}
          description={desc}
          location = {props.location.href}
       />
    <Herosection data={PageData} />
    {HowItWorks && <Howitworksection data={HowItWorks.data.body} />}
    <Services/>
    {OurBenefits && <Benefitssection id="benefits" data={OurBenefits.data.body} />}
    <Featuressection id="whatsincluded" />
    <Testimonialsection />
    <DeserveSection page="home" />
  </Layout>
)}


export const query = graphql`
query getHomeData{
  site {
    siteMetadata {
      siteUrl
    }
  }
  SiteLogo: file(relativePath: {eq: "logos/logo-1.png"}) {
    publicURL
  }
  HowItWorks : prismicHowItWorks {
    data {
      body {
        ... on PrismicHowItWorksDataBodyHowItWorks {
          id
          slice_type
          primary {
            heading {
              html
              text
              richText
            }
          }
          items {
            item_text
          }
        }
      }
    }
  }
  OurBenefits: prismicOurBenefits {
    data {
      body {
        ... on PrismicOurBenefitsDataBodyOurBenefits {
          id
          primary {
            tab_heading
          }
          items {
            heading
            content
            image {
              gatsbyImageData(layout: FULL_WIDTH, width: 750)
            }
          }
        }
      }
    }
  }
  PageData : prismicHome {
    id
    data {
      meta_title
      meta_description
      title {
        text
        html
      }
      description
      body {
        ... on PrismicHomeDataBodyOurBenefits {
          id
          slice_type
          primary {
            tab_heading
          }
          items {
            heading
            content
            image {
              gatsbyImageData(layout: FULL_WIDTH, width: 750)
            }
          }
        }
        ... on PrismicHomeDataBodyHowItWorks {
          id
          slice_type
          primary {
            heading {
              html
              text
            }
          }
          items {
            item_text
          }
        }
      }
    }
  }
}
`;
export default IndexPage;

const ServicesBlock = styled.div`
.browserview, .tabletview, .mobileview{display:none;}
@media (min-width: 992px) {
  .browserview{display:block;}
}
@media only screen and (min-width: 701px) and (max-width: 991px) {
  .tabletview{display:block;}
}
@media (max-width: 700px) {
  .mobileview{display:block;}
  }

`;
