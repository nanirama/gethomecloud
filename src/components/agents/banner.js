import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image"



const SubBanner = ({data}) => {
    const { primary } = data
    const { banner_text, banner_image } = primary
    return (
        <BannerBlk>
            <GatsbyImage image={getImage(banner_image)} />
            <BannerText>
                <Container>
                    <h2>{banner_text}</h2>
                </Container>
            </BannerText>
        </BannerBlk>
    );
};
export default SubBanner;

const BannerBlk = styled.div`
position:relative; 
.gatsby-image-wrapper { padding:20px 0;width: 100% !important;}

`;

const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
padding: 0 15px;
`;

const BannerText = styled.div`
position:absolute;
top:0;bottom:0;
left:0;
right:0;display: flex;
align-items: center;

h2{font-size: 44px; line-height: 54px;margin:0;
    color: #fff;font-weight:700;text-align:center;
    @media (max-width:600px) {
        font-size: 30px; line-height:40px;
    }
   
  }
`;

