import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components";

import { StaticImage } from "gatsby-plugin-image"

const NotFoundPage = () => (
  <Layout page="home">
    <Seo title="404: Not found" />
       
    <BannerBlk>
                <StaticImage src="../assets/images/banner-404.jpg" alt=""   />

                <BannerText>
                    <Container>
                       
                            <h2>404</h2>
                            <h4>There's Nobody Home!</h4>
                            <p>We couldn't find the page you were looking for.</p>
                            <Link className="btn" to="/">Back to Homepage</Link>
                       
                    </Container>
                </BannerText>


            </BannerBlk>

  </Layout>
)

export default NotFoundPage;

const Container = styled.div`
max-width: 1250px;
margin: 0 auto;
padding: 0 15px;
`;

const BannerBlk = styled.div`
position:relative;
`

const BannerText = styled.div`
position:absolute;
 display:flex; align-items:center; justify-content:center; text-align:center;
left:0;bottom:0;top:0;
right:0;
h2{ color: #ccc;font-weight:700;font-size:120px; line-height:120px;margin:0;}
h4{color:#fff;font-weight: 700;  font-size: 32px;  line-height: 43px;letter-spacing: -0.44px;}
p{letter-spacing: -0.24px;font-size:24px;  line-height:30px;color:#fff;}

@media (max-width: 767px) {
  h2{font-size:60px; line-height:60px;}
  h4{font-size:25px; line-height:30px;}
  p{font-size:18px; line-height:24px;}
}
@media (max-width: 500px) {
position:inherit; background-color: #3c3c3c;padding: 25px 0;

}
`;




