import * as React from "react"
import styled from "styled-components";

import img from '../assets/images/servicebanner2.jpg';

import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Service = () => {
   const { ServiceLineDot, ServiceLineDot2, ServiceLineDot3, ServiceLineDot4} = useStaticQuery(
      graphql`
        query {
         ServiceLineDot: file(relativePath: {eq: "line-dot1.png"}) {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 81)
            }
          }
          ServiceLineDot2: file(relativePath: {eq: "line-dot2.png"}) {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 115)
            }
          }
          ServiceLineDot3: file(relativePath: {eq: "line-dot3.png"}) {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 94)
            }
          }
          ServiceLineDot4: file(relativePath: {eq: "line-dot4.png"}) {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 85)
            }
          }
         
        }
      `
    )
  return(
  <Wrapper>
     <Container>
        <ServiceBlock>
           <ServBox>
              <Image>
              <GatsbyImage image={getImage(ServiceLineDot)} />
              </Image>
              <Box>
                 <Title>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M17.2917 1.66699H2.70841C2.13224 1.66699 1.66675 2.13249 1.66675 2.70866V6.87533C1.66675 7.4515 2.13224 7.91699 2.70841 7.91699H17.2917C17.8679 7.91699 18.3334 7.4515 18.3334 6.87533V2.70866C18.3334 2.13249 17.8679 1.66699 17.2917 1.66699ZM2.70841 18.3337H12.0834V14.167H2.70841V18.3337ZM7.91675 13.1253H17.2917V8.95866H7.91675V13.1253ZM2.70841 8.95866V13.1253H6.87508V8.95866H2.70841ZM13.1251 18.3337H17.2917V14.167H13.1251V18.3337Z" fill="white"/>
                    </svg>
                    <h6>Structure</h6>
                 </Title>
                 <p>Handrails<br/>
                    Proper Spacing
                 </p>
              </Box>
           </ServBox>
           <ServBox>
              <Image>
              <GatsbyImage image={getImage(ServiceLineDot2)} />
              </Image>
              <Box>
                 <Title>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M15.3571 1.66699H4.64286C4.07454 1.66699 3.52949 1.88649 3.12763 2.27719C2.72576 2.66789 2.5 3.19779 2.5 3.75033L2.5 17.292C2.5 17.5683 2.61288 17.8332 2.81381 18.0286C3.01475 18.2239 3.28727 18.3337 3.57143 18.3337H16.4286C16.7127 18.3337 16.9853 18.2239 17.1862 18.0286C17.3871 17.8332 17.5 17.5683 17.5 17.292V3.75033C17.5 3.19779 17.2742 2.66789 16.8724 2.27719C16.4705 1.88649 15.9255 1.66699 15.3571 1.66699V1.66699ZM8.66071 3.75033C8.81965 3.75033 8.97501 3.79615 9.10715 3.88199C9.2393 3.96783 9.3423 4.08985 9.40312 4.2326C9.46394 4.37536 9.47985 4.53244 9.44885 4.68399C9.41784 4.83554 9.34131 4.97474 9.22892 5.084C9.11654 5.19326 8.97336 5.26767 8.81748 5.29781C8.66161 5.32796 8.50003 5.31249 8.3532 5.25336C8.20637 5.19423 8.08087 5.09409 7.99257 4.96562C7.90427 4.83714 7.85714 4.68609 7.85714 4.53158C7.85714 4.32438 7.9418 4.12566 8.0925 3.97915C8.2432 3.83264 8.44759 3.75033 8.66071 3.75033ZM4.64286 4.53158C4.64286 4.37706 4.68999 4.22601 4.77828 4.09754C4.86658 3.96906 4.99208 3.86893 5.13892 3.80979C5.28575 3.75066 5.44732 3.73519 5.6032 3.76534C5.75908 3.79548 5.90226 3.86989 6.01464 3.97915C6.12702 4.08841 6.20355 4.22761 6.23456 4.37916C6.26557 4.53071 6.24965 4.68779 6.18883 4.83055C6.12801 4.9733 6.02502 5.09532 5.89287 5.18116C5.76072 5.26701 5.60536 5.31283 5.44643 5.31283C5.23331 5.31283 5.02892 5.23052 4.87822 5.084C4.72752 4.93749 4.64286 4.73878 4.64286 4.53158ZM10 16.2503C9.04641 16.2503 8.11424 15.9754 7.32136 15.4603C6.52848 14.9453 5.9105 14.2132 5.54558 13.3567C5.18066 12.5001 5.08518 11.5576 5.27121 10.6483C5.45725 9.73905 5.91645 8.90382 6.59073 8.24826C7.26502 7.5927 8.12412 7.14626 9.05939 6.96539C9.99465 6.78453 10.9641 6.87736 11.8451 7.23214C12.7261 7.58693 13.4791 8.18774 14.0089 8.95859C14.5387 9.72945 14.8214 10.6357 14.8214 11.5628C14.8214 12.806 14.3135 13.9983 13.4093 14.8774C12.5051 15.7565 11.2787 16.2503 10 16.2503ZM11.2345 10.9229C11.0745 11.0841 10.8827 11.2123 10.6706 11.2999C10.4585 11.3875 10.2304 11.4327 10 11.4327C9.76956 11.4327 9.54148 11.3875 9.32938 11.2999C9.11728 11.2123 8.92551 11.0841 8.76551 10.9229C8.6067 11.0815 8.4173 11.2083 8.20811 11.2958C7.99892 11.3833 7.77405 11.4299 7.54633 11.4329C7.31862 11.436 7.09252 11.3953 6.88095 11.3134C6.66938 11.2315 6.47649 11.1098 6.31328 10.9554C6.27456 11.1558 6.25339 11.359 6.25 11.5628C6.25 12.5298 6.64509 13.4571 7.34835 14.1408C8.05161 14.8245 9.00544 15.2087 10 15.2087C10.9946 15.2087 11.9484 14.8245 12.6516 14.1408C13.3549 13.4571 13.75 12.5298 13.75 11.5628C13.7467 11.3587 13.7255 11.1551 13.6867 10.9544C13.5235 11.1088 13.3306 11.2305 13.119 11.3124C12.9075 11.3944 12.6814 11.435 12.4537 11.432C12.226 11.4289 12.0011 11.3823 11.7919 11.2948C11.5827 11.2073 11.3933 11.0806 11.2345 10.9219V10.9229Z" fill="white"/>
                    </svg>
                    <h6>Appliances</h6>
                 </Title>
                 <p>Washer<br/>
                    Age: 6 years<br/>
                    High Efficiency<br/>
                    No Recalls
                 </p>
              </Box>
           </ServBox>
           <ServBox>
              <Image>
              <GatsbyImage image={getImage(ServiceLineDot3)} />
              </Image>
              <Box>
                 <Title>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M15.2083 1.66699H4.79167C4.21647 1.66699 3.75 2.13346 3.75 2.70866V10.0003H16.25V2.70866C16.25 2.13346 15.7835 1.66699 15.2083 1.66699ZM3.75 12.0837C3.75 13.2344 4.68294 14.167 5.83333 14.167H7.91667V16.2503C7.91667 17.401 8.84961 18.3337 10 18.3337C11.1504 18.3337 12.0833 17.401 12.0833 16.2503V14.167H14.1667C15.3171 14.167 16.25 13.2344 16.25 12.0837V11.042H3.75V12.0837ZM10 15.4691C10.4313 15.4691 10.7812 15.8187 10.7812 16.2503C10.7812 16.6816 10.4313 17.0316 10 17.0316C9.56868 17.0316 9.21875 16.6816 9.21875 16.2503C9.21875 15.8187 9.56868 15.4691 10 15.4691Z" fill="white"/>
                    </svg>
                    <h6>Finishes</h6>
                 </Title>
                 <p>Finishes<br/>
                    Paint Color<br/>
                    Sherwin Williams<br/>
                    Color Code
                 </p>
              </Box>
           </ServBox>
           <ServBox>
              <Box>
                 <Title>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M11.6666 11.6663H8.33329C7.87314 11.6663 7.49996 12.0395 7.49996 12.4997V15.833C7.49996 16.2932 7.87314 16.6663 8.33329 16.6663H11.6666C12.1268 16.6663 12.5 16.2932 12.5 15.833V12.4997C12.5 12.0395 12.1268 11.6663 11.6666 11.6663ZM6.66663 4.16634C6.66663 3.70618 6.29345 3.33301 5.83329 3.33301H2.49996C2.0398 3.33301 1.66663 3.70618 1.66663 4.16634V7.49967C1.66663 7.95983 2.0398 8.33301 2.49996 8.33301H4.99267L6.89788 11.6674C7.18694 11.171 7.71871 10.833 8.33329 10.833H8.34058L6.66663 7.90358V6.66634H12.5V4.99967H6.66663V4.16634ZM17.5 3.33301H14.1666C13.7065 3.33301 13.3333 3.70618 13.3333 4.16634V7.49967C13.3333 7.95983 13.7065 8.33301 14.1666 8.33301H17.5C17.9601 8.33301 18.3333 7.95983 18.3333 7.49967V4.16634C18.3333 3.70618 17.9601 3.33301 17.5 3.33301Z" fill="white"/>
                    </svg>
                    <h6>Systems</h6>
                 </Title>
                 <p>Tankless<br/>
                    Brand<br/>
                    High Efficiency<br/>
                    No Defects
                 </p>
              </Box>
              <Image>
              <GatsbyImage image={getImage(ServiceLineDot4)} />
              </Image>
           </ServBox>
        </ServiceBlock>
        <Content>
           <Heading>This is a Heading</Heading>
           <p>Some language over here about<br/> all the great data we collect and<br/> how we can use this data to<br/> make suggestions</p>
        </Content>
     </Container>
  </Wrapper>
  );
  };
export default Service;  
        
const Wrapper = styled.div`
padding:60px 0 70px 0;
background-image: url(${img});
background-position:center;
background-repeat:no-repeat;
background-size: cover;
position:relative;
min-height:550px;
@media (max-width: 991px) {
  min-height:650px;
}
@media (max-width: 599px) {
  padding:40px 0;
  min-height:730px;
}
  &:before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0.684) 24.28%, rgba(0, 0, 0, 0) 84.07%);
    mix-blend-mode: normal;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
`;
const Container = styled.div`
max-width: 1230px;
margin: 0 auto;
padding: 0 15px;
`;
const ServiceBlock = styled.div`
position:relative;
`;
const ServBox = styled.div`
position:absolute;
left:22%;
top:0;
margin-top: 40px;
display: flex;
flex-direction: row;
@media only screen and (min-width:992px) and (max-width:1100px){
    left: 6%;
    margin-top: 0px;
  }
@media (max-width: 991px) {
  &:nth-child(1) {
    display:none;
  }
}
&:nth-child(2) {
  display:none;
  left:17%;
  top:0%;
  margin-top: 90px;
  span{
    margin-top: 65px;
  }
   @media (max-width: 991px) {
    margin-top: 200px;
    left:20%;
    display:flex;
  }
  @media (max-width: 700px) {
    margin-top: 230px;
    left:10%;
  }
  @media (max-width: 599px) {
    margin-top: 320px;
    left:0%;
  }
}
&:nth-child(3) {
  left:77%;
  top:0;
  margin-top: 100px;
   span{
    margin-top: 24px;
  }
  @media only screen and (min-width:992px) and (max-width:1100px){
    left: 70%;
    margin-top: 40px;
  }
  @media (max-width: 991px) {
    left:5%;
    margin-top: 0px;
  }
  @media (max-width: 700px) {
    left:0%;
  }
}
&:nth-child(4){
  left:50%;
  top:30%;
  margin-top: 180px;
  span{
    margin-top: 10px;
  }
  @media only screen and (min-width:992px) and (max-width:1100px){
    left: 40%;
    margin-top: 140px;
  }
  @media (max-width: 991px) {
    left:65%;
    margin-top: 100px;
  }
  @media (max-width: 700px) {
    left:55%;
    margin-top: 70px;
  }
  @media (max-width: 599px) {
    left:10%;
    margin-top: 160px;
  }
}
p{
  color:#fff;
  font-size:14px;
  line-height:20px;
  margin:0;
}
`;
const Box = styled.div`
background: rgba(0, 0, 0, 0.8);
border-radius: 4px;
padding:12px 16px;
width:150px;
`;
const Image = styled.span`
margin-top:45px;
`;
const Title = styled.div`
display:flex;
flex-direction:row;
margin-bottom:10px;
h6{
color:#fff;
letter-spacing: -0.08px;
font-size:14px;
padding-left:10px;
}
`;
const Content = styled.div`
position:absolute;
bottom:45px;
left:10.5%;
@media (max-width: 1100px) {
  left:5%;
}
@media (max-width: 991px) {
  bottom:30px;
}
p{
  color:#fff;
}
`;
const Heading = styled.h2`
color:#fff;
font-size: 32px;
line-height: 43px;
letter-spacing: -0.44px;
margin-bottom:10px;
`;

