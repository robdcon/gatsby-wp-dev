import React from 'react';
import { CardRow, StyledCardContainer } from './CardContainer.styles';
import Card from '../Card/Card';

const CardContainer = ({heading, cards}) => {
  console.log(cards)
  return(
    <StyledCardContainer>
    <h2>{heading}</h2>
    <CardRow className="CardContainerWrapper">
      {
        cards && cards.map(({card: { details: {title, description, linkText, linkUrl, image}}}) => {
          return(
            <Card 
              key={title}
              title={title}
              description={description}
              linkText={linkText}
              image={image}
            />
          )
        })
      }
    </CardRow>
    </StyledCardContainer>
  )
};

export default CardContainer;
