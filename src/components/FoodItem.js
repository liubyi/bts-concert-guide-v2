import React from 'react'
import ReactDOM from "react-dom";

import {Card, Grid, Image, Segment, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'



const FoodItem = ( {yelp} )=> {
	return (

    <Card fluid>
      
      <Image src={yelp.src} fluid/>
      <Card.Content>
        <Card.Header><a href={yelp.link} target="_blank">{yelp.name}</a></Card.Header>
        <Card.Meta>
          <span className='price' icon='dollar sign'>
              {yelp.dollar}
            </span>

            <span className='rating'>
              {yelp.numWholeStars}
              {yelp.numHalfStars}
            </span>

        </Card.Meta>
        <Card.Description>{yelp.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span className='direction'>
              <Popup
                trigger={<Label basic size='small' content={yelp.miles} />}
                content={<a target="_blank" href={yelp.map}>{yelp.address}</a>}
                on='click'
                position='top right'
              />
        </span>
            
        <span className='yelp-container'>
              <Button basic compact color='red' size='mini' floated='right' className='yelp-button' >
              <a target="_blank" href={yelp.link}>Yelp</a>
              <Icon name='right chevron' />
              </Button>
        </span>
        
      </Card.Content>
    </Card>


	);
};

export default FoodItem;

      // <Popup
      //           trigger={<Item.Image size='medium' src={yelp.src} fluid />}
      //           content={<Item.Image size='large' src={yelp.src} fluid/>}
      //           on='hover'
      //           position='top right'
      // />

// <Card>
//           <Image src={summary.src} />
//           <Card.Content>
//             <Card.Header textAlign='center'>{summary.name}</Card.Header>
//             <Card.Description>{summary.description}</Card.Description>
//           </Card.Content>
//         </Card>