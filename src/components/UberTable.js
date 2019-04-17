import React from 'react';
import ReactDOM from 'react-dom';
import uber from '../apis/uber';
import Autocomplete from './Autocomplete';
import Distance from './Distance';
import "./style.css";
import {Dimmer, Loader, Table, Grid, Image, Segment, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'


let uniqueID = 0;

const initialState = {
    uber : ["UberPool", "UberX", "Español", "Assist", "WAV", "UberXL", "Select", "Black", "Black SUV", "Lux"],
    should_render: [ { render_info: false } ],
    prices: [ { price: [] } ], 
    distances: [ { distance: 0 } ],
    estimates: [ { estimate: [] } ],
    data_objs: [ { location: {} } ],
    uniq_ids: [],
    errorMsg: false
};

class UberTable extends React.Component {

  state = {
    uber : ["UberPool", "UberX", "Español", "Assist", "WAV", "UberXL", "Select", "Black", "Black SUV", "Lux"],
    should_render: [ { render_info: false } ],
    prices: [ { price: [] } ], 
    distances: [ { distance: 0 } ],
    estimates: [ { estimate: [] } ],
    data_objs: [ { location: {} } ],
    uniq_ids: [0],
    errorMsg: false
};

  onPlaceChanged(obj) {
    const dest = obj[0];
    const idx = obj[1];
    const newData = this.state.data_objs.map((data, didx) => {
      if (idx !== didx) return data;
      return { ...data, location: {dest} };
    });
    this.setState({ data_objs: newData });
    uniqueID += 1;
      this.setState({
        uniq_ids: this.state.uniq_ids.concat(uniqueID)
    });

  }

  handleAddNewLocation = () => {
      this.setState({
        data_objs: this.state.data_objs.concat([{ location: {} }])
      });
      this.setState({
        prices: this.state.prices.concat([{ price: [] }])
      });
      this.setState({
        distances: this.state.distances.concat([{ distance: 0 }])
      });
      this.setState({
        estimates: this.state.estimates.concat([{ estimate: 0 }])
      });
      this.setState({
        should_render: this.state.should_render.concat([{ render_info: false }])
      });
      uniqueID += 1;
      this.setState({
        uniq_ids: this.state.uniq_ids.concat(uniqueID)
      });
  };


  handleRemoveLocation = idx => () => {
    this.setState({
        data_objs: this.state.data_objs.filter((s, sidx) => idx !== sidx)
      });
      this.setState({
        prices: this.state.prices.filter((s, sidx) => idx !== sidx)
      });
      this.setState({
        distances: this.state.distances.filter((s, sidx) => idx !== sidx)
      });
      this.setState({
        estimates: this.state.estimates.filter((s, sidx) => idx !== sidx)
      });
      this.setState({
        should_render: this.state.should_render.filter((s, sidx) => idx !== sidx)
      });
      this.setState({
        uniq_ids: this.state.uniq_ids.filter((s, sidx) => idx !== sidx)
      });
  };

  // Calculate Button
  onButtonClick = async event => {
    let arrLength = this.state.data_objs.length;
    for (let idx = 1; idx < arrLength; idx++) {
      let no_error = true;

      if (this.state.data_objs[idx].location.dest !== undefined && this.state.data_objs[idx].location.dest !== undefined &&
        this.state.data_objs[idx-1].location.dest !== undefined && this.state.data_objs[idx-1].location.dest !== undefined) {

        console.log("current idx: ", idx);

        const response = await uber.get('/estimates/price', {
          params: {
            start_latitude: this.state.data_objs[idx-1].location.dest.geometry.location.lat(),
            start_longitude: this.state.data_objs[idx-1].location.dest.geometry.location.lng(),
            end_latitude: this.state.data_objs[idx].location.dest.geometry.location.lat(),
            end_longitude: this.state.data_objs[idx].location.dest.geometry.location.lng()
          }
        })
        .catch((error) => {
          console.log("On button click caught an error: ", error.response);
          if (response === undefined) {
            console.log("Response is undefined");
            no_error = false;
            window.alert("Unable to estimate fees. Locations are over 100 miles apart. Please delete these locations and try again.");
            // this.setState({ errorMsg: true });
          } else {
            console.log("On button click caught an error but response was defined");
          } 
        })

        // how come this waited until it was done fetching even though it's not in the then method??
        if (no_error) {
          const newPrice = this.state.prices.map((price, p_idx) => {
            if (idx !== p_idx) {
              return price;
            } else {  
              return { ...price, price: response.data.prices };
            }
          });
          this.setState({ prices: newPrice });

          // sort the estimates by uber options
          let sortedArr = [];
          for (var i = 1; i <= this.state.uber.length; i++) {
            sortedArr.push("");
          }   
          let priceArr = newPrice[idx].price;
          for (let i = 0; i < priceArr.length; i++) {
            let currName = priceArr[i].localized_display_name;
            if(currName === "UberPool" || currName === "Pool") {
              sortedArr[0] = priceArr[i].estimate;
            } else {
              let stringIndex = this.state.uber.indexOf(currName);
              sortedArr[stringIndex] = priceArr[i].estimate;
            }
          }

          const newEstimate = this.state.estimates.map((estimate, est_idx) => {
            if (idx !== est_idx) return estimate;
            return { ...estimate, estimate: sortedArr };
          });
          this.setState({ estimates: newEstimate}); 

          const newDistance = this.state.distances.map((distance, dist_idx) => {
            if (idx !== dist_idx) return distance;
            return { ...distance, distance: response.data.prices[0].distance };
          });
          this.setState({ distances: newDistance });

          const newRender = this.state.should_render.map((render_info, r_idx) => {
            if (idx !== r_idx) return render_info;
            if (idx === 0) return false;
            return { ...render_info, render_info: true };
          });
          this.setState({ should_render: newRender });
        } // end of if(no error)
      } // end of checking if location dest is defined
    } // end of for loop through idx   
  } // end of onButtonClick

  refreshPage(event) {
    window.location.reload();
  }

  // clearAll(event) {
  //       this.setState(initialState);
  // }

  render() {

    return (
      <div className="table-container">
        <table className="table-style"> 

          <thead>
            <tr>
              <th></th>
              <th>Location</th>
              <th>Distance (miles)</th>
              {(this.state.uber).map(u => {
                  return (
                    <th key={u} className="uber-name">
                      <div>{u}</div>
                    </th>
                  );
                })
              } 
            </tr>
          </thead>

          <tbody>

          {this.state.data_objs.map((data, idx) => (
            <tr key={this.state.uniq_ids[idx]}>

              <td className="button-close">            
                <button
                  type="button"
                  onClick={this.handleRemoveLocation(idx)}
                  className="close">
                  {idx}
                  X 
                  {this.state.uniq_ids[idx]}
                </button>
              </td>

              <td>
                <Autocomplete
                  onPlaceChanged={this.onPlaceChanged.bind(this)}
                  index={idx}
                  prevLocation={this.state.data_objs}
                />
              </td>

              <td>
                {(idx !==0) && (this.state.distances[idx].distance > 0) &&
                  <Distance 
                    distance={this.state.distances[idx].distance}
                  /> 
                }
              </td>

              {Object.values(this.state.estimates[idx].estimate).map(estArr => 
                {
                  return (
                    <td>
                      <div key={estArr}>{estArr}</div>
                    </td>
                  );
                })
              }
            </tr>
          ))}
          </tbody>
        </table>

        <div className="add-calculate">
          <button
            type="button"
            onClick={this.handleAddNewLocation}
            className="button-add">
            Add Location
          </button>
          <button 
            type="button"
            onClick={this.onButtonClick} 
            className="button-calc">
            Calculate
          </button> 
          <button 
            type="button" 
            onClick={ this.refreshPage.bind(this)}
            className="button-reload">
            Clear Locations
          </button>
        </div>
      </div>    
    ); // end of return
  } // end of render
} // end of class

export default UberTable;

// <div>
//         If you have a hotel room close to the stadium or public transport, and not planning on making many trips, 
//         Uber might be the cheaper option. However, if you want to travel around LA, renting a car would be cheaper.
//         Use the calculator to figure out which is cheaper for you. Keep in mind that prices might be surging when there 
//         is high demand. You can also use public transport, if you plan carefully.
//       </div>