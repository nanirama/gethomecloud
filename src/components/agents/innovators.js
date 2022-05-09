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
                                <GatsbyImage key={index} image={getImage(item.innovator_logo)} />
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
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 30px;margin:50px 0px;
  @media (max-width:767px) {
    grid-template-columns: 45% 45%;
    margin:5px 5%;
  }
  @media (max-width:479px) {
    grid-template-columns: 100%;
    & > .gatsby-image-wrapper{
        margin:5px 25px;
    }
  }
 `

const Button = styled.div`
display:flex;justify-content: center;
`