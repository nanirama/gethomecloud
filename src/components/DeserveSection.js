import * as React from "react"
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import DigitizeMyHome from "./popups/DigitizeMyHome"

const DeserveSection = ({page}) => {
   const { DeserveImg} = useStaticQuery(
      graphql`
        query {
         DeserveImg: file(relativePath: {eq: "home.png"}) {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 200)
            }
          }
        }
      `
    )
   
return(
   <DeserveBlk page={page}>
      <Container>
         <GatsbyImage image={getImage(DeserveImg)} />
         <h2>You Deserve More From Your Home Get It With HomeCloud</h2>
         <DigitizeMyHome/>
         <p><Link to="/pricing/">Starting at $399</Link></p>
         <p>(for up to a 1,499 sq. ft. home) </p>
      </Container>
   </DeserveBlk>
   );
   };
export default DeserveSection;  

const Container = styled.div`
// content-visibility: auto;
// contain-intrinsic-size: 500px;
max-width: 500px;
margin: 0 auto;
padding:0 15px;
@media only screen and (max-width:767px){
   max-width: 100%;
}
`;
const DeserveBlk = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align:center;
padding: 96px 0px;
background: ${props => props.page ? '#FFFFFF' : '#F6F7F9'};
@media only screen and (max-width:767px){
padding:75px 0px;
}
h2{
   font-size:32px;
   line-height:43px;
   margin:30px 0; 
      @media only screen and (max-width:767px){
         font-size:28px;
         line-height:34px;
      }
}
p{
   color:#6C7884;
   font-size: 14px;
   line-height: 20px;
   margin:0;
   display: flex;
   justify-content: center;
}
p a{
   color:#236DDE;
   font-weight:700; 
   text-decoration: underline; 
   margin-top:18px;
 }
`;
