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
        alt={featuredImage.alt}
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
