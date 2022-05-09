import React, { useState } from "react"
import styled from "styled-components";
import { PrismicRichText } from '@prismicio/react'
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import moment from 'moment';
import AuthorInfo from "./AuthorInfo";
const Blog = ({data, location}) => {
const { title, excerpts, content, featured_image, author, publish_date } = data
const stwitterHandle = "_MsLinda";
return(
    <BlogSection>
              <BackText>
                <Link to="/blog">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.22395 13.5057L7.4344 13.2953C7.57386 13.1558 7.57386 12.9297 7.4344 12.7902L2.12207 7.47783H13.3092C13.5064 7.47783 13.6663 7.31792 13.6663 7.12069V6.82307C13.6663 6.62584 13.5064 6.46593 13.3092 6.46593H2.12207L7.4344 1.1536C7.57386 1.01414 7.57386 0.788006 7.4344 0.648511L7.22395 0.438094C7.08449 0.29863 6.85836 0.29863 6.71889 0.438094L0.437606 6.71935C0.298142 6.85882 0.298142 7.08495 0.437606 7.22444L6.71889 13.5057C6.85836 13.6452 7.08449 13.6452 7.22395 13.5057Z" fill="#6C7884"/>
                </svg>
                Back
                </Link>
              </BackText>
              <Date>{moment(publish_date).format('MMM D, YYYY')}</Date>
              <Heading>{title.text}</Heading>
              <Paragraph>{excerpts.text}</Paragraph>
              <PostInfo>
                <AuthorInfo data={author}/>
                {/* <Share socialConfig={{ witter : stwitterHandle,
                            config: {
                              url: location.href,
                              title: title.text,
                            },
                          }}
                /> */}
              </PostInfo>
              <BlogImage>
                    <GatsbyImage image={getImage(featured_image)} alt={title.text} />
              </BlogImage>
              {/* <div dangerouslySetInnerHTML={{ __html: content.html }} /> */}
              <Container>
                 <PrismicRichText
                    field={content.richText}
                    className="richtext-content"
                    components={{
                      heading1: ({ children }) => <Heading1>{children}</Heading1>,
                      heading2: ({ children }) => <Heading2>{children}</Heading2>,
                      heading3: ({ children }) => <Heading3>{children}</Heading3>,
                      heading3: ({ children }) => <Heading4>{children}</Heading4>,
                      heading5: ({ children }) => <Heading5>{children}</Heading5>,
                      heading6: ({ children }) => <Heading6>{children}</Heading6>,
                      paragraph: ({ children }) => <RichTextParagraph>{children}</RichTextParagraph>,
                    }}
                />
             </Container>
          </BlogSection>
);
};
export default Blog;

const BlogSection = styled.div`
padding:40px 0 0 0;
p{
font-size:14px;
line-height: 20px;
letter-spacing: -0.07875px;
}
`;
const BackText = styled.div`
margin-bottom:30px;
a{
color: #6C7884;
font-weight: 700;
font-size: 14px;
line-height: 20px;
letter-spacing: -0.07875px;
svg{
margin-right:5px;
}
}
`;
const Date = styled.p`
font-size: 14px;
line-height: 20px;
letter-spacing: -0.073125px;
margin-bottom: 5px;
`;
const Heading = styled.h2`
font-size:32px;
line-height: 43px;
letter-spacing: -0.44px;
@media (max-width: 599px) {
   font-size:24px;
   line-height: 30px;  
}
`;
const Paragraph = styled.p`
color: #8C96A1;
margin-bottom:25px;
font-size:15px;
`;
const PostInfo = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
@media (max-width: 479px) {
flex-direction:column;
align-items:self-start;
}
`;


const BlogImage = styled.div`
margin:55px 0;
img{
border-radius: 6px;
}
@media (max-width: 767px) {
margin:32px 0;
}
`;

const Container = styled.div`
margin: 0 auto;
position: relative;
& > ul{
  padding-left:20px !important;
  margin-bottom:18px;
  width:100%;
  float:left;
}
& > ul > li{
  font-size: 14px;
  line-height: 23px;
  letter-spacing: -0.07875px;
  font-weight: 400;
  color: #333D47;
  list-style-type: disc;
  font-family: 'Nunito Sans',sans-serif;
  width:100%;
& > strong{
  font-size: 14px;
  line-height: 23px;
  letter-spacing: -0.07875px;
  color: #333D47;
  font-weight: 700;
}
& > em{
  font-size: 14px;
  line-height: 23px;
  letter-spacing: -0.07875px;
  color: #333D47;
  font-style:italic;
  font-weight: 400;
}
}
`;
const Heading1 = styled.h1`
font-family: 'Nunito Sans',sans-serif;
font-size: 24px;
line-height: 30px;
color: #333D47;
margin:8px 0px !important;
letter-spacing:-0.24px;
font-weight: 700;
& > em{
  font-size: 24px;
  line-height: 30px;
  color: #333D47;
  margin:8px 0px !important;
  font-weight: 700;
  letter-spacing:-0.24px;
  font-style:italic;
}
& > strong{
  font-size: 24px;
  line-height: 30px;
  color: #333D47;
  margin:8px 0px !important;
  font-weight: 700;
  letter-spacing:-0.24px;
}
`;
const Heading2 = styled.h2`
font-family: 'Nunito Sans',sans-serif;
font-size: 24px;
line-height: 30px;
color: #333D47;
margin:8px 0px !important;
letter-spacing:-0.24px;
font-weight: 700;
& > em{
  font-size: 24px;
  line-height: 30px;
  color: #333D47;
  margin:8px 0px !important;
  font-weight: 700;
  letter-spacing:-0.24px;
  font-style:italic;
}
& > strong{
  font-size: 24px;
  line-height: 30px;
  color: #333D47;
  margin:8px 0px !important;
  font-weight: 700;
  letter-spacing:-0.24px;
}
`;
const Heading3 = styled.h3`
font-family: 'Nunito Sans',sans-serif;
font-size: 24px;
line-height: 30px;
color: #333D47;
margin-bottom:8px !important;
font-weight: 500;
letter-spacing: -0.24px;
& > em{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 24px;
  line-height: 30px;
  color: #333D47;
  margin-bottom:8px !important;
  font-weight: 500;
  letter-spacing:-0.24px;
  font-style:italic;
}
& > strong{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 24px;
  line-height: 30px;
  color: #333D47;
  margin-bottom:8px !important;
  font-weight: 700;
  letter-spacing:-0.24px;
}
`;
const Heading4 = styled.h4`
font-family: 'Nunito Sans',sans-serif;
font-size: 20px;
line-height: 30px;
color: #333D47;
margin-bottom:8px !important;
letter-spacing:-0.24px;
font-weight: 500;
& > em{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 20px;
  line-height: 30px;
  color: #333D47;
  margin-bottom:8px !important;
  font-weight: 500;
  letter-spacing:-0.24px;
  font-style:italic;
}
& > strong{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 20px;
  line-height: 30px;
  color: #333D47;
  margin-bottom:8px !important;
  font-weight: 500;
  letter-spacing:-0.24px;
}
`;
const Heading5 = styled.h5`
font-family: 'Nunito Sans',sans-serif;
font-size: 18px;
line-height: 23px;
color: #333D47;
letter-spacing: -0.108px;
margin:0 0 8px 0 !important;
font-weight: 500;
& > em{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.108px;
  color: #333D47;
  font-weight: 500;
}
& > strong{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.108px;
  color: #333D47;
  font-weight: 700;
}
& > em strong{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.108px;
  color: #333D47;
  font-weight: 700;
}
`;
const Heading6 = styled.h6`
font-family: 'Nunito Sans',sans-serif;
font-size: 16px;
line-height: 19px;
color: #333D47;
margin-bottom:8px !important;
font-weight: 500;
letter-spacing: -0.108px;
& > em{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #333D47;
  margin-bottom:8px !important;
  font-weight: 500;
  letter-spacing: -0.108px;
  font-style:italic;
}
& > strong{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #333D47;
  margin-bottom:8px !important;
  font-weight: 700;
  letter-spacing: -0.108px;
}
`;
const RichTextParagraph = styled.p`
width:100%;
font-family: 'Nunito Sans',sans-serif;
font-size: 14px;
line-height: 22px;
letter-spacing: -0.07875px;
font-weight: 400;
color: #333D47;
margin-bottom:18px;
// margin:6px 0px !important;
// padding:7px 0px !important;

& > strong{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.07875px;
  color: #333D47;
  font-weight: 700;
}
& > em{
  font-family: 'Nunito Sans',sans-serif;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.07875px;
  color: #333D47;
  font-style:italic;
}

& > a{
       color:#236DDE;
       text-decoration: underline;       
    }
`;