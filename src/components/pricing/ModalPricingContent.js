import React from 'react'
import styled from 'styled-components';
import { Modal } from 'react-bootstrap'
import { useStaticQuery, graphql, Link } from "gatsby";
function ModalPricingContent(props) {
const { Rocket} = useStaticQuery(
  graphql`
    query {
      Rocket: file(relativePath: {eq: "rocket.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 136)
        }
      }     
    }
`
)
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
         <h4>Pricing</h4>
         <PriceTable>
            <table class="table">
               <thead>
                  <tr>
                     <th scope="col">Home Sq. Ft.</th>
                     <th scope="col">Pricing</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>479 - 1,499</td>
                     <td>$399</td>
                  </tr>
                  <tr>
                     <td>1,500 - 1,999</td>
                     <td>$439</td>
                  </tr>
                  <tr>
                     <td>2,000 - 2,499</td>
                     <td>$479</td>
                  </tr>
                  <tr>
                     <td>2,000 - 2,499</td>
                     <td>$519</td>
                  </tr>
                  <tr>
                     <td>3,000 - 3,499</td>
                     <td>$559</td>
                  </tr>
                  <tr>
                     <td>3,500 - 3,999</td>
                     <td>$599</td>
                  </tr>
                  <tr>
                     <td>4,000 - 4,499</td>
                     <td>$639</td>
                  </tr>
                  <tr>
                     <td>4,500 - 4,999</td>
                     <td>$679</td>
                  </tr>
                  <tr>
                     <td>4,500 - 4,999</td>
                     <td>$679</td>
                  </tr>
                  <tr>
                     <td>5,000 - 5,499</td>
                     <td>$719</td>
                  </tr>
                  <tr>
                     <td>5,500 - 5,999</td>
                     <td>$759</td>
                  </tr>
                  <tr>
                     <td>+6,000</td>
                     <td>
                        <a href="mailto:support@gethomecloud.com">Contact us for a quote</a>
                     </td>
                  </tr>
               </tbody>
            </table>
         </PriceTable>
      </Popup>
   </Modal.Body>
</Modal>
);
}
export default ModalPricingContent;

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
padding:0px;
text-align:center;
flex-direction: column;
align-items: center;
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
border-radius: 8px;
svg{
position:absolute;
right:36px;
top:36px;
cursor:pointer;
}
h4{
text-align:left;
width:100%;
padding:24px;
}
`;
const PriceTable = styled.div`
width:100%;
padding:30px 24px;
border-bottom: 1px solid #DDE1E9;
border-top: 1px solid #DDE1E9;
margin-bottom: 20px;
.table{
    margin:0;
}
.table > :not(:first-child) {
    border-top: 0px solid currentColor;
  }
  .table>tbody>tr:nth-child(even)>td{
      background-color:#F6F7F9;
  }
  .table td{
      border:none;
      box-shadow:inherit;
  }
  .table td a{
      text-decoration:underline;
  }
`;
