import React, {useState} from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import ModalBoxContent from "../ModalBoxContent";

const DigitizeMyHome = () => {
const [modalShow, setModalShow] = useState(false);
return(
    <>
    <Link className="btn" to="/get-started">Certify a Home</Link>
    <ModalBoxContent
          show={modalShow}
          onHide={() => setModalShow(false)}
      />  
    </>    
);
}
export default DigitizeMyHome;

const Button = styled.button`
`;