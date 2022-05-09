import React, { useState } from "react"
import styled from "styled-components";
import Accordion from 'react-bootstrap/Accordion'
import { useStaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image";
import img from '../../assets/images/faq-banner.png';
import { Link } from "gatsby";
const FaqSection = () => {
const { FaqData } = useStaticQuery(
   graphql`
      query {
         FaqData : allPrismicFaq(sort: {fields: data___faqorder, order: ASC}) {
            edges {
               node {
                  uid
                     data {
                     answer {
                        html
                        text
                     }
                     question {
                        html
                        text
                     }
                  }
               }
            }
         }
      }
   `
)
console.log('All Data', FaqData)
const [activeEventKey, setActiveEventKey] = useState(null);
const [activeIndexKey, setActiveIndexKey] = useState(0);
const onClickHandler = (val)=>{
if(val!==activeIndexKey)
{
setActiveEventKey(val)
setActiveIndexKey(val)
}
else
{
if(activeEventKey===activeIndexKey)
{
setActiveEventKey(null)   
}
else
{
setActiveEventKey(val)
setActiveIndexKey(val)
}    
}             
}
return(
<Wrapper>
   <Banner>
      <Container>
         <h1>FAQ</h1>
         <p>Everything you need to know about HomeCloud is here.<br/>
            You couldn’t find what you were looking for?
         </p>
         <p><a href="mailto:support@gethomecloud.com">Contact Support through our HomeCloud Chat</a></p>
      </Container>
   </Banner>
   <Container>
      <h3>Get Quick Answers to Frequently Asked Questions</h3>
      <FaqItem>
         <Accordion>
            { FaqData && FaqData.edges.map(({node}, index) => {
            return(
            <Accordion.Item eventKey={index}>
               <Accordion.Header>
                  <div dangerouslySetInnerHTML={{ __html: node.data.question.html }}></div>
               </Accordion.Header>
               <Accordion.Body>
                  <div dangerouslySetInnerHTML={{ __html: node.data.answer.html }}></div>
               </Accordion.Body>
            </Accordion.Item>
            )               
            })}
         </Accordion>
      </FaqItem>
   </Container>
</Wrapper>
);
};
export default FaqSection;

        
const Wrapper = styled.div`
padding:80px 0 60px 0;

@media (max-width: 800px) {
    padding:66px 0 40px 0;
}
`;
const Banner = styled.div`
width: 100%;
margin-bottom:56px;
background: linear-gradient(104.71deg, #0047AD 34.23%, #0A5ACB 97.16%);
padding:40px 0;
position:relative;
@media (max-width: 800px) {
   padding:60px 0;
}
@media (min-width: 801px) {
&:before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-image: url(${img});
  background-position:center;
  background-repeat:no-repeat;
  background-size: cover;
}
}
h1{
  color:#fff; 
  font-size:32px;
  line-height:43px;
  margin-bottom:15px;
}
p{
  color:#fff;
  margin-bottom:0px;
  @media (max-width: 480px) {
br{
   display:none;
}
  }
 }
p a{
  text-decoration: underline;
  font-weight:700;
   margin-top:12px;
   color:#fff;
   display:inline-block;
  }
`;
const Container = styled.div`
max-width: 830px;
margin: 0 auto;
padding: 0 15px;
position:relative;
`;
const FaqItem = styled.div`
margin-top:20px;
.accordion-body{
  color:#333D47; 
  font-size:14px;
  line-height:24px;
}
a{
  text-decoration: underline;
  font-weight:700;
  color: #236DDE;
  margin-top:20px;
  display:inline-block;
}
.Collapsible span{
   padding-left:10px;
   width:100%;
   border:2px solid red;
}
.accordion-item{
border:none !important;
border-bottom:1px solid #DDE1E9 !important;
padding:35px 0;
}
.accordion-header, .accordion-body{
   padding:0;
}
.accordion-body{
   margin-top:20px;
}
.accordion-button{
   padding:0 0 0 1.25rem;
}
.accordion-button h4{
   padding-left:15px !important;
   font-size:18px;
   line-height: 23px;
   letter-spacing: -0.108px;
}
.accordion-button::after{
   position:absolute;
   left:0px;
   top:5px;
   width: 16px;
   height: 16px;
   background-size: 100%;
   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236C7884'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
.accordion-button:not(.collapsed)::after {
   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236C7884'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
.accordion-button:not(.collapsed),
.accordion-button:focus,
.accordion-item:last-of-type .accordion-button.collapsed{
   background-color:transparent !important;
   border:none !important;
   box-shadow: none !important;
   border-radius:none !important;
}
.accordion-button:not(.collapsed) {
   color: #6C7884;
 }
`;


