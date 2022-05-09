import * as React from "react"
import Layout from "../components/layout"
import DeserveSection from "../components/DeserveSection";
import BlogSection from "../components/blog/blogSection";

const Blog = () => (
    <Layout>
      <BlogSection/>   
      <DeserveSection/>
    </Layout>
  )
  
  export default Blog