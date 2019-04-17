import React from 'react'
import ReactDOM from "react-dom";

import { Grid, Image, Segment, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'

const YelpItem = ( {yelp} )=> {
	return (
		<Item>

          <Popup
                trigger={<Item.Image size='small' src={yelp.src} />}
                content={<Item.Image size='large' src={yelp.src} />}
                on='hover'
                position='top right'
          />
          

          <Item.Content>

          <Item.Header><a target="_blank" href={yelp.link}>{yelp.name}</a></Item.Header>
          
          <span className='yelp-container'>
            <Button basic compact color='red' size='mini' floated='right' className='yelp-button' >
            <a target="_blank" href={yelp.link}>Yelp</a>
            <Icon name='right chevron' />
            </Button>
          </span>

          <Item.Meta>
            <span className='price' icon='dollar sign'>
              {yelp.dollar}
            </span>
            <span className='rating'>
            	{yelp.numWholeStars}
            	{yelp.numHalfStars}
            </span>
            <span className='direction'>
              <Popup
                trigger={<Label basic content={yelp.miles} />}
                content={<a target="_blank" href={yelp.map}>{yelp.address}</a>}
                on='click'
                position='top right'
              />
            </span>
          </Item.Meta>
          <p>{yelp.description}</p>
          
        </Item.Content>
        </Item>


	);
};

export default YelpItem;

