import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo"
import Layout from "../components/layout"
import DeserveSection from "../components/DeserveSection";


const Agentconfirm = (props) => {

    const title = 'Home Cloud - Agentconfirm'
    const desc = 'Home Cloud Meta Desccription'

    return (
        <Layout>
            <SEO
                title={title}
                description={desc}
                location={props.location.href}
            />
            <Wrapper>
                <Container>
                    <Popup>
                        <Success>
                            <StaticImage src="../assets/images/success.png" alt="" />
                            <h4>We are set!</h4>
                            <p>Thanks for reaching out and we will be in touch soon!</p>
                            <Link to="/" className="btn">Close</Link>
                        </Success>
                    </Popup>
                </Container>
            </Wrapper>
            <DeserveSection />
        </Layout>
    )
}
export default Agentconfirm


const Wrapper = styled.div`
padding:150px 0 90px 0;
text-align:center;
@media (max-width: 991px) {
   padding:120px 0 70px 0;
}
@media (max-width: 767px) {
   padding:120px 0 50px 0;
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

const Popup = styled.div`
max-width:100%;
background: #FFFFFF;
box-shadow: -1px 1px 22px 0px rgba(0,0,0,0.25);
-webkit-box-shadow: -1px 1px 22px 0px rgba(0,0,0,0.25);
-moz-box-shadow: -1px 1px 22px 0px rgba(0,0,0,0.25);
border-radius: 8px;
display: flex;
position:relative;
padding:20px !important; 
margin:0px !important; 
flex-direction: column;
align-items: center;
h4{
    width:100%;
    text-align:left;
    padding:32px;
    @media (max-width: 599px) {
        padding:25px 15px;
    }
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
}
input{
    border: 1px solid #DDE1E9;
    width: 100%;
    line-height: 40px;
    padding: 0 15px;
    border-radius: 4px;
    margin-bottom: 24px;
    color: #6C7884;
    font-size: 14px;
    font-style:italic;
}
select{
    border: 1px solid #DDE1E9;
    width: 100%;
    line-height: 40px;
    padding: 0 15px;
    border-radius: 4px;
    margin-bottom: 24px;
    color: #6C7884;
    font-size: 14px;
    font-style:italic;
    height: 40px;
    background-color: transparent;
}
`;
const Success = styled.div`
padding:0px;
text-align:center;
@media (max-width: 599px) {
    padding:25px 15px;
}
h4{
    padding:0;
    margin:40px 0 12px 0;
    text-align:center;
    font-size: 24px;
}
p{
    color: #6C7884;
    margin-bottom:35px;
}
ul{
    width:85%;
    margin:0 auto;
    @media (max-width: 455px) {
        width:100%;
    }  
    li{
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 30px;
        position:relative;
        color: #333D47;
            &:before{
                content:'';
                position:absolute;
                left:9px;
                width:1px;
                height:32px;
                background:#808FAD;
                top:18px;
                @media (max-width: 399px) {
                    display:none;
                }
            }
            &:last-child{
                margin-bottom:15px;
                &:before{
                    display:none;
                }
            }
        span{
            width: 18px;
            height: 18px;
            color: #808FAD;
            border-radius:50%;
            border:1px solid #808FAD;
            float:left;
            margin-right: 15px;
            line-height: 16px;
            font-size: 12px;
          
        }
    }
}
`;