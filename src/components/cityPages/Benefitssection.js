import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import 'react-tabs/style/react-tabs.css';
import DigitizeMyHome from "../popups/DigitizeMyHome"
const Benefits = ({data}) => {
let [benefitsStateImg, setBenefitsStateImg] = useState(data[0].items[0].image)
useEffect(
() => {
},
[benefitsStateImg],
)
const onImageChangeHandler = (image)=>{
   setBenefitsStateImg(image)  
}
const onMainTabImageChangeHandler = (index)=>{
setBenefitsStateImg(data[index].items[0].image)   
}
return(
<Wrapper id="benefits">
   <Container>
      <Tabs>
         <TopText>
            <h2>Our Benefits</h2>
            <TabList>
               {
               data && data.map((tab, index)=> 
               <Tab onClick={e=>onMainTabImageChangeHandler(index)}>{tab.primary.tab_heading}</Tab>
               )
               }
            </TabList>
         </TopText>
         {
         data && data.map((tab, index)=> {
         return(
         <TabPanel key={index}>
            <Grid>
               <Item>
                  <TabContent>
                     <Accordion defaultActiveKey={index+1}>
                        { tab.items && tab.items.map((tabItem, tabIndex)=>{
                        return(
                        <Accordion.Item eventKey={index+1+tabIndex} key={tabIndex+1}>
                           <Accordion.Header>
                              {tabIndex===0 && (
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M20 10C20 8.52734 19.0742 7.26953 17.7695 6.78125C18.3437 5.51563 18.1133 3.97266 17.0703 2.92969C16.0273 1.88672 14.4844 1.65625 13.2187 2.23047C12.7305 0.925781 11.4727 0 10 0C8.52734 0 7.26953 0.925781 6.78125 2.23047C5.51563 1.65625 3.96875 1.88672 2.92969 2.92969C1.88672 3.97266 1.65625 5.51563 2.23047 6.78125C0.925781 7.26953 0 8.52734 0 10C0 11.4727 0.925781 12.7305 2.23047 13.2187C1.65625 14.4844 1.88672 16.0312 2.92969 17.0703C3.96875 18.1094 5.51172 18.3477 6.78125 17.7695C7.26953 19.0703 8.52734 20 10 20C11.4727 20 12.7305 19.0742 13.2187 17.7695C14.4922 18.3477 16.0312 18.1094 17.0703 17.0703C18.1133 16.0273 18.3437 14.4844 17.7695 13.2187C19.0742 12.7305 20 11.4727 20 10V10ZM14.3438 8.27148L9.225 13.3492C9.05664 13.5164 8.78438 13.5152 8.61758 13.3469L5.65977 10.3652C5.49258 10.1969 5.49375 9.92461 5.66211 9.75742L6.67891 8.74883C6.84727 8.58164 7.11953 8.58281 7.28672 8.75117L8.9332 10.4109L12.7301 6.64453C12.8984 6.47734 13.1707 6.47852 13.3375 6.64688L14.3461 7.66367C14.5133 7.83242 14.5125 8.10469 14.3438 8.27148V8.27148Z"/>
                              </svg>
                              )}
                              {tabIndex===1 && (
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M19.8333 4.26165C19.7458 3.90892 19.3044 3.78939 19.0473 4.04642L16.1426 6.9511L13.4911 6.5093L13.0493 3.85775L15.954 0.953065C16.2126 0.694472 16.088 0.253848 15.7329 0.165567C13.8821 -0.293026 11.8442 0.201114 10.3977 1.6472C8.8493 3.19564 8.42313 5.44017 9.06766 7.39719L0.732127 15.7327C-0.244042 16.7089 -0.244042 18.2917 0.732127 19.2679C1.7083 20.244 3.29111 20.244 4.26728 19.2679L12.5958 10.9394C14.5536 11.5921 16.7938 11.1612 18.3524 9.60266C19.8004 8.15461 20.2938 6.1136 19.8333 4.26165ZM2.50009 18.4374C1.98252 18.4374 1.56259 18.0175 1.56259 17.4999C1.56259 16.9819 1.98252 16.5624 2.50009 16.5624C3.01767 16.5624 3.43759 16.9819 3.43759 17.4999C3.43759 18.0175 3.01767 18.4374 2.50009 18.4374Z" />
                              </svg>
                              )}
                              {tabIndex>1 && (
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M20 10C20 15.5229 15.5229 20 10 20C4.47714 20 0 15.5229 0 10C0 4.47714 4.47714 0 10 0C15.5229 0 20 4.47714 20 10ZM8.84331 15.2949L16.2627 7.87556C16.5146 7.62363 16.5146 7.21512 16.2627 6.96319L15.3503 6.05081C15.0983 5.79883 14.6898 5.79883 14.4379 6.05081L8.3871 12.1015L5.56214 9.27657C5.3102 9.02464 4.90169 9.02464 4.64972 9.27657L3.73734 10.189C3.4854 10.4409 3.4854 10.8494 3.73734 11.1013L7.93089 15.2949C8.18286 15.5469 8.59133 15.5469 8.84331 15.2949Z" />
                              </svg>
                              )}
                             <h4 onClick={e=>onImageChangeHandler(tabItem.image)}>{tabItem.heading}</h4>
                           </Accordion.Header>
                           <Accordion.Body>
                              <MobileImage>
                                 <GatsbyImage image={getImage(benefitsStateImg)} />
                              </MobileImage>
                              {tabItem.content}
                           </Accordion.Body>
                        </Accordion.Item>
                        )  
                        })}                               
                     </Accordion>
                  </TabContent>
               </Item>
               <Item>
                  <Image>
                     <GatsbyImage image={getImage(benefitsStateImg)} />
                  </Image>
               </Item>
            </Grid>
         </TabPanel>
         )
         })
         }   
         <DigitizeMyHome/>
      </Tabs>
   </Container>
</Wrapper>
);
};
export default Benefits;
        
const Wrapper = styled.div`
padding:120px 0;
text-align:center;
@media (max-width: 991px) {
    padding:70px 0;
}
@media (max-width: 767px) {
    padding:40px 0;
}
`;
const Container = styled.div`
content-visibility: auto;
contain-intrinsic-size: 500px;
max-width: 1100px;
margin: 0 auto;
padding: 0 15px;
`;
const TopText = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
border-bottom:1px solid #D0D4D8;;
padding-bottom:10px;
h2{
    margin:0
}
@media (max-width:767px) {
    text-align:center;
    flex-direction:column;
}
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 30px;
  margin:50px 0 80px 0;
  text-align:left;
    @media (min-width: 768px) {
        grid-template-columns: 6fr 6fr;
    }
    @media (max-width: 767px) {
      margin:50px 0;
     }
`;
const Item = styled.div`
`;
const TabContent = styled.div`
margin-bottom:30px;
.accordion-button h4{
   padding-left:20px !important;
      @media (max-width: 767px) {
         font-size:18px;
      }
}
.accordion-button{
padding:0;
margin-bottom: 15px;
   @media (max-width: 479px) {
      align-items:start;
   }
}
.accordion-body{
   padding:0;
}
.accordion-item{
   border:none !important;
   margin-bottom:30px;
}
.accordion-button::after{
   display:none;
      @media (max-width: 767px) {
         display:block;
      }
      @media (max-width: 479px) {
         margin-top:5px;
      }
}
.accordion-button:not(.collapsed),
.accordion-button:focus,
.accordion-item:last-of-type .accordion-button.collapsed{
   background-color:transparent !important;
   border:none !important;
   box-shadow: none !important;
   border-radius:none !important;
}
.accordion-button.collapsed svg
{
   fill:#333D47;
   @media (max-width: 479px) {
      margin-top:5px;
   }
}
.accordion-button:not(.collapsed) svg
{
   fill:#236DDE;
   @media (max-width: 479px) {
      margin-top:5px;
   }
}
.accordion-button:not(.collapsed) h4
{
   color: #236DDE;
}
`;
const Image = styled.div`
position:relative;
img{
    border-radius:6px;
}
@media (max-width: 767px) {
   display:none;
}
`;
const MobileImage = styled.div`
display:none;
@media (max-width: 767px) {
   display:block;
   margin-bottom:20px;
}
`;
