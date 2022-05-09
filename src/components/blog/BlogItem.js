import React, { useState } from "react"
import styled from "styled-components";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import moment from 'moment';

const BlogItem = ({data}) => {
    console.log('Blog Data Item',data)
    const { title, excerpts, featured_image, publish_date } = data.node.data
    return(
        <BlogListItem>
               <BlogImage>
                    <Link to={data.node.uid}>
                        <GatsbyImage image={getImage(featured_image)} alt={title.text} />
                    </Link>
               </BlogImage>
               <Date>{moment(publish_date).format('MMM D, YYYY')}</Date>
               <h5>{title.text}</h5>
               <p>{excerpts.text}</p>
               <Link to={data.node.uid}>Read More</Link>
        </BlogListItem>
    )
}

const BlogListItem = styled.div`
margin-bottom:30px;
padding:0 12px;
@media (max-width: 758px) {
    padding:0px;
}
p{
font-size: 14px;
line-height: 20px;
margin:8px 0;
}
a{
text-decoration:underline;
font-size:14px;
letter-spacing: -0.07875px;
}
`;
const Date = styled.p`
font-size: 13px;
line-height: 19px;
letter-spacing: -0.073125px;
color: #333D47;
`;
const BlogImage = styled.div`
margin-bottom:20px;
@media (max-width: 758px) {
    display: flex;
    flex-direction: column;
 }
 .gatsby-image-wrapper{
     width:100%;
 }
img{
border-radius: 6px;
}
`;
export default BlogItem;