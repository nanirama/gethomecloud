import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form";
import axios from "axios"
import styled from "styled-components"
import Select from "react-select"

const InformationForm = ({ setFormStep, onHide }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  useEffect(() => {
    console.log("serverState", isSubmitting)
  }, [serverState, isSubmitting])
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const onSubmit = (data,e) => {
    setIsSubmitting(true)
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/6946c921-ebe4-4009-a410-d1e799166d44",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
        setFormStep("step8")
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
const options = [
{ value: "certification", label: "Certification" },
{ value: "radon test", label: "Radon Test" },
{ value: "wood destroying insects", label: "Wood Destroying Insects" },
{ value: "well water", label: "Well Water" },
]
return (
<>
<Popup>
   <svg
      className="closebtn"
      onClick={onHide}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
         d="M13.8925 0.33986L7.99994 6.23242L2.10738 0.339861C1.9446 0.177079 1.68091 0.177079 1.51813 0.339861L0.339617 1.51837C0.176835 1.68115 0.176835 1.94485 0.339617 2.10763L6.23217 8.00018L0.339616 13.8927C0.176834 14.0555 0.176834 14.3192 0.339616 14.482L1.51813 15.6605C1.68091 15.8233 1.9446 15.8233 2.10738 15.6605L7.99994 9.76795L13.8925 15.6605C14.0553 15.8233 14.319 15.8233 14.4818 15.6605L15.6603 14.482C15.823 14.3192 15.823 14.0555 15.6603 13.8927L9.76771 8.00018L15.6603 2.10763C15.823 1.94484 15.823 1.68115 15.6603 1.51837L14.4818 0.33986C14.319 0.177078 14.0553 0.177078 13.8925 0.33986Z"
         fill="#333D47"
         />
   </svg>
   <h4>We need a little of Information</h4>
   <TextBlock>
      <p>
         Please provide your information below and we’ll contact the current
         homeowner to schedule the Certification at a convenient time for
         them.
      </p>
   </TextBlock>
   <form onSubmit={handleSubmit(onSubmit)}>
      <FormBlk>
         <FormInner>
            <label>Service Type</label>
            <Select
               id="service_type"
               name="service_type"
               isMulti
               options={options}
               className="basic-multi-select"
               classNamePrefix="select"
               />
            <label>Your First Name*</label>
            <input
               type="text"
               placeholder="First Name"
               name="firstname"
               id="firstname"
               {...register("firstname", { required: true })} className={errors.firstname && `error`} 
               />
            <label>Your Last Name*</label>
            <input
               type="text"
               placeholder="Last Name"
               id="lastname"
               {...register("lastname", { required: true })} className={errors.lastname && `error`} 
               />
            <label>Your Email Address</label>
            <input 
               type="text"
               placeholder="Email Address"
               id="email"
               name="email"
               />
            <label>Current Homeowner Email*</label>
            <input
               type="text"
               placeholder="Email Address"
               id="homeowner_email"
               name="homeowner_email"
               {...register("homeowner_email", { required: true })} className={errors.homeowner_email && `error`} 
               />
            <label>Selling Real Estate Agent Email</label>
            <input
               type="text"
               placeholder="Email Address"
               id="agent_email"
               name="agent_email"
               {...register("agent_email", { required: true })} className={errors.agent_email && `error`} 
               />
         </FormInner>
         <FormBtn>
            <input
               type="submit"
               value="Submit"
               className="btn"
               disabled={isSubmitting}
               />
         </FormBtn>
      </FormBlk>
   </form>
</Popup>
</>
)
}
export default InformationForm;
const Popup = styled.div`
max-width: 500px;
background: #ffffff;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
border-radius: 8px;
display: flex;
position: relative;
padding: 0px;
flex-direction: column;
align-items: center;
h4 {
  width: 100%;
  text-align: left;
  padding: 32px;
  margin: 0 !important;
    @media (max-width: 599px) {
      padding: 25px 15px;
    }
}
svg.closebtn {
  position: absolute;
  right: 32px;
  top: 36px;
  cursor: pointer;
  @media (max-width: 599px) {
    right: 15px;
  }
}
.btn {
  width: 100%;
  color: #fff;
  padding: 17px 60px;
  width: 100%;
  line-height: 22px;
  font-size: 16px;
  font-style: normal;
  margin: 0;
}
input {
  border: 1px solid #dde1e9;
  width: 100%;
  line-height: 40px;
  padding: 0 15px;
  border-radius: 4px;
  margin-bottom: 24px;
  color: #6c7884;
  font-size: 14px;
  font-style: italic;
}
input.error, .error, .error:focus-visible{
  border: 2px solid #DB4343 !important;
  box-sizing: border-box !important;
}
select {
  border: 1px solid #dde1e9;
  width: 100%;
  line-height: 40px;
  padding: 0 15px;
  border-radius: 4px;
  margin-bottom: 24px;
  color: #6c7884;
  font-size: 14px;
  font-style: italic;
  height: 40px;
  background-color: transparent;
}
`;
const TextBlock = styled.div`
padding: 32px;
padding-bottom: 0;
border-top: 1px solid #dde1e9;
@media (max-width: 599px) {
  padding: 25px 15px;
}
p {
  background: #f6f7f9;
  border-radius: 6px;
  padding: 12px;
  text-align: left;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
}
`;
const FormBlk = styled.div`
width: 100%;
`;
const FormInner = styled.div`
width: 100%;
padding: 32px;
padding-bottom: 10px;
border-bottom: 1px solid #dde1e9;
font-size: 14px;
text-align: left;
@media (max-width: 599px) {
  padding: 25px 15px;
}
label {
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 5px;
  color: #333d47;
}
.css-1s2u09g-control,
.css-1pahdxg-control {
  margin-bottom: 24px;
  min-height: 40px;
  border: 1px solid #dde1e9;
  font-style: italic;
}
.css-tlfecz-indicatorContainer,
.css-1gtu0rj-indicatorContainer {
  padding: 14px;
}

`;
const FormBtn = styled.div`
padding: 32px;
@media (max-width: 599px) {
  padding: 25px 15px;
}
`;
const Button = styled.div`
`;
const Success = styled.div`
padding: 32px;
text-align: center;
@media (max-width: 599px) {
  padding: 25px 15px;
}
h4 {
  padding: 0;
  margin: 40px 0 12px 0;
  text-align: center;
  font-size: 24px;
}
p {
  color: #6c7884;
  margin-bottom: 35px;
}
ul {
  width: 85%;
  margin: 0 auto;
  @media (max-width: 455px) {
    width: 100%;
  }
  li {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 30px;
    position: relative;
    color: #333d47;
    &:before {
      content: "";
      position: absolute;
      left: 9px;
      width: 1px;
      height: 32px;
      background: #808fad;
      top: 18px;
      @media (max-width: 399px) {
        display: none;
      }
    }
    &:last-child {
      margin-bottom: 15px;
      &:before {
        display: none;
      }
    }
    span {
      width: 18px;
      height: 18px;
      color: #808fad;
      border-radius: 50%;
      border: 1px solid #808fad;
      float: left;
      margin-right: 15px;
      line-height: 16px;
      font-size: 12px;
    }
  }
}
`;
