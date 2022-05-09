import React from 'react'
import Layout from "../components/layout"
import styled from 'styled-components';

import Access from "../components/popups/accesscode";
import UserType from "../components/popups/accesscode/usertype";
import WaitlistForm from "../components/popups/waitlist/waitlistform";
import Information from "../components/popups/accesscode/information";

const PopupPage = () => {
return(
<Layout>
   <Outer>
      <Wrapper>
         <Container>
           <Access/>
           <UserType/>
           <WaitlistForm/>
           <Information/>
         </Container>
      </Wrapper>
   </Outer>
</Layout>
);
};
export default PopupPage;
const Outer = styled.div`
padding:80px 0 30px 0;
@media (max-width: 800px) {
padding:0 0 40px 0;
}
`;
const Wrapper = styled.div`
background-color:#f1f1f1;
padding:60px 0;

`;
const Container = styled.div`
max-width:1200px;
margin:0 auto;
padding:0 15px;
`;

