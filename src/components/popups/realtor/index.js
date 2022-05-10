import React, { useState, useEffect }  from "react"
import { useForm } from "react-hook-form";
import { navigate } from "gatsby";
import axios from "axios";
import styled from 'styled-components';
const WaitlistForm = ({setFormStep, onHide }) => {
const { register, handleSubmit, formState: { errors } } = useForm();
const [isSubmitting, setIsSubmitting] = useState(false);
const [serverState, setServerState] = useState({
submitting: false,
status: null
});
useEffect(
() => {
console.log('serverState',isSubmitting)
},
[serverState, isSubmitting],
)
const handleServerResponse = (ok, msg, form) => {
setServerState({
submitting: false,
status: { ok, msg }
});
if (ok) {
    //e.reset();
}
};
const onSubmit = (data,e) => {
setIsSubmitting(true)
const form = e.target;
setServerState({ submitting: true });
axios({
method: "post",
url: "https://getform.io/f/7ca828e5-5c72-4e2b-a9c3-58502d184fb8",
data: new FormData(form)
})
.then(r => {
handleServerResponse(true, "Thanks!", form);
navigate("/agent-confirm/")
})
.catch(r => {
    handleServerResponse(false, r, form)
});
};
return(
<Wrapper id="howitworks">
<Container>
   <FormOuter>
   <h4>Realtor Contact Form</h4>
   <TextBlock>
      <p>Please provide your information below and we’ll get in touch!</p>
   </TextBlock>
   <FormBlk>
      <FormInner>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Your First Name*</label>
            <input type="text" name="firstname" id="firstname" placeholder="John"
            {...register("firstname", { required: true })} className={errors.firstname && `error`} 
            />
            <label>Your Last Name*</label>
            <input type="text" name="lastname" id="lastname" placeholder="Doe"
            {...register("lastname", { required: true })} className={errors.lastname && `error`} 
            />
            <label>Your Email Address*</label>
            <input type="text" id="email" name="email" placeholder="johndoe@gmail.com"
            {...register("email", { required: true })} className={errors.email && `error`}
            />
            <label>Phone Number*</label>
            <input type="text" name="phone" id="phone" placeholder="###-###-####"
            {...register("phone", { required: true })} className={errors.phone && `error`} 
            />
            <label>How can we help?*</label>
            <select id="how_can_we_help" name="how_can_we_help"
            {...register("how_can_we_help", { required: true })} className={errors.how_can_we_help && `error`} 
            >
                <option value="Learn more about partership">Learn more about partership</option>
                <option value="Schedule a home certification for my buyer">Schedule a home certification for my buyer</option>
                <option value="Schedule a home certification for my seller">Schedule a home certification for my seller</option>
                <option value="Schedule a walk through certification">Schedule a walk through certification</option>
                <option value="Join your mailing list">Join your mailing list</option>                
            </select>
            
            <label>How did you hear about us?*</label>
            <select id="how_you_hear_about_us" name="how_you_hear_about_us"
            {...register("how_you_hear_about_us", { required: true })} className={errors.how_you_hear_about_us && `error`} 
            >
                <option value="Real estate agent referral">Real estate agent referral</option>
                <option value="My Client told me">My Client told me</option>
                <option value="Saw a HomeCloud Certified Listing">Saw a HomeCloud Certified Listing</option>
                <option value="Buyer used HomeCloud on home I sold">Buyer used HomeCloud on home I sold</option>
                <option value="Online News Coverage">Online News Coverage</option>
                <option value="Google">Google</option>
                <option value="Yelp">Yelp</option>
                <option value="Other">Other</option>                
            </select>
            
            <label>More details on how you heard about us</label>
            <textarea id="more_details" name="more_details" 
            // {...register("agent_email", { required: true })} className={errors.agent_email && `error`} 
            />
            <FormBtn>
               <input type="submit" value="Submit" className="btn" disabled={isSubmitting}/>
            </FormBtn>
         </form>
      </FormInner>
   </FormBlk>
   </FormOuter>
   </Container>
</Wrapper>
);
}
export default WaitlistForm;

const Wrapper = styled.div`
padding:130px 0 80px 0;
text-align:center;
@media (max-width: 991px) {
   padding:110px 0 60px 0;
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
padding: 30px;
display: flex;
justify-content: center;
`;
const FormOuter = styled.div`
box-shadow: -1px 1px 22px 0px rgba(0,0,0,0.25);
-webkit-box-shadow: -1px 1px 22px 0px rgba(0,0,0,0.25);
-moz-box-shadow: -1px 1px 22px 0px rgba(0,0,0,0.25);
border-radius: 8px;
width:480px;
max-width:100%;
background: #FFFFFF;
display: flex;
position:relative;
padding:0px;
flex-direction: column;
align-items: center;

h4{
    width:100%;
    text-align:center;
    padding:32px;
    margin:0 !important;
    @media (max-width: 599px) {
        padding:25px 15px;
    }
    @media (max-width: 400px) {
       font-size: 16px;
        br{
            display:none;
        }
    }
}
svg.closebtn{
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
    color:#fff;
    padding:17px 60px;
    width:100%;
    line-height:22px;
    font-size: 16px;
    font-style: normal;
    margin:0;
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
textarea{
    border: 1px solid #DDE1E9;
    width: 100%;
    min-height:100px;
    line-height: 24px;
    padding: 0 15px;
    border-radius: 4px;
    margin-bottom: 24px;
    color: #6C7884;
    font-size: 14px;
    font-style:italic;
}
input.error, .error, input:focus, .error:focus-visible{
    border: 2px solid #DB4343 !important;
    box-sizing: border-box !important;
 }
select.error, .error, select:focus, .error:focus-visible{
    border: 2px solid #DB4343 !important;
    box-sizing: border-box !important;
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
width:100%;
text-align:center !important;
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
const FormInner = styled.div`
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
    margin-bottom:5px;
    color:#333d47;
}
form{
  text-align:left;
}
`;
const FormBtn = styled.div`
padding:10px 0 32px 0;
@media (max-width: 599px) {
    padding:25px 15px;
}
`;
