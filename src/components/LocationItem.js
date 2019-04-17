import React from 'react'
import ReactDOM from "react-dom";

import {Card, Grid, Image, Segment, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'


const LocationItem = ( {yelp} )=> {
	return (

    <Card fluid>
      
      <Image src={yelp.src} fluid/>
      <Card.Content>
        <Card.Header><a href={yelp.link} target="_blank">{yelp.name}</a></Card.Header>
        <Card.Meta>
          {yelp.address}

        </Card.Meta>
        <Card.Description>{yelp.description}</Card.Description>
        <p><a target="_blank" href={yelp.map}>{yelp.miles} from Rose Bowl </a></p>
      </Card.Content>
    </Card>


	);
};

export default LocationItem;
