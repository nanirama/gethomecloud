import React from "react"
import styled from "styled-components";
import ReactCardFlip from 'react-card-flip';
import ReactCardFlip1 from 'react-card-flip';
import Arrow1 from "../assets/images/arrow1.svg";
import Arrow2 from "../assets/images/arrow2.svg";
import Arrow5 from "../assets/images/arrow1-mobile.svg";
import Arrow6 from "../assets/images/arrow2-mobile.svg";
class App extends React.Component {
constructor() {
super();
this.state = {
isFlipped: false
};
this.handleClick = this.handleClick.bind(this);
}
handleClick(e) {
e.preventDefault();
this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
}
render() {
return (
<>
<Grid>
   <Item>
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
         <SubBox>
            <svg className="open" onClick={this.handleClick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M10.0003 2.74177C13.9862 2.74177 17.2584 5.9701 17.2584 9.99984C17.2584 14.0083 14.0121 17.2579 10.0003 17.2579C5.99347 17.2579 2.74226 14.0132 2.74226 9.99984C2.74226 5.99436 5.9883 2.74177 10.0003 2.74177ZM10.0003 1.6665C5.39828 1.6665 1.66699 5.39913 1.66699 9.99984C1.66699 14.6032 5.39828 18.3332 10.0003 18.3332C14.6024 18.3332 18.3337 14.6032 18.3337 9.99984C18.3337 5.39913 14.6024 1.6665 10.0003 1.6665ZM8.79065 13.2256H9.19387V9.19339H8.79065C8.56797 9.19339 8.38742 9.01284 8.38742 8.79016V8.52134C8.38742 8.29866 8.56797 8.11812 8.79065 8.11812H10.4036C10.6262 8.11812 10.8068 8.29866 10.8068 8.52134V13.2256H11.21C11.4327 13.2256 11.6132 13.4062 11.6132 13.6289V13.8977C11.6132 14.1204 11.4327 14.3009 11.21 14.3009H8.79065C8.56797 14.3009 8.38742 14.1204 8.38742 13.8977V13.6289C8.38742 13.4062 8.56797 13.2256 8.79065 13.2256ZM10.0003 5.16113C9.40648 5.16113 8.92506 5.64255 8.92506 6.2364C8.92506 6.83025 9.40648 7.31167 10.0003 7.31167C10.5942 7.31167 11.0756 6.83025 11.0756 6.2364C11.0756 5.64255 10.5942 5.16113 10.0003 5.16113Z" fill="#333D47"/>
            </svg>
            <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path opacity="0.4" d="M32.2683 7.51335C32.1845 7.42678 32.0848 7.35809 31.9751 7.31123C31.8653 7.26436 31.7477 7.24023 31.6289 7.24023C31.51 7.24023 31.3924 7.26436 31.2827 7.31123C31.1729 7.35809 31.0733 7.42678 30.9894 7.51335L20.7963 18L17.8239 14.9419C17.74 14.8554 17.6404 14.7867 17.5306 14.7398C17.4209 14.6929 17.3032 14.6688 17.1844 14.6688C17.0656 14.6688 16.9479 14.6929 16.8382 14.7398C16.7285 14.7867 16.6288 14.8554 16.5449 14.9419L12.3704 19.2381V22.9524H38.8518V14.2857L32.2683 7.51335ZM5.14813 24.1905V8.09525H3.94442C2.9867 8.09525 2.0682 8.48658 1.39098 9.18314C0.713768 9.87971 0.333313 10.8245 0.333313 11.8095L0.333313 31.6191C0.333313 32.6042 0.713768 33.5489 1.39098 34.2455C2.0682 34.942 2.9867 35.3334 3.94442 35.3334H32.8333C33.791 35.3334 34.7095 34.942 35.3868 34.2455C36.064 33.5489 36.4444 32.6042 36.4444 31.6191V30.381H11.1666C9.57099 30.3791 8.04119 29.7263 6.91289 28.5658C5.78459 27.4053 5.14992 25.8318 5.14813 24.1905Z" fill="#236DDE"/>
               <path d="M40.0555 0.666992H11.1667C10.2089 0.666992 9.29043 1.05832 8.61321 1.75488C7.936 2.45144 7.55554 3.39619 7.55554 4.38128V24.1908C7.55554 25.1759 7.936 26.1206 8.61321 26.8172C9.29043 27.5138 10.2089 27.9051 11.1667 27.9051H40.0555C41.0133 27.9051 41.9318 27.5138 42.609 26.8172C43.2862 26.1206 43.6666 25.1759 43.6666 24.1908V4.38128C43.6666 3.39619 43.2862 2.45144 42.609 1.75488C41.9318 1.05832 41.0133 0.666992 40.0555 0.666992ZM15.9815 4.38128C16.6957 4.38128 17.3938 4.59912 17.9877 5.00725C18.5815 5.41538 19.0444 5.99547 19.3177 6.67417C19.591 7.35286 19.6625 8.09968 19.5232 8.82018C19.3839 9.54068 19.0399 10.2025 18.5349 10.722C18.0299 11.2414 17.3864 11.5952 16.686 11.7385C15.9855 11.8818 15.2594 11.8082 14.5996 11.5271C13.9397 11.246 13.3757 10.7699 12.9789 10.1591C12.5821 9.5483 12.3704 8.83018 12.3704 8.09556C12.3704 7.11047 12.7508 6.16573 13.428 5.46917C14.1052 4.7726 15.0237 4.38128 15.9815 4.38128ZM38.8518 22.9527H12.3704V19.2384L16.5472 14.9422C16.6311 14.8557 16.7307 14.787 16.8405 14.7401C16.9502 14.6932 17.0679 14.6691 17.1867 14.6691C17.3055 14.6691 17.4231 14.6932 17.5329 14.7401C17.6426 14.787 17.7423 14.8557 17.8261 14.9422L20.7963 18.0003L30.9916 7.51366C31.0755 7.42709 31.1752 7.3584 31.2849 7.31154C31.3946 7.26467 31.5123 7.24055 31.6311 7.24055C31.7499 7.24055 31.8676 7.26467 31.9773 7.31154C32.0871 7.3584 32.1867 7.42709 32.2706 7.51366L38.8518 14.286V22.9527Z" fill="#236DDE"/>
            </svg>
            <h5>Pictures and Videos</h5>
            <p>Every aspect of the  home</p>
         </SubBox>
         <SubBox>
            <svg className="close" onClick={this.handleClick} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M13.8925 0.33986L7.99994 6.23242L2.10738 0.339861C1.9446 0.177079 1.68091 0.177079 1.51813 0.339861L0.339617 1.51837C0.176835 1.68115 0.176835 1.94485 0.339617 2.10763L6.23217 8.00018L0.339616 13.8927C0.176834 14.0555 0.176834 14.3192 0.339616 14.482L1.51813 15.6605C1.68091 15.8233 1.9446 15.8233 2.10738 15.6605L7.99994 9.76795L13.8925 15.6605C14.0553 15.8233 14.319 15.8233 14.4818 15.6605L15.6603 14.482C15.823 14.3192 15.823 14.0555 15.6603 13.8927L9.76771 8.00018L15.6603 2.10763C15.823 1.94484 15.823 1.68115 15.6603 1.51837L14.4818 0.33986C14.319 0.177078 14.0553 0.177078 13.8925 0.33986Z" fill="#333D47"/>
            </svg>
            <h5>We will take pictures of:</h5>
            <p>Home Exterior, Roof, Structure, Plumbing, Electrical, HVAC, Doors, Windows, Decks, Bedrooms, Bathrooms, etc.</p>
         </SubBox>
      </ReactCardFlip>
   </Item>
   <Item>
      <ReactCardFlip1 isFlipped1={this.state.isFlipped} flipDirection="horizontal">
         <SubBox2>
            <svg className="open" onClick={this.handleClick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M10.0003 2.74177C13.9862 2.74177 17.2584 5.9701 17.2584 9.99984C17.2584 14.0083 14.0121 17.2579 10.0003 17.2579C5.99347 17.2579 2.74226 14.0132 2.74226 9.99984C2.74226 5.99436 5.9883 2.74177 10.0003 2.74177ZM10.0003 1.6665C5.39828 1.6665 1.66699 5.39913 1.66699 9.99984C1.66699 14.6032 5.39828 18.3332 10.0003 18.3332C14.6024 18.3332 18.3337 14.6032 18.3337 9.99984C18.3337 5.39913 14.6024 1.6665 10.0003 1.6665ZM8.79065 13.2256H9.19387V9.19339H8.79065C8.56797 9.19339 8.38742 9.01284 8.38742 8.79016V8.52134C8.38742 8.29866 8.56797 8.11812 8.79065 8.11812H10.4036C10.6262 8.11812 10.8068 8.29866 10.8068 8.52134V13.2256H11.21C11.4327 13.2256 11.6132 13.4062 11.6132 13.6289V13.8977C11.6132 14.1204 11.4327 14.3009 11.21 14.3009H8.79065C8.56797 14.3009 8.38742 14.1204 8.38742 13.8977V13.6289C8.38742 13.4062 8.56797 13.2256 8.79065 13.2256ZM10.0003 5.16113C9.40648 5.16113 8.92506 5.64255 8.92506 6.2364C8.92506 6.83025 9.40648 7.31167 10.0003 7.31167C10.5942 7.31167 11.0756 6.83025 11.0756 6.2364C11.0756 5.64255 10.5942 5.16113 10.0003 5.16113Z" fill="#333D47"/>
            </svg>
            <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M32.2315 35.8438H26.8148L25.6111 32.1875H18.3889L17.1852 35.8438H11.7685C10.7755 35.8438 9.96298 36.6664 9.96298 37.6719C9.96298 38.6773 10.7755 39.5 11.7685 39.5H32.2315C33.2283 39.5 34.0371 38.6812 34.0371 37.6719C34.0371 36.6626 33.2321 35.8438 32.2315 35.8438ZM23.8056 5.375V16.199L26.7419 13.226C27.4472 12.5119 28.5895 12.5119 29.2952 13.226C30.0009 13.9401 30.0005 15.0968 29.2952 15.8113L23.2767 21.9051C22.5714 22.6192 21.429 22.6192 20.7233 21.9051L14.7048 15.8113C13.9995 15.0972 13.9995 13.9405 14.7048 13.226C15.0561 12.8627 15.5151 12.6875 15.9815 12.6875C16.4479 12.6875 16.9053 12.866 17.2582 13.2231L20.1945 16.199V5.375H5.14816V27.3125H38.8519V5.375H23.8056Z" fill="#236DDE"/>
               <path opacity="0.4" d="M43.6667 4.15625V28.5312C43.6667 30.5498 42.0492 32.1875 40.0556 32.1875H3.94445C1.95082 32.1875 0.333344 30.5498 0.333344 28.5312V4.15625C0.333344 2.13769 1.95082 0.5 3.94445 0.5H20.1945V5.375H5.14816V27.3125H38.8519V5.375H23.8056V0.5H40.0556C42.0492 0.5 43.6667 2.13769 43.6667 4.15625Z" fill="#236DDE"/>
            </svg>
            <h5>Digitized Data</h5>
            <p>Information is extracted  from the pictures and videos</p>
         </SubBox2>
         <SubBox2>
            <svg className="close" onClick={this.handleClick} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M13.8925 0.33986L7.99994 6.23242L2.10738 0.339861C1.9446 0.177079 1.68091 0.177079 1.51813 0.339861L0.339617 1.51837C0.176835 1.68115 0.176835 1.94485 0.339617 2.10763L6.23217 8.00018L0.339616 13.8927C0.176834 14.0555 0.176834 14.3192 0.339616 14.482L1.51813 15.6605C1.68091 15.8233 1.9446 15.8233 2.10738 15.6605L7.99994 9.76795L13.8925 15.6605C14.0553 15.8233 14.319 15.8233 14.4818 15.6605L15.6603 14.482C15.823 14.3192 15.823 14.0555 15.6603 13.8927L9.76771 8.00018L15.6603 2.10763C15.823 1.94484 15.823 1.68115 15.6603 1.51837L14.4818 0.33986C14.319 0.177078 14.0553 0.177078 13.8925 0.33986Z" fill="#333D47"/>
            </svg>
            <h5>We will take pictures of:</h5>
            <p>Home Exterior, Roof, Structure, Plumbing, Electrical, HVAC, Doors, Windows, Decks, Bedrooms, Bathrooms, etc.</p>
         </SubBox2>
      </ReactCardFlip1>
   </Item>
</Grid>
</>
)
}
}
export default App;


const Grid = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 10px 30px;
justify-content:center;
align-items:center;
margin-bottom:100px;
@media (min-width: 768px) {
   grid-template-columns: 6fr 6fr;
}
`;
const Item = styled.div`
`;
const SubBox = styled.div`
width:95%;
background: #FFFFFF;
padding:58px 16px 48px 16px;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
border-radius: 6px;
text-align:center;
display:inline-block;
position:relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height:250px;
&:before{
    content:'';
    position:absolute;
    right:-50px;
    top:45%;
    background-image:url(${Arrow1});
    background-position:right center;
    background-repeat:no-repeat;
    width:100%;
    height:16px;
    @media (max-width:767px) {
       background-image:url(${Arrow5});
       right: -45px;
       height:82px;
    }
 }
 h5{
    color: #236DDE;
    margin-top:16px;
 }
 p{
    color: #525E6B;
     font-size:14px;
     margin:0;
 }

svg.open, svg.close{
    position:absolute;
    right:15px;
    top:15px;
}
@media (max-width:767px) {
    width:90%;

}
@media (max-width:479px) {
    width:85%;
}
`;

const SubBox2 = styled.div`
width:95%;
float:right;
background: #FFFFFF;
padding:58px 16px 48px 16px;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
border-radius: 6px;
text-align:center;
display:inline-block;
position:relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height:250px;
&:before{
    content:'';
    position:absolute;
    left:0px;
    bottom:-63px;
    background-image:url(${Arrow2});
    background-position:bottom center;
    background-repeat:no-repeat;
    width:178px;
    height:63px;
    @media (max-width:767px) {
       background-image:url(${Arrow6});
       width:45px;
       height:101px;
       left:-45px;
       bottom:40px;
    }     
 }
 h5{
    color: #236DDE;
    margin-top:16px;
 }
 p{
    color: #525E6B;
     font-size:14px;
     margin:0;
 }

 svg.open, svg.close{
    position:absolute;
    right:15px;
    top:15px;
}
@media (max-width:767px) {
    width:90%;

}
@media (max-width:479px) {
    width:85%;
}
 `;

