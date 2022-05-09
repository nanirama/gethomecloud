import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby"

const Footer = () => {
   const { CityPages } = useStaticQuery(
      graphql`
        query {
         CityPages : allPrismicCityLandingPages(sort: {fields: data___title___text, order: ASC}) {
            edges {
              node {
                uid
                data {
                  title {
                    text
                  }
                }
              }
            }
          }
        }
      `
    )
   return (
   <Wrapper>
      <Container>
         <FooterTop>
            <Grid>
               <Item>
               <Link to="/">
                  <Logo>
                     <StaticImage src="../assets/images/logos/logo-white.svg" alt="" />
                     {/* <Text>Provides more detailed information than a home inspection so you can.</Text> */}
                  </Logo>
                  </Link>
                  <Contact>
                     <p>Call <a href="tel:9192950975">919-295-0975</a></p>
                     <p><a href="mailto:support@gethomecloud.com">support@gethomecloud.com</a></p>
                  </Contact>
               </Item>
               <Item>
                  <FooterLinks>
                     <Heading>Where we are</Heading>
                     <Links>
                     { CityPages && CityPages.edges.map((item, index)=>{
                        return(
                           <li key={index}>
                              <Link to={`/${item.node.uid}/`}>{item.node.data.title.text}</Link>
                           </li>
                        )
                     })}
                    
                     </Links>
                  </FooterLinks>
                  <FooterLinks>
                     <Heading>Resources</Heading>
                     <Links>
                        <li>
                           <Link to="/faq/">
                           FAQ</Link>
                        </li>
                        <li>
                           <Link to="/pricing/">
                           Pricing</Link>
                        </li>
                        <li>
                           <Link to="/blog/">
                           Blog</Link>
                        </li>
                     </Links>
                  </FooterLinks>
               </Item>
            </Grid>
         </FooterTop>
         <FooterBottom>
            <Bottom>
            <Paragraph>© 2022 HomeCloud. All rights reserved.</Paragraph>
            <ul>
               <li><Link to="/terms-of-service/">Terms of Service</Link></li>
               <li><Link to="/privacy-policy/">Privacy Policy</Link></li>
            </ul>
            </Bottom>
            <svg width="92" height="32" viewBox="0 0 92 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M66.1633 32L66.6233 31.0956L65.8567 31.513L65.6267 31.8609L66.1633 32ZM70.84 24.9739L72.68 24.2087L71.78 24.372L72.22 24.2087L71.53 23.1652L72.22 22.7478L71.6833 21.4957L72.8333 22.6783L72.1433 23.3043L72.91 23.6522L74.75 22.2609V21.3565L75.21 22.2609L77.2033 21.6348H79.2733L78.43 21.3565L79.4267 20.8696L79.9633 21.913L80.1167 20.5913L81.2667 21.4957L83.6433 18.8522L82.7233 18.1565L83.1067 18.713L81.7267 19.2L81.8033 17.6696L81.42 18.8522L80.5767 18.713L80.8833 19.3391L79.9633 18.713L78.7367 19.687L76.59 18.8522L75.21 16.9043L78.43 18.713L80.73 17.1826L80.5767 16.487L79.4267 16.6261L81.42 15.3739L76.36 13.7043L75.3633 12.5217L80.1167 13.9826L79.58 12.5217L81.42 12.313L80.27 12.8L81.2667 13.9826L81.9567 13.1478L82.57 14.4696L82.7233 13.8435L84.7933 14.4696L86.0967 13.7043L87.4767 10.9913L87.9367 11.7565L89.01 10.9913V8.83478L87.7833 7.16522L87.9367 7.65217H87.17L87.4767 8.27826L86.7867 7.7913L86.25 8.2087L85.9433 10.9913L84.7933 10.5043L85.9433 10.3652L84.9467 9.32174H85.6367V7.16522L83.26 7.30435L83.49 7.7913L81.8033 7.16522L78.7367 7.65217L79.0433 7.02609L78.2767 5.63478L78.43 3.4087L79.0433 3.82609L78.7367 5.0087L79.0433 6.53913L80.1167 7.02609L82.9533 5.98261L81.2667 4.5913L83.7967 5.91305L83.1067 4.45217L84.41 5.49565L85.4833 5.07826L84.1033 3.33913L86.94 5.0087L86.3267 3.4087L88.1667 5.98261L86.7867 2.01739V2.71305L86.25 2.29565V2.01739L85.6367 1.53044V0.626087L43.47 1.18261L28.2133 0L27.6767 2.92174L25.8367 3.33913L23.9967 5.63478L22.4633 5.0087L18.7833 7.16522L18.0167 5.98261L16.2533 7.58261L15.41 7.16522L14.26 8.97392L12.42 9.32174L8.89333 11.4087L4.83 11.7565L3.52667 12.8L2.83667 14.4696L0.536667 14.8174L0 17.6696L12.7267 18.0174L20.3167 15.8609L33.9633 16.9043V17.8087L35.2667 17.2522L36.7233 19.2L36.8 20.5913L48.53 21.0783L59.9533 31.8609L61.9467 30.8174L65.4733 31.513L66.47 30.1913L66.1633 28.0348L66.7767 29.0783L66.6233 30.9565L68.6167 26.5043L70.5333 24.8348L71.4004 24.5129L70.3033 25.3217L69.69 25.9478L70.84 24.9739ZM80.8833 22.6783H81.1133L80.73 22.2609L79.8867 22.0522L80.8833 22.6783ZM75.21 22.6783L78.0467 22.0522H79.4267L78.89 21.913L77.2033 22.0522L75.21 22.6783ZM82.4167 20.8696L81.2667 23.0261L82.57 21.0087L84.41 18.9217L82.4167 20.8696ZM85.3633 18.1303L85.1 18.5739V18.2957L85.3633 18.1303ZM85.3633 18.1303L86.0967 17.6696H85.6367L85.3633 18.1303ZM86.6333 17.0435L86.25 17.5304L87.3233 16.9043L88.78 16L86.6333 17.0435ZM91.4432 14.829L89.1633 16.1391L91.1567 15.6522L91.4432 14.829ZM91.4678 14.7583L91.4633 14.8174L91.4432 14.829L91.4678 14.7583ZM91.4678 14.7583L91.6933 11.7565L91.1567 9.32174L92 11.4783L91.6167 14.3304L91.4678 14.7583ZM89.7767 8.69565L90.16 8.83478L89.7767 7.65217L89.01 7.58261L89.7767 8.69565ZM89.01 5.35652L88.09 3.2L87.17 0.626087L87.9367 3.4087L89.3167 6.53913L89.01 6.6087L91.1567 9.25217L89.01 5.35652ZM86.7867 0.626087H86.25H85.9433L86.25 1.18261H86.94L86.7867 0.626087ZM48.1064 7.02037V13.7882H49.844V7.02037H48.1064ZM49.9274 3.87867H48.0091V5.581H49.9274V3.87867ZM37.1359 8.75037C37.7011 8.90723 38.1367 9.19326 38.4425 9.60846C38.7576 10.0237 38.9151 10.5311 38.9151 11.1309C38.9151 11.9613 38.6139 12.6118 38.0116 13.0823C37.4185 13.5529 36.5984 13.7882 35.5512 13.7882H31.103V4.03092H35.4122C36.4316 4.03092 37.2285 4.25697 37.8031 4.70908C38.3869 5.15196 38.6788 5.77476 38.6788 6.57749C38.6788 7.09418 38.5398 7.54168 38.2618 7.91997C37.9931 8.29827 37.6177 8.57507 37.1359 8.75037ZM32.8545 8.14141H35.1203C36.3528 8.14141 36.969 7.68469 36.969 6.77125C36.969 6.30991 36.8161 5.96852 36.5103 5.74708C36.2045 5.52564 35.7412 5.41492 35.1203 5.41492H32.8545V8.14141ZM35.3566 12.4042C36.0053 12.4042 36.4779 12.2888 36.7744 12.0581C37.071 11.8275 37.2193 11.4676 37.2193 10.9786C37.2193 10.4896 37.0664 10.1252 36.7605 9.88526C36.464 9.64537 35.996 9.52542 35.3566 9.52542H32.8545V12.4042H35.3566ZM46.4891 7.02037V13.7882H44.7932V12.7502C44.5801 13.1192 44.2928 13.4052 43.9314 13.6082C43.57 13.802 43.1622 13.8989 42.7081 13.8989C41.0401 13.8989 40.206 12.967 40.206 11.1032V7.02037H41.9436V11.117C41.9436 11.5968 42.0409 11.952 42.2355 12.1827C42.4301 12.4134 42.7359 12.5287 43.1529 12.5287C43.6348 12.5287 44.0194 12.3719 44.3067 12.0581C44.6032 11.7352 44.7515 11.3108 44.7515 10.7849V7.02037H46.4891ZM51.4447 13.7882V4.03092H53.1823V13.7882H51.4447ZM58.8976 12.5564C58.6751 12.5841 58.462 12.5979 58.2581 12.5979C57.4148 12.5979 56.9932 12.1458 56.9932 11.2416V8.32133H58.7864V7.02037H56.9932V4.99972H55.2556V7.02037H53.949V8.32133H55.2556V11.2693C55.2556 12.1366 55.4827 12.7917 55.9367 13.2346C56.3908 13.6682 57.0951 13.885 58.0496 13.885C58.2813 13.885 58.5361 13.8712 58.8142 13.8435L58.8976 12.5564ZM63.3058 13.7882V7.02037H65.0433V13.7882H63.3058ZM63.2085 3.87867H65.1267V5.581H63.2085V3.87867ZM72.4128 7.54629C72.0143 7.08495 71.4073 6.85429 70.5918 6.85429C70.1007 6.85429 69.6605 6.95578 69.2713 7.15877C68.882 7.36176 68.5716 7.6524 68.3399 8.03069V7.02037H66.6441V13.7882H68.3816V9.95446C68.3816 9.42854 68.5299 9.00872 68.8264 8.69501C69.1322 8.38131 69.5354 8.22445 70.0358 8.22445C70.4621 8.22445 70.7725 8.3444 70.9671 8.58429C71.171 8.82419 71.2729 9.2071 71.2729 9.73302V13.7882H73.0105V9.63614C73.0105 8.70424 72.8113 8.00763 72.4128 7.54629Z" fill="white"/>
            </svg>
         </FooterBottom>
      </Container>
   </Wrapper>
   );
   };
   export default Footer;

const Wrapper = styled.div`
  width: 100%;
  float:left;
  background: #333D47;  
`;
const Container = styled.div`
content-visibility: auto;
contain-intrinsic-size: 500px;
max-width: 1230px;
margin: 0 auto;
padding: 0px 15px;
`;
const FooterTop = styled.div`
   padding:40px 0 30px 0;
`;
const Grid = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 10px 30px;
@media (min-width: 992px) {
   grid-template-columns: 8fr 4fr;
}
@media only screen and (min-width:768px) and (max-width:991px){
   grid-template-columns: 5fr 7fr;
}
@media only screen and (max-width:767px){
   display:flex;
   flex-direction:column-reverse;
}
`;
const Item = styled.div`
`;
const Logo = styled.div`
margin-bottom:20px;
@media only screen and (max-width:767px){
   margin-top:30px;
}
`;

const Contact = styled.div`
p{
   color:#fff;
   margin-bottom:8px;
   font-size: 14px;
   line-height: 19px;
   a{
      color:#fff;
      text-decoration:underline;
   }
}
`;

const Heading = styled.h5`
letter-spacing: -0.07px;
font-weight: bold;
font-size: 13px;
line-height: 19px;
color:#fff;
text-transform:uppercase;
margin-bottom:12px;
`;
const FooterLinks = styled.div`
width:50%;
display:inline-block;

@media only screen and (max-width:319px){
   width:100%;
}
`;
const Links = styled.ul`
li{
   width:100%;
}
a{
   color:#fff;
   letter-spacing: -0.08px;
   font-size: 14px;
   line-height: 20px;
   display:inline-block;
   margin-bottom:12px;
}
`;
const FooterBottom = styled.div`
display:flex;
justify-content:space-between;
border-top:1px solid #525E6B;
padding:12px 0 20px 0;
`;
const Bottom = styled.div`
display:flex;
@media only screen and (max-width:767px){
flex-direction:column;
}
ul{
   margin:0;
   li{
      @media only screen and (max-width:767px){
         &:nth-child(1){
            a{ 
               padding-left:0;
                  &:before{
                     display:none;
                  }
            }
         }
      }
      a{
         font-size: 13px;
         line-height: 19px;
         letter-spacing: -0.07px;
         color:#fff;
         padding-left:15px;
         margin:0 10px;
         position:relative;
         @media only screen and (max-width:767px){
            margin-left:0;
         }
         @media only screen and (max-width:340px){
            font-size:11px;
         }
         &:before{
            content:'';
            position:absolute;
            left:0;
            top:7px;
            width:3px;
            height:3px;
            background-color:#fff;
            border-radius:50%;
         }
      }
   }
}
`;
const Paragraph = styled.p`
font-size: 13px;
line-height: 26px;
letter-spacing: -0.07px;
color:#fff;
margin-right:10px;
margin-bottom:0;
@media only screen and (max-width:767px){
   line-height: 19px;
   margin-right:0;
   margin-bottom:10px;
}
`;