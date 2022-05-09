import React, { useState } from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import BlogItem from "./BlogItem";
const BlogIndex = ({data}) => {
return(
<Wrapper>
   <Banner>
      <Container>
         <h1>Blog</h1>
         {/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking.</p> */}
      </Container>
   </Banner>
   <Container>
            <ResponsiveMasonry columnsCountBreakPoints={{600: 1, 758: 2, 900: 2}}>
                <Masonry>
                   { data && data.map((item,index)=> <BlogItem key={index} data={item}/>)}
                </Masonry>
            </ResponsiveMasonry>
   </Container>
</Wrapper>
);
};
export default BlogIndex;

const Wrapper = styled.div`
padding:80px 0 60px 0;
@media (max-width: 800px) {
   padding:66px 0 40px 0;
}
`;
const Banner = styled.div`
width: 100%;
margin-bottom:55px;
background: linear-gradient(104.71deg, #0047AD 34.23%, #0A5ACB 97.16%);
padding:40px 0;
@media (max-width: 800px) {
   padding:60px 0;
}
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
max-width: 830px;
margin: 0 auto;
padding: 0 15px;
position:relative;
`;
const Grid = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 10px 30px;
@media (min-width: 768px) {
grid-template-columns: repeat(2, 1fr);
}
`;
const Item = styled.div`
`;
// const BlogItem = styled.div`
// margin-bottom:30px;
// p{
// font-size: 14px;
// line-height: 20px;
// margin:8px 0;
// }
// a{
// text-decoration:underline;
// font-size:14px;
// letter-spacing: -0.07875px;
// }
// `;
const Date = styled.p`
font-size: 13px;
line-height: 19px;
letter-spacing: -0.073125px;
color: #333D47;
`;
const BlogImage = styled.div`
margin-bottom:20px;
img{
border-radius: 6px;
}
`;
