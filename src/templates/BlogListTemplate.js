import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogIndex from '../components/blog/BlogIndex';
import DeserveSection from "../components/DeserveSection";
//import Pagination from '../components/Pagination';

const BlogListTemplate = (props) => {
  const { data, pageContext, path, location } = props
  const {
    allPrismicPost: { edges: blogsData },
  } = data;

  const title = 'Home Cloud Blog'
  const desc = 'Home Cloud Meta Desccription'

  if (!blogsData) return null;
  return (
    <Layout>
      <SEO
          title={title}
          description={desc}
          location = {props.location.href}
       /> 
      <BlogIndex data={blogsData}/>   
      <DeserveSection/>
    </Layout>
  );
};

BlogListTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogListTemplate;

export const data = graphql`
  query($skip: Int!, $limit: Int!) {
    allPrismicPost(
      sort: { fields: last_publication_date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          uid
          id
          data {
            title {
              html
              text
            }
            publish_date
            excerpts {
              html
              text
            }
            featured_image {
              gatsbyImageData(layout: CONSTRAINED)
              url
            }
          }
        }
      }
    }
  }
`;
