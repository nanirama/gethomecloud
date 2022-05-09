import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton
} from 'react-share';

const Share = ({ socialConfig, tags }) => {
  const [copied, setCopied] = useState(false);
  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }
  // const copy = () => {
  //   const el = document.createElement("input");
  //   el.value = window.location.href;
  //   document.body.appendChild(el);
  //   el.select();
  //   document.execCommand("copy");
  //   document.body.removeChild(el);
  //   setCopied(true);
  // }
    return(
      <SocialLinks>
        <SocialIcon>
           <TwitterShareButton url={socialConfig.config.url} quote={socialConfig.config.title}>
           <svg width="20" height="20" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.9441 3.98749C17.9568 4.16248 17.9568 4.33751 17.9568 4.5125C17.9568 9.84997 13.8325 16 6.29441 16C3.97207 16 1.81473 15.3375 0 14.1875C0.329961 14.225 0.647187 14.2375 0.989844 14.2375C2.90605 14.2375 4.67004 13.6 6.07867 12.5125C4.27664 12.475 2.76648 11.3125 2.24617 9.7125C2.5 9.74997 2.75379 9.77498 3.02031 9.77498C3.38832 9.77498 3.75637 9.72496 4.09898 9.63751C2.22082 9.26247 0.812148 7.63749 0.812148 5.67499V5.62501C1.35781 5.92501 1.99238 6.11251 2.66492 6.13748C1.56086 5.41247 0.837539 4.17498 0.837539 2.77497C0.837539 2.02499 1.04055 1.33749 1.3959 0.737481C3.41367 3.18748 6.44668 4.78745 9.84766 4.96248C9.78422 4.66248 9.74613 4.35001 9.74613 4.03751C9.74613 1.81248 11.5736 0 13.8451 0C15.0253 0 16.0913 0.487499 16.84 1.275C17.7664 1.10001 18.6547 0.762491 19.4416 0.300002C19.137 1.23752 18.4898 2.02502 17.6395 2.52499C18.4644 2.43753 19.2639 2.21248 19.9999 1.90001C19.4416 2.69998 18.7436 3.41245 17.9441 3.98749V3.98749Z" fill="white"/>
            </svg>
          </TwitterShareButton> 
          </SocialIcon>     
          <SocialIcon>
          <FacebookShareButton url={socialConfig.config.url} quote={socialConfig.config.title} hashtag={""}>
          <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.34469 11.25L9.86325 7.63047H6.62096V5.28164C6.62096 4.29141 7.07388 3.32617 8.526 3.32617H10V0.244531C10 0.244531 8.66239 0 7.38349 0C4.71337 0 2.96806 1.73359 2.96806 4.87188V7.63047H0V11.25H2.96806V20H6.62096V11.25H9.34469Z" fill="white"/>
           </svg>
          </FacebookShareButton>
         </SocialIcon>
         <SocialIcon>
            <LinkedinShareButton url={socialConfig.config.url} quote={socialConfig.config.title}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.47689 20H0.330365V6.64702H4.47689V20ZM2.40139 4.82555C1.07547 4.82555 0 3.72732 0 2.40139C9.49039e-09 1.7645 0.253003 1.1537 0.703352 0.703352C1.1537 0.253003 1.7645 0 2.40139 0C3.03828 0 3.64909 0.253003 4.09944 0.703352C4.54979 1.1537 4.80279 1.7645 4.80279 2.40139C4.80279 3.72732 3.72687 4.82555 2.40139 4.82555ZM19.996 20H15.8584V13.4999C15.8584 11.9507 15.8271 9.96406 13.7025 9.96406C11.5467 9.96406 11.2163 11.6471 11.2163 13.3882V20H7.07427V6.64702H11.0511V8.46849H11.1092C11.6628 7.41936 13.015 6.31219 15.0325 6.31219C19.229 6.31219 20.0005 9.07565 20.0005 12.665V20H19.996Z" fill="white"/>
              </svg>
            </LinkedinShareButton>
         </SocialIcon>
         <SocialIcon onClick={copy}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7636 15.4181L8.66986 18.5115C6.68635 20.4958 3.47311 20.4968 1.48862 18.5115C-0.495717 16.528 -0.496694 13.3147 1.48862 11.3302L4.58197 8.23648C4.62714 8.19132 4.67314 8.14701 4.71994 8.10355C5.01486 7.82992 5.49318 8.02527 5.50932 8.42722C5.51686 8.61499 5.53268 8.80249 5.55682 8.9891C5.57561 9.13429 5.52768 9.27999 5.42412 9.38347C4.78037 10.0268 2.48889 12.3182 2.48272 12.3243C1.04764 13.7602 1.04791 16.0817 2.48272 17.5173C3.91862 18.9524 6.24006 18.9521 7.67568 17.5173L10.7694 14.4236L10.7835 14.4095C12.2015 12.977 12.1952 10.6568 10.769 9.23058C10.4482 8.90972 10.0824 8.66105 9.6915 8.48413C9.51314 8.40343 9.40142 8.2237 9.41283 8.02827C9.4246 7.82576 9.46169 7.62552 9.52322 7.43222C9.60537 7.17437 9.89553 7.04312 10.1451 7.14784C10.7338 7.39488 11.2852 7.758 11.7636 8.23644C13.7436 10.2165 13.7433 13.4384 11.7636 15.4181ZM8.23643 11.7637C8.71486 12.2421 9.26619 12.6052 9.85498 12.8523C10.1045 12.957 10.3947 12.8257 10.4768 12.5679C10.5383 12.3746 10.5754 12.1743 10.5872 11.9718C10.5986 11.7764 10.4869 11.5967 10.3085 11.516C9.9176 11.3391 9.55185 11.0904 9.23099 10.7695C7.80482 9.34335 7.79853 7.02312 9.21654 5.59062L9.2306 5.57655L12.3244 2.4828C13.76 1.04799 16.0814 1.04772 17.5173 2.4828C18.9521 3.91843 18.9524 6.23987 17.5173 7.67577C17.5112 7.68191 15.2197 9.97331 14.5759 10.6166C14.4724 10.7202 14.4244 10.8658 14.4432 11.011C14.4673 11.1975 14.4832 11.385 14.4907 11.5729C14.5069 11.9749 14.9852 12.1702 15.2801 11.8966C15.3269 11.8531 15.3729 11.8088 15.4181 11.7636L18.5114 8.66988C20.4967 6.68538 20.4958 3.47214 18.5114 1.48862C16.527 -0.496695 13.3137 -0.495718 11.3302 1.48862L8.23643 4.58198C6.25678 6.56175 6.25643 9.78367 8.23643 11.7637Z" fill="white"/>
            </svg>
          </SocialIcon>
     </SocialLinks>
)};

Share.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
	tags: [],
};

export default Share;


const SocialLinks = styled.div`
display:flex;
`;
const SocialIcon = styled.div`
cursor:pointer !important;
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
background: #236DDE;
border-radius: 50%;
line-height:40px;
margin-right:12px;
button{
  line-height:40px; 
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0px;
  margin:0px;
}
`;

