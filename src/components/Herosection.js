import React, {useState} from "react"
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"


import ModalBoxContent from "./ModalBoxContent";

const Hero = () => {
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
  const [modalShow, setModalShow] = useState(false);
  return(
  <Wrapper>
    <BackgroundImage {...bgImage} preserveStackingContext className="herobanner-bg">
     <BannerText>
        <Container>
           <Text>
              <h2>Digitize your Home</h2>
              <p>We put your home information into an app to simplify maintenance and increase home value. When you’re ready to sell, your digital HomeCloud profile makes your home more marketable and data is seamlessly transferred to the next owner to set them up for success.</p>
              {/* <Button className="btn" onClick={() => setModalShow(true)}>Digitize My Home</Button> */}
              <Button
              className="btn" 
                             onClick={() => setModalShow(true)}
                           >Digitize My Home</Button>
           </Text>
        </Container>
     </BannerText>     
      </BackgroundImage>  
      <ModalBoxContent
          show={modalShow}
          onHide={() => setModalShow(false)}
      />  
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
position:relative;
}
`;
const Container = styled.div`
max-width: 1230px;
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

 width:90%;
}
@media (max-width: 479px) {
  width:85%;
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
