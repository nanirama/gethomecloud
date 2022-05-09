import React from 'react'
import styled from 'styled-components';
import { Button } from 'react-bootstrap'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
const Usertype = ({setFormStep, onHide }) => {
return(
   <Wrapper>
<Container>
<Popup>
   <StaticImage src="../../../assets/images/home-user.png" alt="" />
   <h4>Almost there!</h4>
   <p>To get your HomeCloud Certification scheduled let us know the reason you’re using our service.</p>
   <Link to="/request-service/" className="btn">Buying</Link>
   <a href="https://calendly.com/homecloud_rdu" target="_blank" className="btn btn1">Selling / Maintaining</a>
</Popup>
</Container>
</Wrapper>
);
}
export default Usertype;

const Wrapper = styled.div`
padding:150px 0 90px 0;
text-align:center;
@media (max-width: 991px) {
   padding:120px 0 70px 0;
}
@media (max-width: 767px) {
   padding:120px 0 50px 0;
}
`;
const Container = styled.div`
content-visibility: auto;
contain-intrinsic-size: 500px;
max-width: 1100px;
margin: 0 auto;
padding: 25px;
display: flex;
justify-content: center;
`;
const Popup = styled.div`
width:480px;
max-width:100%;
background: #FFFFFF;
box-shadow: -1px 1px 22px 0px rgba(0,0,0,0.25);
-webkit-box-shadow: -1px 1px 22px 0px rgba(0,0,0,0.25);
-moz-box-shadow: -1px 1px 22px 0px rgba(0,0,0,0.25);
border-radius: 8px;
display: flex;
position:relative;
padding:32px;
flex-direction: column;
align-items: center;
@media (max-width: 599px) {
    padding:25px 15px;
}
h4{
   margin:32px 0 12px 0;
}
svg{
   position:absolute;
   right:32px;
   top:36px;
   cursor:pointer;
    @media (max-width: 599px) {
        right:15px;
    }
}
.btn{
   width:100%;
}
input{
   border: 1px solid #DDE1E9;
   width: 100%;
   line-height: 48px;
   padding: 0 15px;
   border-radius: 4px;
   margin-bottom: 24px;
   color: #6C7884;
}
.btn1{
   background: #ECF2FE;
   border-radius: 4px;
   color: #236DDE;
   width:100%;
   margin-top:15px;
}
`;
