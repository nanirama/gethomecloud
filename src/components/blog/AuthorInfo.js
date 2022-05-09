import React, { useState } from "react"
import styled from "styled-components";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
const AuthorInfo = ({data}) => {
    const { name, image } = data.document.data
  return (
    <Author>
        <GatsbyImage image={getImage(image)} alt={name.text} />
        <h6>{name.text}</h6>
    </Author>
  );
};

export default AuthorInfo;

const Author = styled.div`
display:flex;
align-items:center;
h6{
  padding-left:15px;
}
@media (max-width: 479px) {
  margin-bottom:20px;
}   
img{
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}
`;