import * as React from "react"
import { PrismicRichText } from '@prismicio/react'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import styled from "styled-components";
import SEO from "../components/seo"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const PageTemplate = (props)=>{
    const { data } = props
    const { PageData } = data

    const title = PageData.data.meta_title ? PageData.data.meta_title : 'Home Cloud'
    const desc = PageData.data.meta_description ? PageData.data.meta_description : 'Home Cloud Meta Desccription'

    const image = getImage(PageData.data.page_banner)
    const bgImage = convertToBgImage(image)
  return(
    <Layout>
      <SEO
          title={title}
          description={desc}
          location = {props.location.href}
       />
       <Wrapper>          
          <PageBanner>
          <BackgroundImage {...bgImage} preserveStackingContext className="pagebanner-bg">
            {/* <GatsbyImage image={getImage(PageData.data.page_banner)} /> */}
             <Container>
                <Heading>{PageData.data.title.text}</Heading>

                <div dangerouslySetInnerHTML={{ __html: PageData.data.subtext.html }} className="subtext" ></div>
               
             </Container>
          </BackgroundImage>
          </PageBanner>
          <Content>
             <Container>
                 <PrismicRichText
                    field={PageData.data.content.richText}
                    className="richtext-content"
                    components={{
                      heading1: ({ children }) => <Heading1>{children}</Heading1>,
                      heading2: ({ children }) => <Heading2>{children}</Heading2>,
                      heading3: ({ children }) => <Heading3>{children}</Heading3>,
                      heading3: ({ children }) => <Heading4>{children}</Heading4>,
                      heading5: ({ children }) => <Heading5>{children}</Heading5>,
                      heading6: ({ children }) => <Heading6>{children}</Heading6>,
                      paragraph: ({ children }) => <Paragraph>{children}</Paragraph>,
                    }}
                />
             </Container>
          </Content>
       </Wrapper>
    </Layout>
)}

export const query = graphql`
query getPagesData($id: String!) {
  PageData : prismicPage(uid: {eq: $id}) {
    uid
    id
    data {
      meta_title
      meta_description
      title {
        html
        text
      }
      subtext {
        html
        text
      }
      content {
        richText
        html
        text
      }
      page_banner {
        gatsbyImageData(layout: FULL_WIDTH, width: 1800, placeholder: BLURRED)
      }
    }
  }
}
`
const Wrapper = styled.div`
padding:80px 0 0 0;
@media only screen and (max-width:800px){
padding:66px 0 0 0;
}
`;
const PageBanner = styled.div`
.pagebanner-bg{
  padding:40px 0;
    @media only screen and (max-width:800px){
    padding:60px 0;
    transform: matrix(1, 0, 0, 1, 0, 0);
    background: linear-gradient(-104.08deg, #DDE1E9 -77.81%, #62718D 97.9%);
       &:before{
         display:none;
      background-image:none !important;
      background: linear-gradient(104.08deg, #DDE1E9 -77.81%, #62718D 97.9%);
    }
  }
}
transform: matrix(1, 0, 0, 1, 0, 0);
position:relative;

p{
  color:#fff;
  margin:0;
  @media only screen and (min-width:992px){
    max-width:420px;
  }
  @media only screen and (max-width:991px){
    max-width:400px;
  }
}
`;
const Container = styled.div`
max-width: 830px;
margin: 0 auto;
padding: 0 15px;
position: relative;
& > ul{
  padding-left:20px !important;
  margin-bottom:18px;
  width:100%;
  float:left;
}
& > ul > li{
  font-size: 14px;
  line-height: 23px;
  letter-spacing: -0.07875px;
  font-weight: 400;
  color: #333D47;
  list-style-type: disc;
  font-family: 'Nunito Sans',sans-serif;
  width:100%;
& > strong{
  font-size: 14px;
  line-height: 23px;
  letter-spacing: -0.07875px;
  color: #333D47;
  font-weight: 700;
}
& > em{
  font-size: 14px;
  line-height: 23px;
  letter-spacing: -0.07875px;
  color: #333D47;
  font-style:italic;
  font-weight: 400;
}
}
`;
const Heading = styled.h2`
font-size:32px;
line-height: 43px;
letter-spacing: -0.44px;
color:#fff;
margin-bottom:16px;
`;
const Heading1 = styled.h1`
font-family: 'Nunito Sans',sans-serif;
font-size: 24px;
line-height: 30px;
color: #333D47;
margin:8px 0px !important;
letter-spacing:-0.24px;
font-weight: 700;
& > em{
  font-size: 24px;
  line-height: 30px;
  color: #333D47;
  margin:8px 0px !important;
  font-weight: 700;
  letter-spacing:-0.24px;
  font-style:italic;
}
& > strong{
  font-size: 24px;
  line-height: 30px;
  color: #333D47;
  margin:8px 0px !important;
  font-weight: 700;
  letter-spacing:-0.24px;
}
`;
const Heading2 = styled.h2`
font-family: 'Nunito Sans',sans-serif;
font-size: 24px;
line-height: 30px;
color: #333D47;
margin:8px 0px !important;
letter-spacing:-0.24px;
font-weight: 700;
& > em{
  font-size: 24px;
  line-height: 30px;
  color: #333D47;
  margin:8px 0px !important;
  font-weight: 700;
  letter-spacing:-0.24px;
  font-style:italic;
}
& > strong{
  font-size: 24px;
  line-height: 30px;
  color: #333D47;
  margin:8px 0px !important;
  font-weight: 700;
  letter-spacing:-0.24px;
}
`;
const Heading3 = styled.h3`
font-family: 'Nunito Sans',sans-serif;
font-size: 24px;
line-height: 30px;
color: #333D47;
margin-bottom:8px !important;
font-weight: 500;
letter-spacing: -0.24px;
& > em{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 24px;
  line-height: 30px;
  color: #333D47;
  margin-bottom:8px !important;
  font-weight: 500;
  letter-spacing:-0.24px;
  font-style:italic;
}
& > strong{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 24px;
  line-height: 30px;
  color: #333D47;
  margin-bottom:8px !important;
  font-weight: 700;
  letter-spacing:-0.24px;
}
`;
const Heading4 = styled.h4`
font-family: 'Nunito Sans',sans-serif;
font-size: 20px;
line-height: 30px;
color: #333D47;
margin-bottom:8px !important;
letter-spacing:-0.24px;
font-weight: 500;
& > em{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 20px;
  line-height: 30px;
  color: #333D47;
  margin-bottom:8px !important;
  font-weight: 500;
  letter-spacing:-0.24px;
  font-style:italic;
}
& > strong{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 20px;
  line-height: 30px;
  color: #333D47;
  margin-bottom:8px !important;
  font-weight: 500;
  letter-spacing:-0.24px;
}
`;
const Heading5 = styled.h5`
font-family: 'Nunito Sans',sans-serif;
font-size: 18px;
line-height: 23px;
color: #333D47;
letter-spacing: -0.108px;
margin:0 0 8px 0 !important;
font-weight: 500;
& > em{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.108px;
  color: #333D47;
  font-weight: 500;
}
& > strong{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.108px;
  color: #333D47;
  font-weight: 700;
}
& > em strong{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.108px;
  color: #333D47;
  font-weight: 700;
}
`;
const Heading6 = styled.h6`
font-family: 'Nunito Sans',sans-serif;
font-size: 16px;
line-height: 19px;
color: #333D47;
margin-bottom:8px !important;
font-weight: 500;
letter-spacing: -0.108px;
& > em{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #333D47;
  margin-bottom:8px !important;
  font-weight: 500;
  letter-spacing: -0.108px;
  font-style:italic;
}
& > strong{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #333D47;
  margin-bottom:8px !important;
  font-weight: 700;
  letter-spacing: -0.108px;
}
`;
const Paragraph = styled.p`
width:100%;
font-family: 'Nunito Sans',sans-serif;
font-size: 14px;
line-height: 22px;
letter-spacing: -0.07875px;
font-weight: 400;
color: #333D47;
margin-bottom:18px;
// margin:6px 0px !important;
// padding:7px 0px !important;

& > strong{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.07875px;
  color: #333D47;
  font-weight: 700;
}
& > em{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.07875px;
  color: #333D47;
  font-style:italic;
}

& > a{
       color:#236DDE;
       text-decoration: underline;       
    }
`;
const Content = styled.div`
padding:55px 0;
// h3{
//   margin-bottom:40px;
// }
// p{
//   font-size: 14px;
//   line-height: 22px;
//   letter-spacing: -0.07875px;
//   span{
//       margin-bottom:40px;
//       display:inline-block;
//   }
//   a{
//     color:#236DDE;
//   }
// }
// ol{
//   margin-bottom:20px;
//   padding-left:16px !important;
// }
// h5{
//   margin:30px 0;
//   display:inline-block;
// }
`;
export default PageTemplate