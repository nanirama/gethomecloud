import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/agents/herosection"
import Benifits from "../components/agents/benifits"
import Banner from "../components/agents/banner"
import Testimonialsection from "../components/Testimonialsection";
import Innovators from "../components/agents/innovators"


const AgentPage = ({data}) => {
  const { PageData } = data
  const HeroSectionContnet = PageData.data.body.filter((item) => {
    return item.slice_type === "hero_section";
  });
  const BannerSection = PageData.data.body.filter((item) => {
    return item.slice_type === "banner_section";
  });
  const BenefitsSection = PageData.data.body.filter((item) => {
    return item.slice_type === "agent_benefits";
  });
  const InnovatorsSection = PageData.data.body.filter((item) => {
    return item.slice_type === "our_innovators_section";
  });
  return(
  <Layout page="home">
    <HeroSection data={HeroSectionContnet[0]} />
    <Benifits data={BenefitsSection[0]} />
    <Banner data={BannerSection[0]} />
    <Testimonialsection />
    <Innovators data={InnovatorsSection[0]} />
  </Layout>
)
}

export default AgentPage

export const agentquery = graphql`
query getAgentPageData{
  PageData : prismicAgt(id: {eq: "02e96652-dc6c-5448-95da-d6bfb357edcf"}) {
    data {
      title {
        text
      }
      body {
        ... on PrismicAgtDataBodyOurInnovatorsSection {
          id
          slice_type
          primary {
            innovators_heading
            innovators_content
            button_text
            button_link
          }
          items {
            innovator_logo {
              gatsbyImageData(layout: FULL_WIDTH, width: 344, height: 194)
            }
          }
        }
        ... on PrismicAgtDataBodyAgentBenefits {
          id
          slice_type
          primary {
            section_description
            section_heading {
              text
              html
            }
          }
          items {
            benefits_heading {
              text
              html
            }
            content_1_text
            content_1_icon {
              gatsbyImageData(layout: FIXED, width: 20)
            }            
            content_2_text
            content_2_image {
              gatsbyImageData(layout: FIXED, width: 20)
            }
          }
        }
        ... on PrismicAgtDataBodyBannerSection {
          id
          slice_type
          primary {
            banner_text
            banner_image {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        ... on PrismicAgtDataBodyHeroSection {
          id
          slice_type
          primary {
            hero_section_content {
              html
              text
            }
            button_text
            button_link
            hero_image {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
}
`;
