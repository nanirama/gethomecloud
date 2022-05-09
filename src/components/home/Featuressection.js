import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Arrow1 from "../../assets/images/arrow1.svg";
import Arrow2 from "../../assets/images/arrow2.svg";
import Arrow3 from "../../assets/images/arrow3.svg";
import Arrow4 from "../../assets/images/arrow3-mobile.svg";
import Arrow5 from "../../assets/images/arrow1-mobile.svg";
import Arrow6 from "../../assets/images/arrow2-mobile.svg";

const FeatureSection = () => {

   return (
      <Wrapper id="whatsincluded">
         <Container>
            <Grid>
               <Item>
                  <TextBlock>
                     <h2>What’s Included</h2>
                     <p>HomeCloud goes beyond a traditional inspection report by providing unique and actionable insights via the app.</p>
                     <HomeIcon className="showimage">
                        <StaticImage src="../../assets/images/home-icon1.png" alt="" />
                     </HomeIcon>
                  </TextBlock>
               </Item>
               <Item>
                  <SubBlock>
                     <TwoBlocks>
                        <OuterBox>
                           <FlipCard>
                              <FlipCardInner>
                                 <FlipCardFront>
                                    <svg className="symbol" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M10 1.29032C14.7831 1.29032 18.7097 5.16431 18.7097 10C18.7097 14.8101 14.8141 18.7097 10 18.7097C5.19177 18.7097 1.29032 14.816 1.29032 10C1.29032 5.19343 5.18556 1.29032 10 1.29032ZM10 0C4.47754 0 0 4.47915 0 10C0 15.5241 4.47754 20 10 20C15.5225 20 20 15.5241 20 10C20 4.47915 15.5225 0 10 0ZM8.54839 13.871H9.03226V9.03226H8.54839C8.28117 9.03226 8.06452 8.8156 8.06452 8.54839V8.22581C8.06452 7.95859 8.28117 7.74194 8.54839 7.74194H10.4839C10.7511 7.74194 10.9677 7.95859 10.9677 8.22581V13.871H11.4516C11.7188 13.871 11.9355 14.0876 11.9355 14.3548V14.6774C11.9355 14.9446 11.7188 15.1613 11.4516 15.1613H8.54839C8.28117 15.1613 8.06452 14.9446 8.06452 14.6774V14.3548C8.06452 14.0876 8.28117 13.871 8.54839 13.871ZM10 4.19355C9.28738 4.19355 8.70968 4.77125 8.70968 5.48387C8.70968 6.19649 9.28738 6.77419 10 6.77419C10.7126 6.77419 11.2903 6.19649 11.2903 5.48387C11.2903 4.77125 10.7126 4.19355 10 4.19355Z" fill="#808FAD" />
                                    </svg>
                                    <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path opacity="0.4" d="M32.2683 7.51335C32.1845 7.42678 32.0848 7.35809 31.9751 7.31123C31.8653 7.26436 31.7477 7.24023 31.6289 7.24023C31.51 7.24023 31.3924 7.26436 31.2827 7.31123C31.1729 7.35809 31.0733 7.42678 30.9894 7.51335L20.7963 18L17.8239 14.9419C17.74 14.8554 17.6404 14.7867 17.5306 14.7398C17.4209 14.6929 17.3032 14.6688 17.1844 14.6688C17.0656 14.6688 16.9479 14.6929 16.8382 14.7398C16.7285 14.7867 16.6288 14.8554 16.5449 14.9419L12.3704 19.2381V22.9524H38.8518V14.2857L32.2683 7.51335ZM5.14813 24.1905V8.09525H3.94442C2.9867 8.09525 2.0682 8.48658 1.39098 9.18314C0.713768 9.87971 0.333313 10.8245 0.333313 11.8095L0.333313 31.6191C0.333313 32.6042 0.713768 33.5489 1.39098 34.2455C2.0682 34.942 2.9867 35.3334 3.94442 35.3334H32.8333C33.791 35.3334 34.7095 34.942 35.3868 34.2455C36.064 33.5489 36.4444 32.6042 36.4444 31.6191V30.381H11.1666C9.57099 30.3791 8.04119 29.7263 6.91289 28.5658C5.78459 27.4053 5.14992 25.8318 5.14813 24.1905Z" fill="#236DDE" />
                                       <path d="M40.0555 0.666992H11.1667C10.2089 0.666992 9.29043 1.05832 8.61321 1.75488C7.936 2.45144 7.55554 3.39619 7.55554 4.38128V24.1908C7.55554 25.1759 7.936 26.1206 8.61321 26.8172C9.29043 27.5138 10.2089 27.9051 11.1667 27.9051H40.0555C41.0133 27.9051 41.9318 27.5138 42.609 26.8172C43.2862 26.1206 43.6666 25.1759 43.6666 24.1908V4.38128C43.6666 3.39619 43.2862 2.45144 42.609 1.75488C41.9318 1.05832 41.0133 0.666992 40.0555 0.666992ZM15.9815 4.38128C16.6957 4.38128 17.3938 4.59912 17.9877 5.00725C18.5815 5.41538 19.0444 5.99547 19.3177 6.67417C19.591 7.35286 19.6625 8.09968 19.5232 8.82018C19.3839 9.54068 19.0399 10.2025 18.5349 10.722C18.0299 11.2414 17.3864 11.5952 16.686 11.7385C15.9855 11.8818 15.2594 11.8082 14.5996 11.5271C13.9397 11.246 13.3757 10.7699 12.9789 10.1591C12.5821 9.5483 12.3704 8.83018 12.3704 8.09556C12.3704 7.11047 12.7508 6.16573 13.428 5.46917C14.1052 4.7726 15.0237 4.38128 15.9815 4.38128ZM38.8518 22.9527H12.3704V19.2384L16.5472 14.9422C16.6311 14.8557 16.7307 14.787 16.8405 14.7401C16.9502 14.6932 17.0679 14.6691 17.1867 14.6691C17.3055 14.6691 17.4231 14.6932 17.5329 14.7401C17.6426 14.787 17.7423 14.8557 17.8261 14.9422L20.7963 18.0003L30.9916 7.51366C31.0755 7.42709 31.1752 7.3584 31.2849 7.31154C31.3946 7.26467 31.5123 7.24055 31.6311 7.24055C31.7499 7.24055 31.8676 7.26467 31.9773 7.31154C32.0871 7.3584 32.1867 7.42709 32.2706 7.51366L38.8518 14.286V22.9527Z" fill="#236DDE" />
                                    </svg>
                                    <h5>Pictures and Videos</h5>
                                    <p>Data Collection of your home</p>
                                 </FlipCardFront>
                                 <FlipCardBack>
                                    <svg className="symbol" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M10 1.29032C14.7831 1.29032 18.7097 5.16431 18.7097 10C18.7097 14.8101 14.8141 18.7097 10 18.7097C5.19177 18.7097 1.29032 14.816 1.29032 10C1.29032 5.19343 5.18556 1.29032 10 1.29032ZM10 0C4.47754 0 0 4.47915 0 10C0 15.5241 4.47754 20 10 20C15.5225 20 20 15.5241 20 10C20 4.47915 15.5225 0 10 0ZM8.54839 13.871H9.03226V9.03226H8.54839C8.28117 9.03226 8.06452 8.8156 8.06452 8.54839V8.22581C8.06452 7.95859 8.28117 7.74194 8.54839 7.74194H10.4839C10.7511 7.74194 10.9677 7.95859 10.9677 8.22581V13.871H11.4516C11.7188 13.871 11.9355 14.0876 11.9355 14.3548V14.6774C11.9355 14.9446 11.7188 15.1613 11.4516 15.1613H8.54839C8.28117 15.1613 8.06452 14.9446 8.06452 14.6774V14.3548C8.06452 14.0876 8.28117 13.871 8.54839 13.871ZM10 4.19355C9.28738 4.19355 8.70968 4.77125 8.70968 5.48387C8.70968 6.19649 9.28738 6.77419 10 6.77419C10.7126 6.77419 11.2903 6.19649 11.2903 5.48387C11.2903 4.77125 10.7126 4.19355 10 4.19355Z" fill="#808FAD" />
                                    </svg>
                                    <h5>We will take pictures of:</h5>
                                    <p>Home Exterior, Roof, Structure, Plumbing, Electrical, HVAC, Doors, Windows, Decks, Bedrooms, Bathrooms, etc.</p>
                                 </FlipCardBack>
                              </FlipCardInner>
                           </FlipCard>
                        </OuterBox>
                        <OuterBox2>
                           <FlipCard2>
                              <FlipCardInner>
                                 <FlipCardFront>
                                    <svg className="symbol" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M10 1.29032C14.7831 1.29032 18.7097 5.16431 18.7097 10C18.7097 14.8101 14.8141 18.7097 10 18.7097C5.19177 18.7097 1.29032 14.816 1.29032 10C1.29032 5.19343 5.18556 1.29032 10 1.29032ZM10 0C4.47754 0 0 4.47915 0 10C0 15.5241 4.47754 20 10 20C15.5225 20 20 15.5241 20 10C20 4.47915 15.5225 0 10 0ZM8.54839 13.871H9.03226V9.03226H8.54839C8.28117 9.03226 8.06452 8.8156 8.06452 8.54839V8.22581C8.06452 7.95859 8.28117 7.74194 8.54839 7.74194H10.4839C10.7511 7.74194 10.9677 7.95859 10.9677 8.22581V13.871H11.4516C11.7188 13.871 11.9355 14.0876 11.9355 14.3548V14.6774C11.9355 14.9446 11.7188 15.1613 11.4516 15.1613H8.54839C8.28117 15.1613 8.06452 14.9446 8.06452 14.6774V14.3548C8.06452 14.0876 8.28117 13.871 8.54839 13.871ZM10 4.19355C9.28738 4.19355 8.70968 4.77125 8.70968 5.48387C8.70968 6.19649 9.28738 6.77419 10 6.77419C10.7126 6.77419 11.2903 6.19649 11.2903 5.48387C11.2903 4.77125 10.7126 4.19355 10 4.19355Z" fill="#808FAD" />
                                    </svg>
                                    <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M32.2315 35.8438H26.8148L25.6111 32.1875H18.3889L17.1852 35.8438H11.7685C10.7755 35.8438 9.96298 36.6664 9.96298 37.6719C9.96298 38.6773 10.7755 39.5 11.7685 39.5H32.2315C33.2283 39.5 34.0371 38.6812 34.0371 37.6719C34.0371 36.6626 33.2321 35.8438 32.2315 35.8438ZM23.8056 5.375V16.199L26.7419 13.226C27.4472 12.5119 28.5895 12.5119 29.2952 13.226C30.0009 13.9401 30.0005 15.0968 29.2952 15.8113L23.2767 21.9051C22.5714 22.6192 21.429 22.6192 20.7233 21.9051L14.7048 15.8113C13.9995 15.0972 13.9995 13.9405 14.7048 13.226C15.0561 12.8627 15.5151 12.6875 15.9815 12.6875C16.4479 12.6875 16.9053 12.866 17.2582 13.2231L20.1945 16.199V5.375H5.14816V27.3125H38.8519V5.375H23.8056Z" fill="#236DDE" />
                                       <path opacity="0.4" d="M43.6667 4.15625V28.5312C43.6667 30.5498 42.0492 32.1875 40.0556 32.1875H3.94445C1.95082 32.1875 0.333344 30.5498 0.333344 28.5312V4.15625C0.333344 2.13769 1.95082 0.5 3.94445 0.5H20.1945V5.375H5.14816V27.3125H38.8519V5.375H23.8056V0.5H40.0556C42.0492 0.5 43.6667 2.13769 43.6667 4.15625Z" fill="#236DDE" />
                                    </svg>
                                    <h5>Digitized Data</h5>
                                    <p>Processed data based on the<br/> pictures and videos</p>
                                 </FlipCardFront>
                                 <FlipCardBack>
                                    <svg className="symbol" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M10 1.29032C14.7831 1.29032 18.7097 5.16431 18.7097 10C18.7097 14.8101 14.8141 18.7097 10 18.7097C5.19177 18.7097 1.29032 14.816 1.29032 10C1.29032 5.19343 5.18556 1.29032 10 1.29032ZM10 0C4.47754 0 0 4.47915 0 10C0 15.5241 4.47754 20 10 20C15.5225 20 20 15.5241 20 10C20 4.47915 15.5225 0 10 0ZM8.54839 13.871H9.03226V9.03226H8.54839C8.28117 9.03226 8.06452 8.8156 8.06452 8.54839V8.22581C8.06452 7.95859 8.28117 7.74194 8.54839 7.74194H10.4839C10.7511 7.74194 10.9677 7.95859 10.9677 8.22581V13.871H11.4516C11.7188 13.871 11.9355 14.0876 11.9355 14.3548V14.6774C11.9355 14.9446 11.7188 15.1613 11.4516 15.1613H8.54839C8.28117 15.1613 8.06452 14.9446 8.06452 14.6774V14.3548C8.06452 14.0876 8.28117 13.871 8.54839 13.871ZM10 4.19355C9.28738 4.19355 8.70968 4.77125 8.70968 5.48387C8.70968 6.19649 9.28738 6.77419 10 6.77419C10.7126 6.77419 11.2903 6.19649 11.2903 5.48387C11.2903 4.77125 10.7126 4.19355 10 4.19355Z" fill="#808FAD" />
                                    </svg>
                                    <h5>Then, we will digitize and process this data:</h5>
                                    <p>Measurements, materials, configurations, brands, model numbers, Valve Locations, Filter Sizes, Electrical System Specifications, Efficiency Ratings and more.</p>    </FlipCardBack>
                              </FlipCardInner>
                           </FlipCard2>
                        </OuterBox2>
                     </TwoBlocks>
                     <BottonBlks>
                        <Box>
                           <svg width="50" height="50" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.5901 37.3216L20.5912 39.9235C20.5912 40.3506 20.7192 40.7666 20.9541 41.1227L22.1112 42.8652C22.4667 43.3993 23.2744 43.8338 23.9156 43.8338H28.0946C28.7336 43.8338 29.5422 43.4001 29.8977 42.8659L31.0548 41.1234C31.2541 40.8826 31.4166 40.3467 31.4166 39.9872L31.4272 35.2155L20.6007 35.2156L20.5901 37.3216ZM11.9166 22.1891C11.9166 21.2904 11.1888 20.5612 10.2916 20.5612H5.95831C5.06118 20.5612 4.33331 21.2904 4.33331 22.1891C4.33331 23.0878 5.06118 23.817 5.95831 23.817H10.2916C11.1922 23.817 11.9166 23.0912 11.9166 22.1891ZM46.0416 20.5612H41.7083C40.8112 20.5612 40.0833 21.2904 40.0833 22.1891C40.0833 23.0878 40.8112 23.817 41.7083 23.817H46.0416C46.9388 23.817 47.6666 23.0878 47.6666 22.1891C47.6666 21.2904 46.9422 20.5612 46.0416 20.5612ZM13.2099 12.9136L9.45206 10.7431C8.95441 10.4379 8.3281 10.4297 7.81217 10.718C7.30435 11.0147 6.99087 11.557 6.99087 12.1424C6.99933 12.7359 7.32094 13.2785 7.82909 13.5586L11.5849 15.7285C12.0859 16.0371 12.7156 16.0439 13.2302 15.7542C13.738 15.4575 14.0508 14.9152 14.0508 14.3299C14.0427 13.7364 13.7177 13.1937 13.2099 12.9136ZM44.1729 30.8236L40.4151 28.6531C39.9157 28.3479 39.2898 28.3394 38.7732 28.6277C38.2653 28.9244 37.9525 29.4667 37.9525 30.0521C37.961 30.6456 38.2826 31.1882 38.7908 31.4683L42.5486 33.6388C43.3191 34.0713 44.3009 33.7999 44.741 33.0284C45.1818 32.2616 44.9245 31.2781 44.1729 30.8236ZM11.5849 28.6531L7.82842 30.8236C7.3206 31.1034 6.99899 31.6457 6.99019 32.2399C6.99019 32.8249 7.30334 33.3679 7.81149 33.6643C8.32777 33.9526 8.95373 33.9441 9.45342 33.6388L13.2112 31.4683C13.9641 31.0105 14.2181 30.027 13.7783 29.2639C13.3385 28.4903 12.3568 28.219 11.5849 28.6531ZM39.6094 15.9489C39.8887 15.9489 40.1679 15.8726 40.4219 15.7285L44.1715 13.558C44.9333 13.1001 45.179 12.1166 44.7386 11.3536C44.2985 10.5817 43.3167 10.3104 42.5462 10.7431L38.7969 12.9136C38.1536 13.2782 37.8489 14.0328 38.0351 14.745C38.2281 15.4572 38.8713 15.9489 39.6094 15.9489Z" fill="#236DDE" />
                              <path opacity="0.4" d="M25.9661 9.16703C19.0599 9.18399 14.0833 14.7347 14.0833 21.0427C14.0833 23.9342 15.126 26.724 17.03 28.8972C18.1553 30.1778 19.8981 32.8469 20.5671 35.1022C20.5671 35.1191 20.5748 35.1368 20.5748 35.1537L31.4285 35.1538C31.4285 35.1368 31.4341 35.1191 31.4341 35.1022C32.1027 32.8469 33.8452 30.1772 34.9712 28.8972C36.8739 26.7878 37.9166 23.9932 37.9166 21.0427C37.9166 14.4986 32.5541 9.15008 25.9661 9.16703ZM26 15.6782C23.012 15.6782 20.5833 18.1112 20.5833 21.0434C20.5833 21.6454 20.1009 22.1286 19.5 22.1286C18.8991 22.1286 18.4166 21.6454 18.4166 21.0434C18.4234 16.9052 21.8088 13.5165 26 13.5077C26.6009 13.5077 27.0833 13.991 27.0833 14.5929C27.0833 15.1948 26.6026 15.6782 26 15.6782Z" fill="#236DDE" />
                           </svg>
                           <h6>Insights</h6>
                        </Box>
                        <Box>
                           <svg width="32" height="32" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.3926 15.9583C17.3926 16.7191 16.7679 17.3312 15.9914 17.3312C15.2148 17.3312 14.5901 16.7191 14.5901 15.9583V9.55158C14.5901 8.79078 15.2148 8.17871 15.9914 8.17871C16.7679 8.17871 17.3926 8.79078 17.3926 9.55158V15.9583ZM14.123 20.9922C14.123 19.9797 14.958 19.1617 15.9914 19.1617C17.0248 19.1617 17.8597 19.9797 17.8597 20.9922C17.8597 22.0047 17.0248 22.8227 15.9914 22.8227C14.958 22.8227 14.123 22.0047 14.123 20.9922Z" fill="#236DDE" />
                              <path opacity="0.4" d="M15.9972 0.854492C16.7153 0.854492 17.3693 1.25452 17.6787 1.88467L21.4328 9.45436L29.8227 10.6671C30.5175 10.7643 31.1014 11.2448 31.3232 11.9027C31.5451 12.5662 31.3641 13.287 30.862 13.7789L24.7783 19.6251L26.2146 28.0111C26.3313 28.6975 26.0452 29.3954 25.4614 29.8015C24.8834 30.2077 24.1185 30.2591 23.4938 29.9331L15.9972 26.0147L8.50643 29.9331C7.87587 30.2591 7.11103 30.2077 6.53302 29.8015C5.95501 29.3954 5.66309 28.6975 5.7857 28.0111L7.22196 19.6251L1.1371 13.7789C0.634403 13.287 0.455745 12.5662 0.67644 11.9027C0.89655 11.2448 1.47865 10.7643 2.17868 10.6671L10.5616 9.45436L14.3216 1.88467C14.631 1.25452 15.2849 0.854492 15.9972 0.854492ZM14.5901 9.55161V15.9584C14.5901 16.7192 15.2149 17.3312 15.9914 17.3312C16.7679 17.3312 17.3926 16.7192 17.3926 15.9584V9.55161C17.3926 8.7908 16.7679 8.17873 15.9914 8.17873C15.2149 8.17873 14.5901 8.7908 14.5901 9.55161ZM15.9914 19.1617C14.958 19.1617 14.1231 19.9797 14.1231 20.9922C14.1231 22.0047 14.958 22.8227 15.9914 22.8227C17.0248 22.8227 17.8597 22.0047 17.8597 20.9922C17.8597 19.9797 17.0248 19.1617 15.9914 19.1617Z" fill="#236DDE" />
                           </svg>
                           <Text>
                              <h6>Action Items</h6>
                              <p>Repairs, Costs,  Recommendations</p>
                           </Text>
                        </Box>
                        <Box>
                           <svg width="32" height="32" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.4" d="M31.188 9.63008L28.3344 7.10457V2.47945C28.3344 2.27501 28.2531 2.07894 28.1086 1.93437C27.964 1.78981 27.7679 1.7086 27.5635 1.7086H26.0218C25.8173 1.7086 25.6213 1.78981 25.4767 1.93437C25.3321 2.07894 25.2509 2.27501 25.2509 2.47945V4.37238L20.9881 0.596639C20.6766 0.319865 20.2743 0.166992 19.8576 0.166992C19.4409 0.166992 19.0386 0.319865 18.7271 0.596639L8.52338 9.63008C8.38787 9.75008 8.30552 9.91894 8.29441 10.0996C8.2833 10.2803 8.34434 10.458 8.46412 10.5936L9.36939 11.6189C9.48946 11.7542 9.65821 11.8365 9.83876 11.8478C10.0193 11.859 10.197 11.7984 10.333 11.6791L11.3755 10.7599V13.8433C13.1819 15.6126 14.5259 17.7986 15.2896 20.2091H26.7926C27.2015 20.2091 27.5937 20.0467 27.8828 19.7575C28.1719 19.4684 28.3344 19.0763 28.3344 18.6674V10.7584L29.376 11.6815C29.5123 11.8 29.6898 11.8601 29.8701 11.8488C30.0504 11.8375 30.219 11.7558 30.3395 11.6213L31.2448 10.5961C31.3648 10.4602 31.4261 10.2823 31.4155 10.1014C31.4048 9.92038 31.3231 9.75097 31.188 9.63008ZM22.1675 13.2714C22.1669 13.4756 22.0855 13.6713 21.941 13.8158C21.7966 13.9602 21.6009 14.0416 21.3967 14.0423H18.3132C18.1088 14.0423 17.9127 13.961 17.7682 13.8165C17.6236 13.6719 17.5424 13.4758 17.5424 13.2714V10.188C17.5424 9.98354 17.6236 9.78747 17.7682 9.64291C17.9127 9.49835 18.1088 9.41713 18.3132 9.41713H21.3967C21.6009 9.41777 21.7966 9.49919 21.941 9.64361C22.0855 9.78804 22.1669 9.98374 22.1675 10.188V13.2714Z" fill="#236DDE" />
                              <path d="M0.583344 20.2092V24.8344H5.20847C5.20847 23.6077 4.72118 22.4313 3.8538 21.5639C2.98642 20.6965 1.81 20.2092 0.583344 20.2092H0.583344ZM0.583344 15.5841V18.6641C2.21959 18.6648 3.78863 19.3151 4.94563 20.4721C6.10263 21.6291 6.75291 23.1981 6.75355 24.8344H9.83359C9.83359 19.7274 5.69025 15.5841 0.583344 15.5841ZM0.583344 10.959V14.039C6.54349 14.039 11.3787 18.8742 11.3787 24.8344H14.4587C14.4587 17.1711 8.24659 10.959 0.583344 10.959Z" fill="#236DDE" />
                           </svg>
                           <Text>
                              <h6>Home Systems</h6>
                              <p>Life Expectancy, Recall Status, etc.</p>
                           </Text>
                        </Box>
                        <Box>
                           <svg width="32" height="32" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.29168 3.25033C8.29168 1.54727 9.67436 0.166992 11.375 0.166992C13.0757 0.166992 14.4583 1.54727 14.4583 3.25033C14.4583 4.95338 13.0757 6.33366 11.375 6.33366C9.67436 6.33366 8.29168 4.95338 8.29168 3.25033ZM25.25 6.33366C25.25 4.6306 26.6327 3.25033 28.3333 3.25033C30.034 3.25033 31.4167 4.6306 31.4167 6.33366C31.4167 8.03431 30.034 9.41699 28.3333 9.41699C26.6327 9.41699 25.25 8.03431 25.25 6.33366ZM31.4167 21.7503C31.4167 23.451 30.034 24.8337 28.3333 24.8337C26.6327 24.8337 25.25 23.451 25.25 21.7503C25.25 20.0497 26.6327 18.667 28.3333 18.667C30.034 18.667 31.4167 20.0497 31.4167 21.7503ZM0.583344 14.8128C0.583344 13.1122 1.96362 11.7295 3.66668 11.7295C5.36974 11.7295 6.75001 13.1122 6.75001 14.8128C6.75001 16.5135 5.36974 17.8962 3.66668 17.8962C1.96362 17.8962 0.583344 16.5135 0.583344 14.8128Z" fill="#236DDE" />
                              <path opacity="0.4" d="M15.3063 8.02962C15.7784 7.92845 16.2698 7.83209 16.7709 7.83209C18.5101 7.83209 20.0951 8.51621 21.314 9.57128L25.2693 6.62767C25.3898 7.78392 26.1028 8.72337 27.0904 9.15696L23.1399 12.0572C23.506 12.9003 23.7084 13.8349 23.7084 14.7696C23.7084 15.5645 23.5879 16.292 23.3663 16.9713L26.8351 19.0525C25.9052 19.5728 25.2693 20.5605 25.25 21.6974L21.7765 19.6162C20.5142 20.8881 18.7365 21.7504 16.7709 21.7504C13.4707 21.7504 10.7054 19.4428 10.0068 16.3546H6.33569C6.60067 15.9017 6.75002 15.3766 6.75002 14.8129C6.75002 14.2493 6.60067 13.7241 6.33569 13.2279H10.0068C10.3633 11.6814 11.269 10.3036 12.512 9.33522L11.1052 6.32415C11.1968 6.32897 11.2835 6.33379 11.375 6.33379C12.4205 6.33379 13.3455 5.81348 13.8995 5.01855L15.3063 8.02962ZM16.7709 18.6671C18.9003 18.6671 20.625 16.9424 20.625 14.7696C20.625 12.6835 18.9003 10.9154 16.7709 10.9154C14.6414 10.9154 12.8733 12.6835 12.8733 14.7696C12.8733 16.9424 14.6414 18.6671 16.7709 18.6671Z" fill="#236DDE" />
                           </svg>
                           <Text>
                              <h6>3rd Party Data</h6>
                              <p>Documents, <br />Permits, etc.</p>
                           </Text>
                        </Box>
                     </BottonBlks>
                  </SubBlock>
               </Item>
            </Grid>
            <HomeIcon className="hidden">
               <StaticImage src="../../assets/images/home-icon1.png" alt="" />
            </HomeIcon>
            <Paragraph>
               See&nbsp;<Link target="_blank" to="https://docs.google.com/spreadsheets/d/1cHbdqx2p1szuAg0fldboAHx6akrKsaZBjHDP0jiB3Gg/edit?usp=sharing">
                  HomeCloud Certification Standards</Link> for a full list of what’s included
            </Paragraph>
         </Container>
      </Wrapper>
   )
}
export default FeatureSection;


const Wrapper = styled.div`
padding:120px 0 50px 0;
background: linear-gradient(104.71deg, #3180F4 0%, #0047AD 54.68%, #0A5ACB 97.16%);
position:relative;
@media (max-width: 991px) {
    padding:70px 0 50px 0;
    text-align:center;
}
@media (max-width: 767px) {
    padding:50px 0;
}
`;
const Container = styled.div`
content-visibility: auto;
contain-intrinsic-size: 500px;
max-width: 1100px;
margin: 0 auto;
padding: 0 15px;
`;
const Grid = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 10px 30px;
justify-content:center;
align-items:center;
@media (min-width: 992px) {
   grid-template-columns: 4fr 8fr;
}
`;
const Item = styled.div`
`;
const Paragraph = styled.p`
color:#fff;
text-align:center;
margin:50px 0 0 0;
a{
   font-weight:700;
   color:#fff;
   text-decoration:underline;
   &:hover{
      color:#fff;
   }
}
@media (max-width: 767px) {
   margin:30px 0 0 0;
}
`;
const TextBlock = styled.div`
@media (min-width: 1200px) {
padding-right:30px;
}
p, h2{
    color:#fff;
}
h2{
    font-size:32px;
    line-height: 43px;
    letter-spacing: -0.44px;
    margin-bottom:12px;
}
@media (min-width:600px) and  (max-width:991px)  {
   p{
      max-width:500px;
      margin:0 auto 10px auto;
   }
}
@media (max-width: 599px) {
   p{
      margin-bottom:10px;
   }
}
`;
const HomeIcon = styled.div`
width:120px;
height:120px;
background: #FFFFFF;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1), 0px 0px 3px rgba(0, 0, 0, 0.16);
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
margin-top:30px;
position:relative;
@media (max-width: 991px) {
   display:inline-flex;
   margin-top:70px;
}
&:before{
   content:'';
   position:absolute;
   left:128px;
   top:0;
   background-image:url(${Arrow3});
   background-position:right center;
   background-repeat:no-repeat;
   width:250px;
   height:100%;
   background-size: 100%;
   @media (min-width:992px) and  (max-width:1100px)  {
      width:215px;
   }
   @media (min-width:1050px) and  (max-width:1100px)  {
      width:235px;
   }
   @media (max-width: 991px) {
      background-image:url(${Arrow4});
      left: 55px;
      top: -65px;
      width:16px;
      height:44px;
   }
}
`;
const SubBlock = styled.div`
padding:20px;
border:2px dashed #fff;
@media (max-width: 991px) {
   margin-top:30px;
}
`;
const TwoBlocks = styled.div`
display:flex;
justify-content:space-between;
margin-bottom:80px;
@media (min-width: 768px) {
   grid-template-columns: 6fr 6fr;
   display:grid;
}
@media (max-width:767px) {
   flex-wrap:wrap;
   margin-bottom:0px;
   flex-direction:column;
}
`;
const OuterBox = styled.div`
position:relative;
&:before{
   content:'';
   position:absolute;
   right:-12px;
   top:45%;
   background-image:url(${Arrow1});
   background-position:right center;
   background-repeat:no-repeat;
   width:52px;
   height:16px;
   @media only screen and (min-width: 896px) and (max-width: 991px) {
      right:0px;
   }
   @media (max-width:767px) {
      background-image:url(${Arrow5});
      right: -4px;
      height:82px;
      width:45px;
   }
}
`;
const OuterBox2 = styled.div`
position:relative;
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
      left:-4px;
      bottom:45px;
   }     
}
`;
const FlipCard = styled.div`
background-color: transparent;
width: 90%;
height: 220px;
perspective: 1000px;
&:hover span{
   transform: rotateY(180deg);
}
@media (max-width:767px) {
   margin-bottom: 30px;
   width:94%;
}
@media (max-width:680px) {
   width:92.5%;
}
@media (max-width:550px) {
   width:91%;
}
@media (max-width:430px) {
   width:88%;
}
@media (max-width:365px) {
   width:85%;
}
`;
const FlipCard2 = styled.div`
background-color: transparent;
width: 90%;
height: 220px;
perspective: 1000px;
float:right;
&:hover span{
   transform: rotateY(180deg);
}
@media (max-width:767px) {
   margin-bottom: 30px;
   width:94%;
}
@media (max-width:680px) {
   width:92.5%;
}
@media (max-width:550px) {
   width:91%;
}
@media (max-width:430px) {
   width:88%;
}
@media (max-width:365px) {
   width:85%;
}

`;
const FlipCardInner = styled.span`
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.6s;
transform-style: preserve-3d;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
h5{
   color: rgb(35, 109, 222);
margin-top: 16px;
}
p{  color: rgb(82, 94, 107);
   font-size: 14px;
   line-height: 20px;
   margin: 0px;
 }
 svg.symbol{
    position:absolute;
    top:15px;
    right:15px;
 }

`;
const FlipCardFront = styled.div`
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
background-color: #fff;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
padding: 45px 16px;
box-shadow: rgba(0, 0, 0, 0.13) 0px 5px 20px;
border-radius: 6px;
@media (max-width:400px) {
   padding:30px 14px;
   p br{
      display:none;
   }
}
`;
const FlipCardBack = styled.div`
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
background-color: #fff;
color: white;
transform: rotateY(180deg);
display:flex;
flex-direction:column;
justify-content:center;
align-items:start;
text-align:left;
padding: 45px 16px;
box-shadow: rgba(0, 0, 0, 0.13) 0px 5px 20px;
border-radius: 6px;
h5{
   font-size:15px;
   line-height:20px;
   margin-top:0;
   margin-bottom:5px;
   letter-spacing: -0.07875px;
}
p{
   font-size: 13px;
   line-height: 19px;
   letter-spacing: -0.073125px;
}
@media (max-width:400px) {
   padding:30px 14px;
}
`;
const BottonBlks = styled.div`
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
border-radius: 6px;
padding:32px 16px;
display:flex;
flex-direction:row;
@media (max-width:767px) {
   flex-wrap:wrap;
}
`;
const Box = styled.div`
background: #ECF2FE;
border-radius: 6px;
padding:25px 10px;
margin:0 6px;
text-align:center;
width:25%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height:165px;
@media (max-width:767px) {
   width:100%;
   display:flex;
   flex-direction:row;
   text-align:left;
   min-height:inherit;
   margin:0;
   margin-bottom:12px;
}
@media (min-width: 992px) and  (max-width:1100px)  {
   min-height:220px;
}
h6{
   color: #0A5ACB;
   font-size: 14px;
   line-height: 20px;
   margin:11px 0 4px 0;
}
p{
   color: #525E6B;
   font-size: 13px;
   line-height: 19px;
   margin:0;
}
&:nth-child(1){
background-color:#fff;
   h6{
      font-size:18px;
   }
   @media (max-width:767px) {
      flex-direction:column;
   }
}
`;
const Text = styled.div`
@media (max-width:767px) {
padding-left:15px;
width:100%;
p br{
   display:none;
}
}
`;
