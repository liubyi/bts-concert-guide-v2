import React from 'react'
import ReactDOM from "react-dom";

import {Header, Modal, Grid, Image, Segment, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'

const FreebieItem = ( {freebie} )=> {
	return (

    <Modal 
      trigger={
        <Segment raised>
          <div class="tourist-container">
            <Image src={freebie.src} fluid />
          </div>
          <div class="tourist-item-container">
            <p>{freebie.social}</p>
          </div>
        </Segment>
      } 
      closeIcon>


      <Modal.Content image>
        <Image wrapped size='massive' src={freebie.src} />
        <Modal.Description>
          <Header><a target="_blank" href={freebie.link}>Link to Facebook post</a></Header>
          <p>{freebie.social}</p>
          <p>{freebie.description}</p>
        </Modal.Description>
      </Modal.Content>

    </Modal>
	);
};

export default FreebieItem;

