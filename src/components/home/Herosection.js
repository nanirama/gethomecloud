import React, {useState} from "react"
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import DigitizeMyHome from "../popups/DigitizeMyHome"

const Hero = ({data}) => {
const { title, description } = data.data
const { HeroBanner } = useStaticQuery(
  graphql`
    query {
      HeroBanner: file(relativePath: {eq: "hero-banner.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `
)
  const image = getImage(HeroBanner)
  const bgImage = convertToBgImage(image)
  return(
  <Wrapper>
    <BackgroundImage {...bgImage} preserveStackingContext className="herobanner-bg">
     <BannerText>
        <Container>
           <Text>
              <h2>{title.text}</h2>
              <p>{description}</p>
              <DigitizeMyHome/>
           </Text>
        </Container>
     </BannerText>     
      </BackgroundImage>       
  </Wrapper>
  );
  };
export default Hero;

const Button = styled.button`
`;
const Wrapper = styled.div`
content-visibility: auto;
contain-intrinsic-size: 500px;
  .herobanner-bg{
      background-position:center;
      background-repeat:no-repeat;
      background-size: cover;
      min-height:800px;
      position:relative;
    @media (max-width: 800px) {
      min-height:500px;
    }
    @media (max-width: 767px) {
      min-height:300px;
      margin-bottom:180px;
    }
    @media (min-width: 801px) {
      &:before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.61) 0%, rgba(0, 0, 0, 0) 100%);
        width:100%;
        height:13%;
      }
    }
  }
`;
const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 0 15px;
`;
const BannerText = styled.div`
position:absolute;
bottom:60px;
left:0;
right:0;
@media (max-width: 767px) {
  bottom:-150px;
}
`;
const Text = styled.div`
display: flex;
flex-direction: column;
padding:32px;
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
border-radius: 6px;
width:460px;
@media (max-width: 767px) {
  margin:0 auto;
  padding:20px;
}
@media (max-width: 550px) {
 width:100%;
}
h2{
  color: #236DDE;
  @media (max-width: 400px) {
    font-size:27px;
    line-height:32px;
    margin-bottom:15px;
  }
}
`;
