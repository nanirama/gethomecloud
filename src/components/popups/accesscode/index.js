import React from "react"
import { navigate } from 'gatsby'
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { StaticImage } from "gatsby-plugin-image";

const AccessIndex = () => {
const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = (data) => {
   return navigate('/buying-selling/')
   }
return(
   <Wrapper>
<Container>
<Popup>
   <StaticImage src="../../../assets/images/key.png" alt="" />
   <FormAccess>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Please enter the Access Code</h4>
      <input type="text" name="accesscode" id="accesscode"
      {...register("accesscode", {
         validate: value => value === '3241'
       })}
      className={errors.accesscode && `error`} />
      <button className="btn">Continue</button>
      </form>
   </FormAccess>
</Popup>
</Container>
</Wrapper>
);
}
export default AccessIndex;
const Wrapper = styled.div`
padding:150px 0 80px 0;
text-align:center;
@media (max-width: 991px) {
   padding:130px 0 70px 0;
}
@media (max-width: 767px) {
   padding:100px 0 40px 0;
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
   margin:32px 0 !important;
   text-align:center;
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
   font-size: 14px;
   font-style:italic;
   box-sizing: border-box !important;
}
input.error, .error, input:focus{
   border: 2px solid #DB4343 !important;
   box-sizing: border-box !important;
}
`;
const FormAccess = styled.div`
width:100%;
`;
const AccessError = styled.div`
width:100%;
h4{
    margin-bottom:32px;
}
p{
    color:#DB4343;
    text-align:left;
    font-weight: 600;
    font-size: 12px;
}
input{   
    border: 1.5px solid #DB4343;
    margin-bottom:0;
}
`;
const Button = styled.button`
margin-top:10px;
`;