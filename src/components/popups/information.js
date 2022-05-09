import React from 'react'
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";
const Information = () => {
return(
    <>
    <ModalBlock>
               <h3>Information</h3>
               <Popup>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M13.8925 0.33986L7.99994 6.23242L2.10738 0.339861C1.9446 0.177079 1.68091 0.177079 1.51813 0.339861L0.339617 1.51837C0.176835 1.68115 0.176835 1.94485 0.339617 2.10763L6.23217 8.00018L0.339616 13.8927C0.176834 14.0555 0.176834 14.3192 0.339616 14.482L1.51813 15.6605C1.68091 15.8233 1.9446 15.8233 2.10738 15.6605L7.99994 9.76795L13.8925 15.6605C14.0553 15.8233 14.319 15.8233 14.4818 15.6605L15.6603 14.482C15.823 14.3192 15.823 14.0555 15.6603 13.8927L9.76771 8.00018L15.6603 2.10763C15.823 1.94484 15.823 1.68115 15.6603 1.51837L14.4818 0.33986C14.319 0.177078 14.0553 0.177078 13.8925 0.33986Z" fill="#333D47"/>
                  </svg>
                  <h4>We need a little of Information</h4>
                  <TextBlock>
                      <p>Please provide your information below and we’ll contact the current homeowner to schedule the Certification at a convenient time for them.</p>
                  </TextBlock>
                  <FormBlk>
                  <Form>
                      <label>Service Type</label>
                      <select>
                          <option>
                          Select all the services that may apply
                          </option>
                          <option>Certification</option>
                          <option>Radon Test</option>
                          <option>Wood Destroying Insects</option>
                          <option>Well Water</option>
                      </select>
                     <label>Your First Name</label>
                     <input type="text" placeholder="First Name" />
                     <label>Your Last Name</label>
                     <input type="text" placeholder="Last Name" />
                     <label>Your Email Address</label>
                     <input type="text" placeholder="Email Address" />
                     <label>Current Homeowner Email*</label>
                     <input type="text" placeholder="Email Address" />
                     <label>Selling Real Estate Agent Email</label>
                     <input type="text" placeholder="Email Address" />
                     </Form>
                     <FormBtn>
                     <Button to="/" className="btn">
                     Submit</Button>
                     </FormBtn>
                     </FormBlk>
               </Popup>
            </ModalBlock>
            <ModalBlock>
               <h3>Success</h3>
               <Popup>
                   <Success>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M13.8925 0.33986L7.99994 6.23242L2.10738 0.339861C1.9446 0.177079 1.68091 0.177079 1.51813 0.339861L0.339617 1.51837C0.176835 1.68115 0.176835 1.94485 0.339617 2.10763L6.23217 8.00018L0.339616 13.8927C0.176834 14.0555 0.176834 14.3192 0.339616 14.482L1.51813 15.6605C1.68091 15.8233 1.9446 15.8233 2.10738 15.6605L7.99994 9.76795L13.8925 15.6605C14.0553 15.8233 14.319 15.8233 14.4818 15.6605L15.6603 14.482C15.823 14.3192 15.823 14.0555 15.6603 13.8927L9.76771 8.00018L15.6603 2.10763C15.823 1.94484 15.823 1.68115 15.6603 1.51837L14.4818 0.33986C14.319 0.177078 14.0553 0.177078 13.8925 0.33986Z" fill="#333D47"/>
                  </svg>
                  <StaticImage src="../../assets/images/success.png" alt="" />
                     <h4>We are set!</h4>
                     <p>Thanks for joining our Waitlist.</p>
                     <ul>
                         <li><span>1</span>We will Schedule the Home Certification</li>
                         <li><span>2</span>We will send you the Inspection’s Results</li>
                         <li><span>3</span>We will bill you when the service is complete</li>
                     </ul>
                     </Success>
               </Popup>
               </ModalBlock>
          
    </>
);
}
export default Information;

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
padding:0px;
flex-direction: column;
align-items: center;
h4{
width:100%;
text-align:left;
padding:32px;
@media (max-width: 599px) {
padding:25px 15px;
}
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
line-height: 40px;
padding: 0 15px;
border-radius: 4px;
margin-bottom: 24px;
color: #6C7884;
font-size: 14px;
font-style:italic;
}
select{
    border: 1px solid #DDE1E9;
width: 100%;
line-height: 40px;
padding: 0 15px;
border-radius: 4px;
margin-bottom: 24px;
color: #6C7884;
font-size: 14px;
font-style:italic;
height: 40px;
background-color: transparent;
}
`;
const TextBlock = styled.div`
padding:32px;
padding-bottom:0;
border-top:1px solid #DDE1E9;
@media (max-width: 599px) {
    padding:25px 15px;
}
p{
    background: #F6F7F9;
    border-radius: 6px;
    padding:12px;
    text-align:left;
    font-size: 14px;
    line-height: 20px;
    margin:0;
}
`;
const FormBlk = styled.div`
width:100%;
`;
const Form = styled.div`
width:100%;
padding:32px;
padding-bottom: 10px;
border-bottom:1px solid #DDE1E9;
@media (max-width: 599px) {
    padding:25px 15px;
}
label{
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    margin-bottom:4px;
}
`;
const FormBtn = styled.div`
padding:32px;
@media (max-width: 599px) {
    padding:25px 15px;
}
`;
const Button = styled.div`
`;
const Success = styled.div`
padding:32px;
text-align:center;
@media (max-width: 599px) {
    padding:25px 15px;
}
h4{
    padding:0;
    margin:40px 0 12px 0;
    text-align:center;
    font-size: 24px;
}
p{
    color: #6C7884;
    margin-bottom:35px;
}
ul{
    width:85%;
    margin:0 auto;
    @media (max-width: 455px) {
        width:100%;
    }  
    li{
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 30px;
        position:relative;
        color: #333D47;
            &:before{
                content:'';
                position:absolute;
                left:9px;
                width:1px;
                height:32px;
                background:#808FAD;
                top:18px;
                @media (max-width: 399px) {
                    display:none;
                }
            }
            &:last-child{
                margin-bottom:15px;
                &:before{
                    display:none;
                }
            }
        span{
            width: 18px;
            height: 18px;
            color: #808FAD;
            border-radius:50%;
            border:1px solid #808FAD;
            float:left;
            margin-right: 15px;
            line-height: 16px;
            font-size: 12px;
          
        }
    }
}
`;