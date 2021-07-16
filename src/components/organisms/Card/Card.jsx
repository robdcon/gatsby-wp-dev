import React from 'react';
import { StyledCard, StyledDescription } from './Card.styles';
import { GatsbyImage } from "gatsby-plugin-image";
import Button from '../../atoms/Button';

const Card = ({title, linkText, description, image }) => {
  console.log(image)
  const featuredImage = {
    fluid: image?.localFile?.childImageSharp?.gatsbyImageData,
    alt: image?.node?.alt || ``,
  }
  return (
    <StyledCard className="CardWrapper">
      <GatsbyImage 
      className="logo" 
        image={featuredImage.fluid} 
        alt=""
        placeholder="blurred"
        layout="fixed"
        width={150}
        height={100} 
      />
      <h3>{title}</h3>
      <StyledDescription>
        {description}
      </StyledDescription>
      <Button text={linkText} />
    </StyledCard>
  )
};

export default Card;
