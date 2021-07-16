import React from 'react';
import { StyledCard, StyledDescription } from './Card.styles';
import { StaticImage } from "gatsby-plugin-image";
import Button from '../../atoms/Button';

const Card = ({cardButtonText, cardDescription}) => (
  <StyledCard className="CardWrapper">
    <StaticImage 
     className="logo" 
      src="https://via.placeholder.com/150x100" 
      alt=""
      placeholder="blurred"
      layout="fixed"
      width={150}
      height={100} 
    />
    <StyledDescription>
      {cardDescription}
    </StyledDescription>
    <Button text={cardButtonText} />
  </StyledCard>
);

export default Card;
