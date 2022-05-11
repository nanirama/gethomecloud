import React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components";



const HeroSection = ({data}) => {
    const { primary } = data
    const { hero_section_content, button_text, button_link, hero_image } = primary
    return (
        <BannerBlk>
            <GatsbyImage image={getImage(hero_image)} />
            <BannerText>
                <Container>
                    <Text>
                       {hero_section_content && <div dangerouslySetInnerHTML={{ __html: hero_section_content.html }} ></div>}                    
                       
                        <Link className="btn" to={`/${button_link}`}>{button_text}</Link>
                    </Text>
                </Container>
            </BannerText>
        </BannerBlk>
    );
};
export default HeroSection;

const BannerBlk = styled.div`
position:relative;
.gatsby-image-wrapper {
    width: 100% !important;
}
`;

const Container = styled.div`
max-width: 1250px;
margin: 0 auto;
padding: 0 15px;
`;

const BannerText = styled.div`
position:absolute;
bottom:60px;
left:0;
right:0;
@media (max-width: 767px) {
    position:inherit;bottom:inherit;
}
`;

const Text = styled.div`
display: flex;
flex-direction: column;
padding:32px;
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
border-radius: 6px;
width:520px;
@media (max-width: 767px) {
  margin:0 auto;
  padding:20px;
}
@media (max-width: 550px) {
 width:100%;
}
h2{
  color: #236DDE;font-weight:700;font-size:32px; line-height:43px;
  @media (max-width: 400px) {
    font-size:27px;
    line-height:32px;
    margin-bottom:15px;
  }
}
`;
