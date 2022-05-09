import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/layout"
import DeserveSection from "../components/DeserveSection";
import { StaticImage } from "gatsby-plugin-image";

function GetStarted() {

    const title = 'Home Cloud - Get Started'
    const desc = 'Home Cloud Get Started'
    return (
        <Layout>
        <Wrapper>
            <Container>
                <OuterContainer>
                <StaticImage src="../assets/images/rocket.png" alt="Rocket" />
                <h4>Great, let’s get started!</h4>
                <p>HomeCloud is in private beta in the Raleigh Durham Area.</p>
                <Link className="btn" to="/access-code">I received an Access Code from my agent</Link>
                <Link className="btn btn1" to="/request-service">Request Service</Link>
                </OuterContainer>
            </Container>
        </Wrapper>
        <DeserveSection/>       
        </Layout>
    );
}
export default GetStarted;

const Wrapper = styled.div`
padding:150px 0 80px 0;
text-align:center;
@media (max-width: 991px) {
   padding:130px 0 70px 0;
}
@media (max-width: 767px) {
   padding:100px 0 40px 0;
}
`;
const Container = styled.div`
content-visibility: auto;
contain-intrinsic-size: 500px;
max-width: 1100px;
margin: 0 auto;
padding: 25px;
display: flex;
justify-content: center;
`;
const OuterContainer = styled.div`
width:480px;
max-width:100%;
background: #FFFFFF;
box-shadow: -1px 1px 22px 0px rgba(0,0,0,0.25);
-webkit-box-shadow: -1px 1px 22px 0px rgba(0,0,0,0.25);
-moz-box-shadow: -1px 1px 22px 0px rgba(0,0,0,0.25);
border-radius: 8px;
display: flex;
position:relative;
padding:32px;
flex-direction: column;
align-items: center;
@media (max-width: 599px) {
   padding:25px 15px;
}
h4{
   margin:32px 0 !important;
   text-align:center;
}
svg{
   position:absolute;
   right:32px;
   top:36px;
   cursor:pointer;
   @media (max-width: 599px) {
      right:15px;
   }
}
.btn{
   width:100%;
   padding: 0.675rem 10px !important
}
.btn1{
    background: #ECF2FE !important;
    border-radius: 4px;
    color: #236DDE !important;
    width:100%;
    margin-top:15px;
    border:none;
  }
input{
   border: 1px solid #DDE1E9;
   width: 100%;
   line-height: 48px;
   padding: 0 15px;
   border-radius: 4px;
   margin-bottom: 24px;
   color: #6C7884;
   font-size: 14px;
   font-style:italic;
   box-sizing: border-box !important;
}
input.error, .error, input:focus{
   border: 2px solid #DB4343 !important;
   box-sizing: border-box !important;
}
`;