import React from 'react'
import styled from 'styled-components';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
const Usertype = () => {
return(
    <>
    <ModalBlock>
               <h3>User Type</h3>
               <Popup>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M13.8925 0.33986L7.99994 6.23242L2.10738 0.339861C1.9446 0.177079 1.68091 0.177079 1.51813 0.339861L0.339617 1.51837C0.176835 1.68115 0.176835 1.94485 0.339617 2.10763L6.23217 8.00018L0.339616 13.8927C0.176834 14.0555 0.176834 14.3192 0.339616 14.482L1.51813 15.6605C1.68091 15.8233 1.9446 15.8233 2.10738 15.6605L7.99994 9.76795L13.8925 15.6605C14.0553 15.8233 14.319 15.8233 14.4818 15.6605L15.6603 14.482C15.823 14.3192 15.823 14.0555 15.6603 13.8927L9.76771 8.00018L15.6603 2.10763C15.823 1.94484 15.823 1.68115 15.6603 1.51837L14.4818 0.33986C14.319 0.177078 14.0553 0.177078 13.8925 0.33986Z" fill="#333D47"/>
                  </svg>
                  <StaticImage src="../../assets/images/home-user.png" alt="" />
                  <h4>Almost there!</h4>
                  <p>To get your HomeCloud Certification scheduled let us know the reason you’re using our service.</p>
                  <Link to="/" className="btn">
                  Buying</Link>
                  <Link to="/" className="btn btn1">
                  Selling / Maintaining
                  </Link>
               </Popup>
            </ModalBlock>
            <ModalBlock>
               <h3>User Type</h3>
               <Popup>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M13.8925 0.33986L7.99994 6.23242L2.10738 0.339861C1.9446 0.177079 1.68091 0.177079 1.51813 0.339861L0.339617 1.51837C0.176835 1.68115 0.176835 1.94485 0.339617 2.10763L6.23217 8.00018L0.339616 13.8927C0.176834 14.0555 0.176834 14.3192 0.339616 14.482L1.51813 15.6605C1.68091 15.8233 1.9446 15.8233 2.10738 15.6605L7.99994 9.76795L13.8925 15.6605C14.0553 15.8233 14.319 15.8233 14.4818 15.6605L15.6603 14.482C15.823 14.3192 15.823 14.0555 15.6603 13.8927L9.76771 8.00018L15.6603 2.10763C15.823 1.94484 15.823 1.68115 15.6603 1.51837L14.4818 0.33986C14.319 0.177078 14.0553 0.177078 13.8925 0.33986Z" fill="#333D47"/>
                  </svg>
                  <h4>Calendly website modal</h4>
               </Popup>
            </ModalBlock>
    </>
);
}
export default Usertype;

const ModalBlock = styled.div`
margin-bottom:30px;
h3{
    margin-bottom:30px;
}
`;
const Popup = styled.div`
max-width:500px;
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
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
