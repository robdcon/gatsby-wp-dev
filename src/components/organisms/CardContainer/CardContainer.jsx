import React from 'react';
import { CardRow } from './CardContainer.styles';
import Card from '../Card/Card';

const CardContainer = ({cards}) => {
  console.log(cards)
  return(
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
  )
};

export default CardContainer;
