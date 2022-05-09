import React, { useState } from "react"
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import DeserveSection from "../components/DeserveSection";
import SEO from "../components/seo"
import Blog from '../components/blog';
// import { Header } from '../components/Blog';
// import styled from "styled-components";

const BlogTemplate = (props) => {
  const {data, location} = props
  const {
    prismicPost: { data: post },
  } = data;
  const title = post.meta_title ? post.meta_title : 'Home Cloud'
  const desc = post.meta_description ? post.meta_description : 'Home Cloud Meta Desccription'

  if (!post) return null;
  return (
    <Layout>
      <SEO
          title={title}
          description={desc}
          location = {props.location.href}
       />
      <Wrapper>
        <Container>
            <Blog data={post} location={location}/>
        </Container>
      </Wrapper>
      <DeserveSection/>
    </Layout>
  );
};

export default BlogTemplate;

export const query = graphql`
  query BlogBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      data {
        meta_title
        meta_description
        title{
          html
          text 
        }
        publish_date
        excerpts {
          html
          text
        }   
        content {
          richText
          html
          text
        }
        featured_image {
          url
          gatsbyImageData(layout: FULL_WIDTH)
        }  
        author {
          document {
            ... on PrismicPostAuthor {
              id
              data {
                name {
                  text
                  html
                }
                image {
                  gatsbyImageData(layout: FIXED, width: 52)
                }
              }
            }
          }
        }      
      }
    }
  }
`;

const Wrapper = styled.div`
padding:80px 0 60px 0;
@media (max-width: 800px) {
padding:66px 0 40px 0;
}
`;
const Container = styled.div`
max-width: 840px;
margin: 0 auto;
padding: 0 15px;
position:relative;
`;
