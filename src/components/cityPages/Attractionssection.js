import React from "react"
import styled from "styled-components";
import { PrismicRichText } from '@prismicio/react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Attractionssection = ({data}) => {
   const { BenefitsHeading, items } = data[0]
return(
<Wrapper>
   <Container>
      <Heading>{BenefitsHeading.heading}</Heading>
      {BenefitsHeading.description1 && <div dangerouslySetInnerHTML={{ __html: BenefitsHeading.description1.html }} className="w-100" ></div>}
      <Grid>
         { items && items.map((item, index)=>{
            return(
               <Item>
                  <SubBox>
                     <Image>
                     <GatsbyImage image={getImage(item.image)} alt={item.heading} />
                     </Image>
                     <TextBlk>
                        <h5>{item.heading}</h5>
                        <p>{item.description1}</p>                       
                       
                        <a href={item.link} target="_blank">
                        See More 
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M11.7917 6.99967H11.375C11.3198 6.99967 11.2668 7.02162 11.2277 7.06069C11.1886 7.09976 11.1667 7.15275 11.1667 7.20801V12.4163C11.1667 12.5268 11.1228 12.6328 11.0446 12.711C10.9665 12.7891 10.8605 12.833 10.75 12.833H1.58334C1.47284 12.833 1.36686 12.7891 1.28872 12.711C1.21058 12.6328 1.16668 12.5268 1.16668 12.4163V3.24967C1.16668 3.13917 1.21058 3.03319 1.28872 2.95505C1.36686 2.87691 1.47284 2.83301 1.58334 2.83301H6.79168C6.84693 2.83301 6.89992 2.81106 6.93899 2.77199C6.97806 2.73292 7.00001 2.67993 7.00001 2.62467V2.20801C7.00001 2.15275 6.97806 2.09976 6.93899 2.06069C6.89992 2.02162 6.84693 1.99967 6.79168 1.99967H1.58334C1.25182 1.99967 0.933881 2.13137 0.69946 2.36579C0.46504 2.60021 0.333344 2.91815 0.333344 3.24967L0.333344 12.4163C0.333344 12.7479 0.46504 13.0658 0.69946 13.3002C0.933881 13.5346 1.25182 13.6663 1.58334 13.6663H10.75C11.0815 13.6663 11.3995 13.5346 11.6339 13.3002C11.8683 13.0658 12 12.7479 12 12.4163V7.20801C12 7.15275 11.9781 7.09976 11.939 7.06069C11.8999 7.02162 11.8469 6.99967 11.7917 6.99967ZM13.3542 0.333008L9.81251 0.341862C9.72963 0.341862 9.65014 0.374786 9.59154 0.433391C9.53293 0.491996 9.50001 0.571482 9.50001 0.654362V0.914779C9.50001 0.997659 9.53293 1.07714 9.59154 1.13575C9.65014 1.19435 9.72963 1.22728 9.81251 1.22728L12.1563 1.21842L12.1745 1.23691L3.75808 9.65228C3.72895 9.68131 3.70583 9.71581 3.69006 9.75379C3.67429 9.79178 3.66617 9.8325 3.66617 9.87363C3.66617 9.91476 3.67429 9.95549 3.69006 9.99347C3.70583 10.0315 3.72895 10.066 3.75808 10.095L3.90548 10.2424C3.93451 10.2715 3.96901 10.2946 4.00699 10.3104C4.04498 10.3262 4.0857 10.3343 4.12683 10.3343C4.16796 10.3343 4.20869 10.3262 4.24667 10.3104C4.28466 10.2946 4.31915 10.2715 4.34819 10.2424L12.7628 1.82624L12.7813 1.84447L12.7724 4.18822C12.7724 4.2711 12.8053 4.35058 12.8639 4.40919C12.9225 4.46779 13.002 4.50072 13.0849 4.50072H13.3453C13.4282 4.50072 13.5077 4.46779 13.5663 4.40919C13.6249 4.35058 13.6578 4.2711 13.6578 4.18822L13.6667 0.645508C13.6667 0.562628 13.6338 0.483142 13.5751 0.424537C13.5165 0.365932 13.4371 0.333008 13.3542 0.333008V0.333008Z" fill="#236DDE"/>
                        </svg>
                        </a>
                     </TextBlk>
                  </SubBox>
               </Item>
            )
         })}
      </Grid>
   </Container>
</Wrapper>
);
};
export default Attractionssection;

const Wrapper = styled.div`
background: #F6F7F9;
padding:120px 0;
@media (max-width: 991px) {
  padding:150px 0 70px 0;
}
@media (max-width: 767px) {
  padding:150px 0 40px 0;
  }
`;
const Container = styled.div`
max-width: 1100px;
margin: 0 auto;
padding: 0 15px;
.w-100{
  
}
`;
const Heading = styled.h2`
font-size: 32px;
line-height: 43px;
text-align:center;
margin-bottom:48px;
@media (max-width: 767px) {
  margin-bottom:24px;
  font-size: 26px;
  line-height: 34px;
}
`;
const Grid = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 10px 20px;
margin-top:50px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Item = styled.div`
`;
const SubBox = styled.div`
@media (max-width: 767px) {
  display:flex;
  flex-direction:row;
  margin: 0 auto 10px auto;
  width: 80%;
}
@media (max-width: 599px) {
  width:90%;
}
@media (max-width: 479px) {
  width:100%;
}
`;
const Image = styled.div`
display:flex;
flex-direction:column;
border-top-left-radius: 6px;
border-top-right-radius: 6px;
@media (max-width: 767px) {
  border-bottom-left-radius: 6px;
  border-top-right-radius: 0px;
  width:38%;
  div{
    height:200px;
  }
}
`;
const TextBlk = styled.div`
padding:20px;
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
@media (max-width: 767px) {
  border-bottom-left-radius: 0px;
  border-top-right-radius: 6px;
  width:62%;
}
@media (max-width: 479px) {
  padding:20px 15px;
}
h5, p{
  margin-bottom:12px;
}
a{
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.07875px;
  text-decoration-line: underline;
  svg{
    margin-left:8px;
  }
}

@media (max-width: 800px) {
p{
  font-size:15px;
}
}
@media (max-width: 370px) {
  h5{
    font-size:15px;
    line-height:20px;
  }
  p{
    font-size:14px;
    line-height:18px;
  }
}
`;