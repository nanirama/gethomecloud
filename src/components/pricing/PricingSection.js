import React, { useContext, useState } from "react"
import styled from "styled-components";
import { PrismicRichText } from '@prismicio/react'
import { Accordion, AccordionContext, useAccordionButton } from 'react-bootstrap'
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ModalPricingContent from "./ModalPricingContent";
import DigitizeMyHome from "../popups/DigitizeMyHome";

import Icon from "../../assets/images/check-icon.png";


const PricingSection = ({data}) => {
const { body } = data.data
const addOns = body[0].items
const { PricingIcon} = useStaticQuery(
   graphql`
      query {
         PricingIcon: file(relativePath: {eq: "home-icon.png"}) {
            childImageSharp {
               gatsbyImageData(layout: FIXED, width: 67)
            }
         }         
      }
   `
)
const [modalShow, setModalShow] = useState(false);
const ContextAwareToggle = ({ children, eventKey, callback })=> {
const { activeEventKey } = useContext(AccordionContext);
const decoratedOnClick = useAccordionButton(
eventKey,
() => callback && callback(eventKey),
);
const isCurrentEventKey = activeEventKey === eventKey;
if(isCurrentEventKey){
return (
<span className="link">View Less</span>
);
}
else
{
return (
<>
<p>{children}</p>
<span className="link">See Details </span>
</>
);
}
}
return(
<Wrapper>
   <Banner>
      <Container>
         <h1>Pricing that fits your Home</h1>
         {/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking.</p> */}
      </Container>
   </Banner>
   <Container>
      <BenifitBlk>
         <Grid>
            <TextBlock>
               <Image>
                  <GatsbyImage image={getImage(PricingIcon)} />
               </Image>
               <h4>Home Certification</h4>
               <h2>
                  From $399*
                  <span className="popup" onClick={() =>
                     setModalShow(true)}>
                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0003 2.74177C13.9862 2.74177 17.2584 5.9701 17.2584 9.99984C17.2584 14.0083 14.0121 17.2579 10.0003 17.2579C5.99347 17.2579 2.74226 14.0132 2.74226 9.99984C2.74226 5.99436 5.9883 2.74177 10.0003 2.74177ZM10.0003 1.6665C5.39828 1.6665 1.66699 5.39913 1.66699 9.99984C1.66699 14.6032 5.39828 18.3332 10.0003 18.3332C14.6024 18.3332 18.3337 14.6032 18.3337 9.99984C18.3337 5.39913 14.6024 1.6665 10.0003 1.6665ZM8.79065 13.2256H9.19387V9.19339H8.79065C8.56797 9.19339 8.38742 9.01284 8.38742 8.79016V8.52134C8.38742 8.29866 8.56797 8.11812 8.79065 8.11812H10.4036C10.6262 8.11812 10.8068 8.29866 10.8068 8.52134V13.2256H11.21C11.4327 13.2256 11.6132 13.4062 11.6132 13.6289V13.8977C11.6132 14.1204 11.4327 14.3009 11.21 14.3009H8.79065C8.56797 14.3009 8.38742 14.1204 8.38742 13.8977V13.6289C8.38742 13.4062 8.56797 13.2256 8.79065 13.2256ZM10.0003 5.16113C9.40648 5.16113 8.92506 5.64255 8.92506 6.2364C8.92506 6.83025 9.40648 7.31167 10.0003 7.31167C10.5942 7.31167 11.0756 6.83025 11.0756 6.2364C11.0756 5.64255 10.5942 5.16113 10.0003 5.16113Z" fill="#333D47"/>
                     </svg>
                  </span>
                  <ModalPricingContent
                     show={modalShow}
                     onHide={() =>
                  setModalShow(false)}
                  /> 
               </h2>
               <h5>Up to 1,499 Sq. Ft.</h5>
               <p>+$40 for each 500 Sq. Ft. increment.*</p>
               <DigitizeMyHome/>
            </TextBlock>
            <Benifits>
               <PrismicRichText
                    field={data.data.description.richText}
                    className="richtext-content"
                />
            </Benifits>
         </Grid>
      </BenifitBlk>
      <Schedule>
         <h3>This can be added once you Schedule your Home Certification:</h3>
         <ScheduleItem>
            { addOns && addOns.map((item, index)=>{
               const { addon } = item
               const { document } = addon
               const { data } = document
               const { name, price_1, price_2, short_description, description } = data
               return(
                  <Item key={index}>
                     <Addon>Add-on</Addon>
                     <h4>{name.text}</h4>
                     <h5>{price_1}</h5>
                     {price_2 && <h5>{price_2}</h5>}
                     <Accordion>
                        <Accordion.Item eventKey={index}>
                           
                           <Accordion.Body>
                              <PriceRichtextDescription>
                                 <PrismicRichText
                                    field={description.richText}
                                    className="richtext-description"
                                 />
                              </PriceRichtextDescription>                             
                           </Accordion.Body>
                           <Accordion.Header>
                              <ContextAwareToggle eventKey={index}>{short_description}</ContextAwareToggle>
                           </Accordion.Header>
                        </Accordion.Item>
                        
                     </Accordion>
                  </Item>
               )
            })}
            
         </ScheduleItem>
      </Schedule>
   </Container>
</Wrapper>
);
};
export default PricingSection;
const PriceRichtextDescription = styled.div`
// padding:0px;
// margin:0px;
// widtH:100%;
// overflow:hidden;
ul{
   margin:0px 0px 0px 10px;
   list-style: disc !important;
}
ul li {
   width: 100%;
   margin-bottom: 10px;
   float:left;
   font-size:14px;
   line-height:20px;
   font-weight:400;
   color:#333D47;
   padding-left:5px;
   list-style: disc !important;
   // background-image:url(${Icon});
   // background-position:top left;
   // background-repeat:no-repeat;
}
p{
   font-size:14px;
   line-height:20px;
   color:#333D47;
   & > strong{
      font-weight:700;
      font-size:14px;
      line-height:20px;
      color:#333D47;
   }
}
`;        
const Wrapper = styled.div`
padding:80px 0 30px 0;

@media (max-width: 800px) {
    padding:66px 0 40px 0;
}
`;
const Banner = styled.div`
width: 100%;
margin-bottom:56px;
background: linear-gradient(104.71deg, #0047AD 34.23%, #0A5ACB 97.16%);
padding:40px 0;
h1{
   color:#fff;
   font-size:32px;
   line-height:43px;
   margin-bottom:15px;
}
p{
   color:#fff;
   margin:0;
   @media only screen and (min-width:992px){
      max-width:420px;
    }
    @media only screen and (max-width:991px){
      max-width:400px;
    }
}
`;
const Container = styled.div`
max-width: 845px;
margin: 0 auto;
padding: 0 15px;

`;
const BenifitBlk = styled.div`
padding:20px;
border:1px solid #DDE1E9;
border-radius:6px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 30px;
    @media (min-width: 768px) {
        grid-template-columns: 4fr 8fr;
    }
`;
const TextBlock = styled.div`
padding-left:15px;
@media (max-width: 767px) {
   text-align:center;
   padding-left:0px;
}
h4{
   font-size:18px;
   line-height:23px;
   font-weight:700;
   color:#333D47;
   margin-top:20px;
}
h2{
   font-size:28px;
   line-height:34px;
   font-weight:700;
   color:#333D47;
   margin:5px 0;
   position:relative;
   .popup{
      position: absolute;
      top: -10px;
      margin: 0px 0 0 10px;
   }
}
h5{
   font-size:16px;
   line-height:22px;
   font-weight:700;
   color:#333D47;
   margin-bottom:5px;
}
p{
   font-size:14px;
   line-height:20px;
}
.btn{
   padding:17px 40px !important;
   margin-bottom: 20px;
}

`;
const Image = styled.div`
margin-top:20px;
@media (max-width: 767px) {
display:inline-block;
}
`;
const Benifits = styled.div`
border-radius:6px;
background: linear-gradient(218.37deg, #0047AD 32.08%, #0A5ACB 98.3%);
padding:32px;
@media (max-width: 800px) {
   padding:15px;
}
h3{
   color:#fff;
   font-size:20px;
   line-height:32px;
   font-weight:700;
   margin-bottom:20px;
}
ul li {
   width: 100%;
   margin-bottom: 20px;
   float:left;
   color:#fff;
   font-size:14px;
   line-height:20px;
   font-weight:400;
   padding-left:30px;
   background-image:url(${Icon});
   background-position:top 3px left;
   background-repeat:no-repeat;
}
`;
const Schedule = styled.div`
padding:25px 0;
h3{
   color:#333D47;
   font-size:20px;
   line-height:32px;
   font-weight:700;
   margin-bottom:20px;
}
`;
const ScheduleItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px 15px;   
      align-items: start;  
    }
`;
const Item2 = styled.div`
border:1px solid #DDE1E9;
`
const Item = styled.div`
height:auto !important;
flex-direction:column;
display:flex;
border:1px solid #DDE1E9;
padding:20px;
border-radius: 6px;
h4{
   font-size:18px;
   line-height:23px;
   font-weight:700;
   color:#333D47;
   margin:5px 0;}
h5{
   font-size:16px;
   line-height:23px;
   font-weight:400;
   color:#333D47;
   margin-bottom:15px;
}
p{
   font-size:14px;
   line-height:20px;
   color:#333D47;
}
.accordion-item{
   border:none !important;
   }
.accordion-header{
   padding:0px !important;
   margin:0px !important;
}
.accordion-button{
   padding:0px !important;
   margin:0px 0px 0px !important;
   display:flex;
   flex-direction: column;
   justify-content: flex-start;
   border:2px solid red;
}

.accordion-button p{
   float:left;
   width:100%;
}
.accordion-button::after{
   position:absolute;
   bottom:7px;
   left:80px;
   width:16px;
   height:16px;
   background-size:inherit;
}
.accordion-button span.link{
   // border:2px solid red;
   color: #236DDE;
   font-weight: bold;
   text-decoration:underline;
   float:left;
   font-size: 14px;
   line-height: 30px;
   padding:0px;
   margin-bottom:0px;
   width:100%;
   position:relative;
}
.accordion-button span.link::after{
   contetn:'';
   position:absolute;
   left:0;
   bottom:0;
   width: 16px;
   height: 16px;
   float:left !important;
   margin-left:8px !important;
   background-size: 100%;
   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236C7884'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
.accordion-body{
   height:100% !important;
   padding:0px !important;
   margin:0px !important;  
}
   .accordion-button h4{
      
   }
   .accordion-button:not(.collapsed),
   .accordion-button:focus,
   .accordion-item:last-of-type .accordion-button.collapsed{
      background-color:transparent !important;
      border:none !important;
      box-shadow: none !important;
      border-radius:none !important;
   }
`;
const Addon = styled.div`
text-transform:uppercase;
color: #236DDE;
text-align: center;
font-weight: bold;
margin-bottom:px;
font-size: 11px;
line-height: 14px;
padding:5px 8px;
background: #ECF2FE;
border-radius: 4px;
width: 100%;
max-width: 65px;
`;
const PriceTable = styled.div`
// background-color:#fff;
// box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
// padding:24px 32px;
`;