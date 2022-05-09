import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image"



const BenefitItem = ({ data }) => {
    const { benefits_heading, content_1_text, content_1_icon, content_2_text, content_2_image  } = data

    return (
        <Item>
            <h3>{benefits_heading.text}</h3>
            <ul>
                <li>
                    <Icon><GatsbyImage image={getImage(content_1_icon)} /></Icon>
                    <p>{content_1_text}</p>
                </li>
                <li>
                    <Icon><GatsbyImage image={getImage(content_2_image)} /></Icon>
                    <p>{content_2_text}</p>
                </li>
            </ul>
        </Item>
    );
};
export default BenefitItem;


const Item = styled.div`
padding:35px 25px;position:relative; 
h3{font-size: 28px;line-height: 34px;letter-spacing: -0.385px;color: #236DDE;font-weight: 700;margin-bottom:35px;
    @media (max-width:600px) {
        font-size:24px; line-height:30px;
    }
}  
p{margin:0;}
li{position:relative;padding-left:35px;margin-bottom:30px;
&:last-child{margin:0;}
}
&:hover{background-color:#F6F7F9;} 
`
const Icon = styled.div`
position:absolute; left:0; top:5px;width:20px;
`