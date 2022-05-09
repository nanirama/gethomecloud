import React from "react"
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import DigitizeMyHome from "../popups/DigitizeMyHome"

const Bannersection = ({data, features}) => {
    
    const { title, sub_heading, description, featured_image } = data.data
    const { items } = features ? features[0] : []
    console.log('hero section', items)
return(
<Wrapper bgimg={featured_image.url}>
   <BannerContent>
      <Container>
         <ContentBlock>
            <LeftBlock>
               <h2>{sub_heading}</h2>
               <p>{description.text}</p>
               <DigitizeMyHome/>
            </LeftBlock>
            <RightBlock>
               <Grid>
                   { items && items.map((item, index)=>{
                       return(
                        <Item>
                            <SubBox>
                            <GatsbyImage image={getImage(item.icon)} alt={item.heading} />
                           
                            <h3>{item.heading}</h3>
                            <p>{item.short_text}</p>
                            </SubBox>
                        </Item>
                       )
                   })}                
               </Grid>
            </RightBlock>
         </ContentBlock>
      </Container>
   </BannerContent>
</Wrapper>
);
};
export default Bannersection;

const Wrapper = styled.div`
background-image: url(${props => props.bgimg});
background-position:center;
background-repeat:no-repeat;
background-size: cover;
min-height:800px;
position:relative;
@media (max-width: 991px) {
    min-height:700px;
}
`;
const Container = styled.div`
max-width: 1230px;
margin: 0 auto;
padding: 0 15px;
`;
const BannerContent = styled.div`
position:absolute;
bottom:60px;
left:0;
right:0;
`;
const ContentBlock = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
@media (max-width: 991px) {
    flex-direction:column-reverse;
}
`;
const LeftBlock = styled.div`
display: flex;
flex-direction: column;
padding:32px;
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
border-radius: 6px;
width:460px;
@media (max-width: 991px) {
    position:absolute;
    bottom:-150px;
}
@media (max-width: 550px) {
 width:90%;
}
@media (max-width: 479px) {
  padding:20px;
}
h2{
  color: #236DDE;
  font-size:28px;
  line-height:34px;
  @media (min-width: 768px) and  (max-width:991px)  {
    font-size:26px;
    line-height:30px;
  }
  @media (max-width: 479px) {
    margin-bottom:15px;
    font-size: 26px;
    line-height: 32px;
  }
}
@media (max-width: 479px) {
    p{
        font-size:14px;
    }
}
`;
const RightBlock = styled.div`
display:flex;
margin-left:15px;
@media (max-width: 991px) {
    flex-direction:row;
    margin-left:0px;
    position:absolute;
    bottom:200px;
}
@media (max-width: 479px) {
    bottom:165px;
}
@media (max-width: 425px) {
    bottom:200px;
}
@media (max-width: 389px) {
    bottom:220px;
}
@media (max-width: 345px) {
    bottom:245px;
}
@media (max-width: 319px) {
    bottom:265px;
}
`;
const SubBox = styled.div`
background: rgba(0, 0, 0, 0.6);
border-radius: 6px;
padding:25px;
text-align:center;
display:flex;
flex-direction:column;
align-items:center;
@media (min-width: 992px) and  (max-width:1160px)  {
    padding:20px;
}
@media (max-width: 991px) {
    display:flex;
    flex-direction:row;
    align-items:center;
}
@media (max-width: 479px) {
    padding:20px 15px;
}
@media (max-width: 319px) {
    paddin:10px;
}
h3{
color: #fff;
font-size:28px;
line-height:34px; 
margin:14px 0 8px 0;  
    @media (min-width: 992px) and  (max-width:1160px)  {
        font-size:20px;
    }
    @media (max-width: 991px) {
        font-size:16px;
        line-height:24px; 
        margin: 0 5px 0 15px;
    }
    @media (max-width: 345px) {
        font-size:15px;
    }
    @media (max-width: 319px) {
        margin: 0 5px 0 8px;
        font-size:14px;
    }
}
p{
    color:#fff;
    margin:0;
    @media (max-width: 345px) {
    font-size:13px;
    }
    @media (max-width: 319px) {
        font-size:12px;
    }
}
`;
const Grid = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 10px 20px;
    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
const Item = styled.div`
`;