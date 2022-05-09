import React from 'react'
import styled from 'styled-components';
import { Modal } from 'react-bootstrap'
function ModalPictureContent(props) {
const { action } = props
return (
<Modal
   {...props}
   size="md"
   aria-labelledby="contained-modal-title-vcenter"
   centered
   >
   <Modal.Body className="p-0 m-0">
      <Popup>
         <svg onClick={props.onHide} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8925 0.33986L7.99994 6.23242L2.10738 0.339861C1.9446 0.177079 1.68091 0.177079 1.51813 0.339861L0.339617 1.51837C0.176835 1.68115 0.176835 1.94485 0.339617 2.10763L6.23217 8.00018L0.339616 13.8927C0.176834 14.0555 0.176834 14.3192 0.339616 14.482L1.51813 15.6605C1.68091 15.8233 1.9446 15.8233 2.10738 15.6605L7.99994 9.76795L13.8925 15.6605C14.0553 15.8233 14.319 15.8233 14.4818 15.6605L15.6603 14.482C15.823 14.3192 15.823 14.0555 15.6603 13.8927L9.76771 8.00018L15.6603 2.10763C15.823 1.94484 15.823 1.68115 15.6603 1.51837L14.4818 0.33986C14.319 0.177078 14.0553 0.177078 13.8925 0.33986Z" fill="#333D47"/>
         </svg>
         <h5>We will take pictures of:</h5>
         <p>Home Exterior, Roof, Structure, Plumbing, Electrical, HVAC, Doors, Windows, Decks, Bedrooms, Bathrooms, etc.</p>
      </Popup>
   </Modal.Body>
</Modal>
);
}
export default ModalPictureContent

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
`
const Popup = styled.div`
    max-width:100%;
    display: flex;
    position:relative;
    padding:40px;
    text-align:left;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
    border-radius: 8px;
    svg{
    position:absolute;
    right:25px;
    top:25px;
    cursor:pointer;
    }
   h5{
    text-align:left;
    width:100%;
    margin-bottom:10px;
    color: #236DDE;
    font-size:14px;
    line-height: 20px;
    }
    p{
      margin:0;
      font-size:13px;
      line-height: 19px;
    }
`;
