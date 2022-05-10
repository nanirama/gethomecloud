import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"

import BenefitItem from "./benefitItem";


const Benifits = ({data}) => {
    const { primary, items } = data
    const { section_heading, section_description } = primary
    return (
        <>
            <BenifitsOuter>
                <Container>
                    <HeadingContainer>
                    <h2>{section_heading.text}</h2>
                    <SubText>{section_description}</SubText>
                    </HeadingContainer>
                    <Grid>
                        { items && items.map((item, index)=> <BenefitItem key={index} data={item} />)}
                    </Grid>
                    <Button>     
                    <Link className="btn" to="/realtor-contact/">Get Started</Link>
                    </Button>
                </Container>
            </BenifitsOuter>

        </>
    );
};
export default Benifits;

const BenifitsOuter = styled.div`
padding:100px 0 50px 0;
h2{width:100%; float:left; text-align:center;font-weight: 700;margin-bottom:25px;
    font-size: 44px;color: #333D47;letter-spacing: -0.91px;line-height: 54px;
    @media (max-width:600px) {
        font-size: 30px; line-height:40px;
    }
}
    @media (max-width:900px) {
        padding:50px 0;
    }

`

const Container = styled.div`
max-width: 1100px;
margin: 0 auto;
padding: 0 15px;
`;
const HeadingContainer = styled.div`
display: flex !important; 
flex-direction: column;
justify-content: center !important; 
width:100%;
max-width:100%;
`
const SubText = styled.div`
max-width:100%;
text-align:center;
margin-bottom:40px;
@media (max-width:900px) {
    margin-bottom:20px;
}
@media (min-width: 768px) {
    margin-left:15%;
    margin-right:15%;
 }  
`
const Grid = styled.div`
width:100%;
display: grid;flex-direction:column;
grid-template-columns: 1fr;
grid-gap:0px;
margin:50px 0;
@media (max-width: 767px) {
   margin:50px 0 30px 0;
}
@media (min-width: 768px) {
   grid-template-columns: repeat(3, 1fr);
}    
`;

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

const Button = styled.div`
display:flex;justify-content: center;
`