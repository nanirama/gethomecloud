import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image"


const Innovarors = ({data}) => {
    const { primary, items } = data
    const { innovators_heading, innovators_content, button_text, button_link } = primary
    return (

        <>
            <Section>
                <Container>
                    <h2>{innovators_heading}</h2>
                    <p>{innovators_content}</p>
                    <Logos>
                        {items && items.map((item, index)=>{
                            return(
                                <LogoItem>
                                <GatsbyImage key={index} image={getImage(item.innovator_logo)} />
                                </LogoItem>
                            )
                        })}
                    </Logos>
                    <Button>
                        <Link className="btn" to={`/${button_link}`}>{button_text}</Link>
                    </Button>
                </Container>
            </Section>

        </>
    );
};
export default Innovarors;


const Section = styled.div`
 padding:100px 0;text-align:center;
 h2{font-weight: 700;
    font-size: 44px;
    line-height: 54px;margin-bottom:30px;
    @media (max-width:600px) {
        font-size: 30px; line-height:40px;
    }
}
    @media (max-width:900px) {
        padding:50px 0;
    }
 `
const Container = styled.div`
 max-width: 700px;
margin: 0 auto;
padding: 0 15px;
 
 `
const Logos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin:50px 0px;
    flex-direction: row;
    justify-content: center;

  @media (max-width:479px) {
    flex-direction: column;
    & > .gatsby-image-wrapper{
        margin:5px 25px;
    }
  }
 `
const LogoItem = styled.div`
width: 33%;
@media (max-width:767px) {
width:45%;
margin:5px 5%;
}
& > .gatsby-image-wrapper{
    margin:6px 25px;
}
`
const Button = styled.div`
display:flex;justify-content: center;
`