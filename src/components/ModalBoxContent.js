import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Button, Modal } from 'react-bootstrap'

import FormIndex from './popups';
import WaitlistForm from "./popups/waitlist/waitlistform";
import WaitListSuccess from './popups/waitlist/success';

import AccessIndex from './popups/accesscode';
import Usertype from './popups/accesscode/usertype';
import UserTypeSuccess from './popups/accesscode/usertypesuccess';

import InformationForm from './popups/accesscode/information';
import InformationFormSuccess from './popups/accesscode/success';

function ModalBoxContent(props) {
    const [formStep, setFormStep] = useState('step1')
    useEffect(
      () => {
        console.log('formStep',formStep)
      },
      [formStep],
    )
    const onCloseHandler = ()=>{
      props.onHide()
      setFormStep('step1')
    }
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="p-0 m-0">
            <Popup>            
            {formStep && formStep === 'step1' && <FormIndex setFormStep = {setFormStep} onHide={onCloseHandler} />}
            {formStep && formStep === 'step2' && <WaitlistForm setFormStep = {setFormStep} onHide={onCloseHandler} />}
            {formStep && formStep === 'step3' && <WaitListSuccess setFormStep = {setFormStep} onHide={onCloseHandler} />}

            {formStep && formStep === 'step4' && <AccessIndex setFormStep = {setFormStep} onHide={onCloseHandler} />}
            {formStep && formStep === 'step5' && <Usertype setFormStep = {setFormStep} onHide={onCloseHandler} />}
            {formStep && formStep === 'step6' && <UserTypeSuccess setFormStep = {setFormStep} onHide={onCloseHandler} />}

            {formStep && formStep === 'step7' && <InformationForm setFormStep = {setFormStep} onHide={onCloseHandler} />}
            {formStep && formStep === 'step8' && <InformationFormSuccess setFormStep = {setFormStep} onHide={onCloseHandler} />}
            
            </Popup>
            </Modal.Body>        
        </Modal>
    );
  }
export default ModalBoxContent;

export const PopupBtn = styled.button`
background-color:transparent;
width:28px;
height:28px;
float:right;
border:none;
margin:5px;
background-repeat: no-repeat;
background-position:center center;
background-size: 100% 100%;
`;
const Popup = styled.div`
max-width:100%;
display: flex;
position:relative;
// padding:35px;
text-align:center;
flex-direction: column;
align-items: center;
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
border-radius: 8px;
  @media only screen and (max-width:479px){
   // padding:30px 18px;
  }
h4{
  margin:32px 0 12px 0;
}
svg.closebtn{
  position:absolute;
  right:36px;
  top:36px;
  cursor:pointer;
}
.btn{
  width:100%;
}
.btn1{
  background: #ECF2FE !important;
  border-radius: 4px;
  color: #236DDE !important;
  width:100%;
  margin-top:15px;
  border:none;
}
`;
