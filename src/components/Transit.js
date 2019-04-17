import React from 'react'
import ReactDOM from "react-dom";
import { Grid, Image, Segment, Header, List, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'


const Transit = () => (
  <div>
  	<div className='transit-container'>

  	<Segment vertical>
  		<Header as='h4'>Uber/Lyft vs Rental Car</Header>
  		<List bulleted>
    	<List.Item>If you're staying at a hotel nearby and don't plan to travel very much, Uber or Lyft may be the cheapest option.</List.Item>
	    <List.Item>
	      If you're planning to drive around LA, then rental car is cheaper. Use the Uber Cost Estimator to estimate Uber costs and compare them to rental car prices to see which one is the best option for you.
	      <List.List>
	      	<List.Item>
	      		For discounts, check and see who the agencies partner with. I think Avis partners with <a target="_blank" href="https://www.costcotravel.com/Rental-Cars">Costco</a> 
	      		, and Hertz partners with Delta <a target="_blank" href="https://www.delta.com/merch/advancedSearchAction.action">(for Skymiles members)</a>.
	      	</List.Item>
	      	<List.Item>If you're under 25 years old, the rental car fees range from $15 to $57 per day. 
	      		<a target="_blank" href="https://www.avis.com/en/home"> Avis </a>,
	      		<a target="_blank" href="https://www.budget.com/en/products-services/services"> Budget </a>,
	      		<a target="_blank" href="https://www.hertz.com/rentacar/reservation/"> Hertz </a> are on the lower end of that range. 
	      		For most companies, the minimum age to rent a car is 20 years old.
	      	</List.Item>
	        
	      </List.List>
	    </List.Item>
	    <List.Item>
	    	Recommendation: If you're over 25 years old, rent a car and explore LA.
	    	<List.List>
		        <List.Item>Traffic is terrible so give yourself at least two hours to drive across LA to Pasadena.</List.Item>
		        <List.Item>Parking at Rose Bowl is expensive and takes a long time to exit. It's better to park at a parking garage
              in Pasadena (~$20-30 for Parsons) and take the shuttle to the bowl.</List.Item>
              	<List.Item> I've heard someone say to go EARLY, bring a picnic (order food to go in Pasadena) with disposable utensils 
              (you can’t take many things through security), have a picnic on one of the grassy areas outside the bowl. Then toss everything, go inside see the show. Afterward, 
              walk out of the bowl until car traffic looks ok and call an Uber/Lyft (the shuttle line might take a while but it's cheaper).</List.Item>
	      	</List.List>
	    </List.Item>
	  </List>
  	</Segment>

  	<Segment vertical>
    	<Header as='h4'>Safety</Header>
    	<List bulleted>
	    <List.Item>
	      Walking from the garages in Pasadena to the Rose Bowl, and back, will be safe because there will be hundreds of people doing it too.</List.Item>
	    <List.Item>When using Lyft/Uber: BEFORE you get into the car, confirm the license plate, the driver, and ask who they're there to pick up. 
	    Don't introduce yourself until you confirm who they're picking up.</List.Item>
	    <List.Item>Prices will be surging before and after the concert. If it gets too expensive, you can always walk away from the stadium first.
	    Just stay with the people who will be walking from the stadium to the parking lots in Pasadena.</List.Item>
	  </List>
    </Segment>

    <Segment vertical>
    	<Header as='h4'><a target="_blank" href="https://www.rosebowlstadium.com/visitor-center/parking-information-1">General Parking</a></Header>
    	<List bulleted>
    	<List.Item><a target="_blank" href="https://www.rosebowlstadium.com/visitor-center/getting-here-2">Directions to get to the Rose Bowl by car.</a></List.Item>
	    <List.Item>
	      General Parking in Brookside Park and Golf Course is $40 per car, in advance and $50 on event day.
	      <List.List>
	        <List.Item>Click <a target="_blank" href="https://www.parkjockey.com/homes/event/160568">here</a> to pre-purchase parking for Saturday, May 4th.</List.Item>
	        <List.Item>Click <a target="_blank" href="https://www.parkjockey.com/homes/event/160683">here</a> to pre-purchase parking for Sunday, May 5th.</List.Item>
	      </List.List>
	    </List.Item>
	    <List.Item>Overnight parking is prohibited in all Lots.</List.Item>
	    <List.Item>Parking lots close 90 minutes following the conclusion of the event or game.</List.Item>
	    <List.Item>Parking is first-come, first-served. No saving of parking spaces is permitted.</List.Item>
	    <List.Item>In and out privileges are not allowed.</List.Item>
	    <List.Item>Beware that traffic is horrible, so you would have to arrive at least 2 hours before the concert and be ready to wait up to 2 hours to leave the lot.</List.Item>
	  </List>
    </Segment>

    <Segment vertical>
    	<Header as='h4'>Parsons Parking Lot + <a target="_blank" href="http://foothilltransit.org/rose-bowl/?fbclid=IwAR08yEkChEfGEMTQHfVbKpcSyncKHCCRVRkrKLdw0uKwzhQ5yN64UWJFjrg">Shuttle</a></Header>
    	<List bulleted>
	    <List.Item>
	      TRAFFIC ADVISORY: Please do not use the address of Parsons to drive to the location as the address is on Walnut Avenue and there is no access to parking lot from the Walnut Avenue side of the complex. 
	      Please use Fair Oaks Avenue to access the Parsons parking lot.
	    </List.Item>
	    <List.Item>From this area a round trip shuttle service is available to the Rose Bowl Stadium’s Lot B.</List.Item>
	    <List.Item>
	    	Shuttle service to the stadium begins three (3) hours prior to the start of the event or kick-off. 
	    	If you're planning to arrive earlier to stand in line for merch, you may have to walk or Uber/Lyft.
	    </List.Item>
	    <List.Item>The shuttle will be $5 round-trip for a pre-purchased ticket and $10 round-trip on event day for all other events.</List.Item>
	    <List.Item>The shuttle service runs continuously until about one hour after the end of the event or game.</List.Item>
	    <List.Item>Parking cost: $22 (you can reserve a spot <a href="https://www.lazparking.com/local/pasadena-ca/parsons---open-lot">here</a>)</List.Item>
		<List.Item>Distance from Rose Bowl: 1.7 miles, 40 minute walk</List.Item>
		<List.Item>After the concert, the line may seem very long, but it moves fast. 
    	You could also walk, since there will be lots of other people walking too.</List.Item>
	  </List>
    </Segment>

    <Segment vertical>
    	<Header as='h4'>Pasadena Parking Options (besides Parson)</Header>
    	<List bulleted>
    		<List.Item>Parking cost depending on garage: $10 - $20 (you can reserve a spot <a href="https://www.parkingpanda.com/rose-bowl-stadium-parking/bts-world-tour-love-yourself-speak-yourself-1329803">here</a>). 
    			These prices are for several hours.</List.Item>
		    <List.Item>Most of these lots are 1.6 - 2.0 miles, 40-50 minute walk from Rose Bowl (or take a shuttle/Uber/Lyft)</List.Item>
		    <List.Item>Note: 25 N Arroyo Pkwy (177 E Colorado Blvd.) - Garage is only $4, 41 min walk, 2.0 miles from the stadium! 
		    Reserve it <a target="_blank" href="https://www.parkingpanda.com/rose-bowl-stadium-parking/bts-world-tour-love-yourself-speak-yourself-1329803#localSort=priceAsc">here</a>.</List.Item>
		</List>
    </Segment>

    <Segment vertical>
    	<Header as='h4'><a target="_blank" href="https://www.metro.net/">Public Transit: Metro</a></Header>
    	<List bulleted>
		<List.Item>
	      Metro Bus:
	      <List.List>
	        <List.Item>$1.75 cash for one way. Need exact fare since bus drivers don't have change.</List.Item>
	        <List.Item>About one block before you stop, press the STOP button or pull the cord between the windows to signal the operator to let you off.</List.Item>
	        <List.Item>Exit through the rear doors whenever possible.</List.Item>
	        <List.Item>If you are unsure, BEFORE you get on the bus, ask the driver if the destination is part of the route.</List.Item>
	      </List.List>
	    </List.Item>
	    </List>

	    <List bulleted>
		<List.Item>
	      Metro Light Rail (similar to a subway):
	      <List.List>
	        <List.Item>$1.75 or buy a reusable TAP card and load (check for student discounts) </List.Item>
	        <List.Item>Use the overhead maps to help you watch for your station.</List.Item>
	        <List.Item>Most stops are underground, so look for stairs.</List.Item>
	      </List.List>
	    </List.Item>
	    </List>

	    <List bulleted>
		<List.Item>
	      <a target="_blank" href="https://www.metro.net/riding/paid_parking/">Metro Parking:</a>
	      <List.List>
	        <List.Item>Most of Metro’s Park & Ride lots include both free and paid reserved spaces. </List.Item>
	        <List.Item>Free spaces are available on a first-come, first-served basis for transit users.</List.Item>
	        <List.Item>Daily parking cost: $3 for transit users with verified ridership within 96 hours of
parking their vehicle</List.Item>
	      </List.List>
	    </List.Item>
	    </List>
    </Segment>

    <Segment vertical>
    	<Header as='h4'>Metro Gold Line Light Rail Service + <a href="http://foothilltransit.org/rose-bowl/?fbclid=IwAR08yEkChEfGEMTQHfVbKpcSyncKHCCRVRkrKLdw0uKwzhQ5yN64UWJFjrg">Shuttle</a></Header>
    	<List bulleted>
	    <List.Item>Metro operates a light rail service to Pasadena via the Metro Gold Line.</List.Item>
	    <List.Item>1) <a target="_blank" href="https://www.metro.net/">Plan your metro trip here</a>.  
			You will get a customized itinerary, telling you what line to take, where to catch it, where to exit and what it costs.</List.Item>
		<List.Item>
	      2) Pay your fare.
	      <List.List>
	        <List.Item>Metro's base fare is $1.75. </List.Item>
	        <List.Item>On Metro bus, you can pay cash each time you board (bus operators don't carry change, so you'll need exact fare) 
	        or buy and add up to $20 to a reusable TAP card. </List.Item>
	        <List.Item> On Metro Rail, Orange line stations and most Silver Line stations, 
	        you can buy and add cash or passes from TAP vending machines located near each station platform.</List.Item>
	      </List.List>

	    </List.Item>

	    <List.Item>3) Exit the train at Memorial Park Station in Pasadena.</List.Item>
	    <List.Item>4) Follow the signs for two blocks to the Rose Bowl Shuttle pick-up location at Parsons.</List.Item>
	    <List.Item>5) The shuttle will take you directly to the Rose Bowl Stadium. </List.Item>
		<List.Item>Instead of taking the shuttle, you can also walk about 40 minutes, 1.7 miles. 
		Most likely there will be lots of other people walking, so it will probably be safe, but it's not a good option if you think
    	you'll be very tired or not wearing comfy shoes. </List.Item>


	  	</List>
    </Segment>

    <Segment vertical>
    	<Header as='h4'><a target="_blank" href="https://www.metrolinktrains.com/">Metrolink</a></Header>
    	<List bulleted>
	    <List.Item>The system operates in Los Angeles, Orange, Riverside, San Bernardino, Ventura counties, Burbank Airport, etc</List.Item>
	    <List.Item>Going to Rose Bowl: Metrolink trains arrive into Union Station, where passengers must transfer to the Gold Line to get to the Rose Bowl Stadium.</List.Item>
	    <List.Item><a target="_blank" href="https://www.rosebowlstadium.com/visitor-center/public_transit">Schedule and price information.</a></List.Item>
	  	</List>
    </Segment>

    <Segment vertical>
    	<Header as='h4'>Estimate Driving Time</Header>
    	<Grid stackable columns={3}>
		    <Grid.Column>
		      <Segment>
		        <Image src='images/maps1.jpg' />
		      </Segment>
		    </Grid.Column>
		    <Grid.Column>
		      <Segment>
		        <Image src='images/maps2.jpg' />
		      </Segment>
		    </Grid.Column>
		    <Grid.Column>
		      <Segment>
		        <Image src='images/maps3.jpg' />
		      </Segment>
		    </Grid.Column>
		 </Grid>
    	<List bulleted>
    		<List.Item>In Google Maps, you can choose the departure time to see how long it would take to drive from one location to another at that time.</List.Item>
		    <List.Item>As you can see, there is a wide range.</List.Item>
		    <List.Item>Plan to arrive at least 2 hours before the concert, since traffic will be extra slow around the stadium and you won't want to miss the start of the concert.</List.Item>
			<List.Item>
		    	Don't worry about being TOO early; there will be MVs playing and you can practice your fan chants.
			</List.Item>
			<List.Item>
		    	Use the restrooms before the concert starts. Otherwise you might miss something if you get up in the middle. 
		    	Also either bring or buy water and snacks once you get in, so you won't have decide between getting up to buy them or fainting from hunger/dehydration. 
			</List.Item>
		</List>
    </Segment>

    <Segment vertical>
    	<Header as='h4'>Download Google Maps to Use Offline</Header>
    	<Grid stackable columns={4}>
		    <Grid.Column>
		      <Segment>
		        <Image src='images/offline1.jpg' />
		      </Segment>
		    </Grid.Column>
		    <Grid.Column>
		      <Segment>
		        <Image src='images/offline2.jpg' />
		      </Segment>
		    </Grid.Column>
		    <Grid.Column>
		      <Segment>
		        <Image src='images/offline3.jpg' />
		      </Segment>
		    </Grid.Column>
		    <Grid.Column>
		      <Segment>
		        <Image src='images/offline4.jpg' />
		      </Segment>
		    </Grid.Column>
		 </Grid>
    	<List bulleted>
    		<List.Item>Download maps in case you won't have data or Wifi.</List.Item>
		    <List.Item>Go to options (the 3 bars in the top left of Google maps), then choose Offline Maps</List.Item>
		    <List.Item>Even better: print them out in case your phone dies after the concert.</List.Item>
		</List>
    </Segment>

    

    </div>
  </div>
)

export default Transit