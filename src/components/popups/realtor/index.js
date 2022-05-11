import React, { useState, useEffect } from "react"
import Select from "react-select";
import { useForm } from "react-hook-form";
import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { navigate } from "gatsby";
import axios from "axios";
import styled from 'styled-components';
const RealtorFormIndex = ({ setFormStep, onHide }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedValues, setSelectedValues] = useState([]);
    const [hearaboutUs, setHearaboutUs] = useState('');
    const [moredetails, setMoredetails] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });

    const options = [
        { value: 'Learn more about partership', label: 'Learn more about partership' },
        { value: 'Schedule a home certification for my buyer', label: 'Schedule a home certification for my buyer' },
        { value: 'Schedule a home certification for my seller', label: 'Schedule a home certification for my seller' },
        { value: 'Schedule a walk through certification', label: 'Schedule a walk through certification' },
        { value: 'Join your mailing list', label: 'Join your mailing list' },
    ]

    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        how_you_hear_about_us: '',
        phone: undefined,
        more_details: ''
    }

    const validationSchema = yup.object().shape({
        firstname: yup
            .string()
            .required('Please enter your First Name'),
        lastname: yup
            .string()
            .required('Please enter your Last Name'),
        email: yup
            .string()
            .email('Email should be in the format username@domain.com')
            .required("Email is required"),
        phone: yup.string()
            .required('Please enter a valid phone number')

    });

    useEffect(
        () => {
            console.log('moredetails', moredetails)
        },
        [serverState, isSubmitting, selectedValues, hearaboutUs, moredetails],
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

    const submitForm = (e) => {
        setIsSubmitting(true)
        e.how_can_we_help = selectedValues.join(", ");
        e.how_you_hear_about_us = hearaboutUs
        e.more_details = moredetails
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://getform.io/f/7ca828e5-5c72-4e2b-a9c3-58502d184fb8",
            data: e
        })
            .then(r => {
                handleServerResponse(true, "Thanks!");
                navigate("/agent-confirm/")
            })
            .catch(r => {
                handleServerResponse(false, r)
            });
    };
    const handleSelectChange = (selectedOptions) => {
        const newArray = selectedOptions.map((item) => {
            return item.value
        })
        setSelectedValues(newArray);
    }
    return (
        <Wrapper id="howitworks">
            <Container>
                <FormOuter>
                    <h4>Realtor Contact Form</h4>
                    <TextBlock>
                        <p>Please provide your information below and we’ll get in touch!</p>
                    </TextBlock>
                    <FormBlk>
                        <FormInner>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={e => submitForm(e)}
                            >
                                {(formik) => {
                                    const {
                                        values,
                                        touched,
                                        errors,
                                        dirty,
                                        isSubmitting,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        handleReset
                                    } = formik;
                                    return (
                                        <form onSubmit={handleSubmit}>

                                            <label>Your First Name*</label>
                                            <Field
                                                name="firstname"
                                                value={values.firstname}
                                                render={({ field, form }) => (
                                                    <input
                                                        className={errors.firstname && touched.firstname && 'error'}
                                                        aria-labelledby="firstname"
                                                        type="text"
                                                        id="firstname"
                                                        name="firstname"
                                                        value={values.firstname}
                                                        placeholder="Your First Name"
                                                        onChange={e => {
                                                            handleChange(e);

                                                        }}
                                                    />
                                                )}
                                            />
                                            <label>Your Last Name*</label>
                                            <Field
                                                name="lastname"
                                                value={values.lastname}
                                                render={({ field, form }) => (
                                                    <input
                                                        className={errors.lastname && touched.lastname && 'error'}
                                                        aria-labelledby="lastname"
                                                        type="text"
                                                        id="lastname"
                                                        name="lastname"
                                                        value={values.lastname}
                                                        placeholder="Your Last Name"
                                                        onChange={e => {
                                                            handleChange(e);
                                                        }}
                                                    />
                                                )}
                                            />
                                            <label>Your Email Address*</label>
                                            <input
                                                className={errors.email && touched.email && 'error'}
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={values.email}
                                                onChange={e => {
                                                    handleChange(e)
                                                }}
                                                placeholder="Email"
                                                aria-labelledby="email"
                                            />
                                            <label>Phone Number*</label>
                                            <input
                                                className={errors.phone && touched.phone && 'error'}
                                                aria-labelledby="phone"
                                                type="tel"
                                                name="phone"
                                                pattern="[0-9]*"
                                                placeholder='Phone'
                                                id="phone"
                                                value={values.phone}
                                                onChange={e => {
                                                    handleChange(e);
                                                }}

                                            />
                                            <label>How can we help?*</label>
                                            <Select
                                                isMulti
                                                id="how_can_we_help"
                                                name="how_can_we_help"
                                                placeholder="Select all that apply"
                                                options={options}
                                                aria-label="how_can_we_help"
                                                aria-labelledby="how_can_we_help"
                                                onChange={handleSelectChange}
                                            />
                                            <label>How did you hear about us?*</label>
                                            <select
                                                id="how_you_hear_about_us"
                                                name="how_you_hear_about_us"
                                                onChange={e => setHearaboutUs(e.target.value)}>
                                                <option>Select</option>
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
                                            <textarea id="more_details" name="more_details" onChange={e => setMoredetails(e.target.value)} />
                                            <FormBtn>
                                                <button type="submit" value="Submit" className="btn"
                                                // disabled={isSubmitting}
                                                >Submit</button>
                                            </FormBtn>
                                        </form>
                                    );
                                }}
                            </Formik>
                        </FormInner>
                    </FormBlk>
                </FormOuter>
            </Container>
        </Wrapper>
    );
}
export default RealtorFormIndex;

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
#how_can_we_help{
    width: 100%;
    line-height: 30px;
    border-radius: 4px;
    margin-bottom: 24px;
    color: #6C7884;
    font-size: 14px;
    font-style:italic; 
    .css-1s2u09g-control{
        border: 1px solid #DDE1E9;
    } 
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
input.error, .error, .error:focus-visible{
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
const ErrorLabel = styled.div`
`
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