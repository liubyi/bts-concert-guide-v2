import React from 'react'
import ReactDOM from "react-dom";
import {Divider, Form, Input, Grid, Image, Segment, Header, List, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'
import UberPrices from './UberPrices';

class Calculator extends React.Component {

	constructor(props){
        super(props);
        this.state = {
        	price: 0, // cost of rental 
            miles : 0, // + num miles driven
            mpg : 0, // divide by mpg
            gas : 0,
            result : 0 // multiply by gas price
        }
    }

    doAction = () => {
        this.setState({result :  parseFloat(this.state.price) + (parseFloat(this.state.miles) / parseFloat(this.state.mpg) * parseFloat(this.state.gas)) }); 
    }

    render(){
        return(
            <div className='calc-description'>   
            	<Segment vertical>
            	<Header as='h4'>Should I rent a car or use Uber/Lyft? </Header>
            	<List bulleted>

            	<List.Item>
			      If you're planning to explore LA, then rental car is cheaper. Use the Rental and Uber Costs Estimators to compare costs to see which one is the best option for you.
			      <List.List>
			      	<List.Item>
			      		For rental car discounts, check and see who the agencies partner with. I think Avis partners with <a target="_blank" href="https://www.costcotravel.com/Rental-Cars">Costco</a> 
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

			    <List.Item>Total Price of Rental: find rental cars at 
		        	<a target="_blank" href="https://hollywoodburbankairport.com/ground-transportation/rental-cars/"> Burbank Airport </a>,
		        	<a target="_blank" href="https://www.carrentals.com/los-angeles-airport-car-rentals-lax.g-tla/"> LAX </a>,
		        	<a target="_blank" href="https://www.kayak.com/Cheap-Long-Beach-Car-Rentals.4461.cars.ksp"> Long Beach </a>. 
		            You can also use <a target="_blank" href="https://www.skyscanner.com/car-rental">Skyscanner</a> to find the best deals. 
		            Also check to see if your rental will have unlimited mileage (most do).
		        </List.Item>

		        <List.Item>Total Miles Driven: Enter in all the places you plan on visiting in the Uber Costs Estimator, then add up the distances.</List.Item>

		        <List.Item>Miles Per Gallon: Once you've chosen your rental car, google the car to find the mpg.</List.Item>

		        <List.Item>Use <a href="https://www.gasbuddy.com/USA/CA" target="_blank"> Gas Buddy </a> to find the current cost of gas.</List.Item>

		        <List.Item>Example cost calculation:
		        	<List.List>
		        		<List.Item>Currently prices are around <a target="_blank" href="https://www.skyscanner.com/car-rental/results/95673369/95673369/2019-05-03T10:00/2019-05-05T10:00/30"> $100 </a> for 3 days rental (Friday morning 5/3 to Sunday morning 5/5).</List.Item>
		        		<List.Item>Gas prices in LA is around <a href="https://www.gasbuddy.com/USA/CA" target="_blank"> $4 per gallon </a></List.Item>
		        		<List.Item>Example calculation: $100 rental cost + (100 miles driven / 30 mpg X $4 per gallon). 
		        		= $113.33.
		        		</List.Item>
				    </List.List>
		        </List.Item>

			  </List>
			  

			  <Divider horizontal className="calc-divider">Rental Costs Estimator</Divider>

            	<Form className="form-container">
            		<Form.Group widths='equal'>

            		<Form.Input 
				    	label='Total price of rental ($)'
				    	onChange={(event)=>this.setState({price:event.target.value})}
				    />

				    <Form.Input 
				    	label='Total miles driven (miles)'
				    	onChange={(event)=>this.setState({miles:event.target.value})}
				    />

				    <Form.Input 
				    	label='Miles per gallon (mpg)'
				    	onChange={(event)=>this.setState({mpg:event.target.value})}
				    />

				     <Form.Input
					    label={{ basic: true, content: '$' }}
					    labelPosition='left'
					    label='Cost of gas ($/gallon)'
					    onChange={(event)=>this.setState({gas:event.target.value})}
				  	/>

				  	<div className="calc-button">
				  	<Form.Input 
				  		type="button" 
				  		label='&zwnj;'
				  		onClick={this.doAction} 
				  		value="Calculate"
				  	/>
				  	</div>


				    <Form.Input
	            		type='number'
					    label={{ basic: true, content: '$' }}
					    labelPosition='left'
					    label='Total Cost ($)'
					    value={this.state.result} readOnly
				  	/>
				  	

                	
				  </Form.Group>
				  </Form>

   				<Divider horizontal className="calc-divider">Uber Costs Estimator</Divider>

   				
   				<List bulleted>
            	<List.Item>
			      These prices are real-time prices from Uber. Keep in mind that when there is high demand (before and after the concert,
			      or when people are getting off work), the prices could be 1.5-2.5X as expensive. If it gets too expensive after the concert, you can always walk away from the stadium first.
			    </List.Item>
			    <List.Item>See if Lyft or Uber have discounts for signing up, refering a friend, etc. I get 10% off Lyft rides all the time.</List.Item>
			    <List.Item>Uber: <a href="https://www.uber.com/promo/" target="_blank">Get up to $25 off for first rides.</a></List.Item>
			    <List.Item>Lyft: <a href="https://www.lyft.com/promo-coupon-code-free-rides" target="_blank">Get up to $20 off for first rides.</a></List.Item>
			    <List.Item>To learn about the different Uber options, click <a href="https://www.ridester.com/types-uber-cars/" target="_blank"> here</a>. Uber Pool is the cheapest since you'll be sharing with other people. Lyft has a similar shared rides option.</List.Item>
			    <List.Item>The cost of Lyft and Uber should be pretty similar, though Lyft is sometimes a few dollars cheaper. 
			    If you have a choice, choose Lyft, since it's a better company overall.</List.Item>
			    <List.Item>Safety Tip: BEFORE you get into the car, confirm the license plate, the driver, and ask who they're there to pick up. 
			    Don't introduce yourself until you confirm who they're picking up.</List.Item>
			  	</List>
			  	<List.Item>
			  		Note: This calculator only works for locations that are within 100 miles of each other. You will get a warning if you try to enter locations too far apart. 
			  	</List.Item>


			  	</Segment>


			  	
            </div>
        ); // end of return
    }     // end of render       

} // end of class

export default Calculator;

// <Button 
// 				    		basic
// 				    		size='medium'
// 				    		onClick={this.doAction} >
// 				            Calculate 
// 				        </Button>
