import React from 'react'
import ReactDOM from "react-dom";

import {Header, Modal, Grid, Image, Segment, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'

const TouristGridItem = ( {yelp} )=> {
	return (

    <Modal 
      trigger={
        <Segment raised>
          <div class="tourist-container">
            <Image src={yelp.src} fluid />
          </div>
          <div class="tourist-item-container">
            <p>{yelp.name}</p>
          </div>
        </Segment>
      } 
      closeIcon>


      <Modal.Content image>
        <Image wrapped size='large' src={yelp.src} />
        <Modal.Description>
          <Header><a target="_blank" href={yelp.link}>{yelp.name}</a></Header>
          <p>{yelp.address}</p>
          <p><a target="_blank" href={yelp.map}>{yelp.miles} from Rose Bowl </a></p>
          <p>{yelp.description}</p>
        </Modal.Description>
      </Modal.Content>

    </Modal>
	);
};

export default TouristGridItem;

      // <Modal.Header>{yelp.name}</Modal.Header>
