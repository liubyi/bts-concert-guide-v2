import React from 'react'
import ReactDOM from "react-dom";
import {Grid, Card, Button, Header, Icon, Modal, Segment, Image } from 'semantic-ui-react'

let summaries = [
{
  src: 'images/car1.jpg',
  name: 'Transportation',
  description: 'Learn the best way to get to and from the Rose Bowl, where to find parking, and the pros and cons of driving vs public transit.'
}, 
{
  src: 'images/math1.jpg',
  name: 'Car Rental vs Uber Cost Calculator',
  description: "Estimate the cost of renting a car, and compared that with ridesharing. List all of the places you'll be going, and use the Uber Cost Estimator to calculate all of the costs for each trip with a single click."
},
{
  src: 'images/store.jpg',
  name: 'Explore LA + Pasadena',
  description: "If you don't want to wait in line for merch, grab some at the BT21 store or Kpop music stores in Koreatown. Explore tourist attractions, in LA and in Pasadena."
},
{
  src: 'images/eat2.jpg',
  name: 'Food',
  description: "Los Angeles has some amazing food places, so don't miss out. Plenty of delicious food and dessert places in Pasadena too."
},
{
  src: 'images/bring1.jpg',
  name: 'What To Bring',
  description: "Use the packing list to make sure you have all your concert essentials."
},
{
  src: 'images/bag19.jpg',
  name: 'Approved Bags',
  description: "Learn the bag policy and find bags that have been officially approved by the Rose Bowl Stadium."
},
{
  src: 'images/donuts.jpg',
  name: 'Freebies',
  description: "Can't afford merch or don't want to wait in line? Many ARMYs will be handing out handmade merchandise or food (like these BT21 donuts)! Most of them will be updating their locations on social media, so don't miss out on these goodies."
},
{
  src: 'images/fanchant.jpg',
  name: 'Misc',
  description: "Learn more about BTS Studio, fanchants, concert outfit ideas, lining up for merchandise, and staying safe."
}
];

const Home = () => {

  const cards = summaries.map(summary => {
    return (
        <Card key={summary.name}>
          <Image src={summary.src} />
          <Card.Content>
            <Card.Header textAlign='center'>{summary.name}</Card.Header>
            <Card.Description>{summary.description}</Card.Description>
          </Card.Content>
        </Card>
    );
  });

  return (

     <div>
        

        <div className="home-gallery">
        <Grid doubling columns={4}>
            {cards}
        </Grid>
        </div>

    </div>
      
  );
};

export default Home;

      // <div className="image-gallery">
      //   <Card.Group itemsPerRow={4}>
      //     {cards}
      //   </Card.Group>
      // </div>

      // <p>
      //     There are lots of things to do in LA. Be prepared for a lot of walking and waiting in traffic. 
      //     Many of these locations are from this <a target="_blank" href="https://docs.google.com/document/u/1/d/1xCC6CLX1L_ek9urQgDbQaRjaYrfkyzk2hHfPpyKA6Q8/mobilebasic?fbclid=IwAR3D-bq_wwzx84cAFSzGwQkWhW_v8rAZ5x6Ggbc5SwjMzA630Ym_DKnu9BE">guide</a>,
      //     so be sure to check it out for more places to go. 
      //   </p>