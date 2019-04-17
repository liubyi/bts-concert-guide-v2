import React from 'react';
import ReactDOM from 'react-dom';
import UberTable from './UberTable';
import UberPrices from './UberPrices';
import Tabs from './Tabs';
import "./style.css";
import {List, Header, Table, Grid, Image, Segment, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'
import YelpList from './YelpList';
import TouristGrid from './TouristGrid';
import Bags from './Bags';
import Freebies from './Freebies';
import Transit from './Transit';
import Home from './Home';
import Calculator from './Calculator';
import FreebieGrid from './FreebieGrid';
import Misc from './Misc';
import FoodList from './FoodList';
import Locations from './Locations';
import Bring from './Bring';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1 className='home-header'>
          &#8729; B T S &#8729;  <br/>
          L A &nbsp; C O N C E R T &nbsp; G U I D E
        </h1>
          <div className="tab-container">
          <Tabs>
            <div label="HOME">
              <Home  />
            </div>

            <div label="TRANSPORTATION">
              <Transit />
            </div>

            <div label="COST CALCULATOR">
              <Calculator />
              <UberPrices />
            </div>

            <div label="EXPLORE">
              <Locations />
            </div>

            <div label="FOOD">
              <FoodList />
            </div>

            <div label="WHAT TO BRING">
              <Bring />
            </div>

            <div label="APPROVED BAGS">
              <Bags />
            </div>

            <div label="FREEBIES">
              <FreebieGrid />
            </div>

            <div label="MISC">
              <Misc />
            </div>
        </Tabs>
        </div>
      </div>
    );
  }
}  



export default App;

            // <div label="PLACES TO GO">
            //   <TouristGrid />
            // </div>

            // <div label="PLACES TO EAT">
            //   <YelpList />
            // </div>

