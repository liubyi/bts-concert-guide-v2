/* global google */

import React from "react";
import "./style.css";

// should be 100 miles of the PREVIOUS LOCATION
class Autocomplete extends React.Component {

  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  restrictRadius(latitude, longitude) {
    var defaultPlace = new google.maps.LatLng(latitude, longitude);
    var optionsAuto = { strictBounds: true, types: ['geocode']};
    this.autocomplete = new google.maps.places.Autocomplete ( this.autocompleteInput.current, optionsAuto);
    var circle = new google.maps.Circle({
        radius: 160000, // 100 mile radius
        center: defaultPlace
    });
    this.autocomplete.setBounds(circle.getBounds());
    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  anyRadius() {
    // console.log("No radius restriction");
    this.autocomplete = new google.maps.places.Autocomplete( 
      this.autocompleteInput.current, 
      { types: ['geocode'] }
    );
    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  // this is called when adding a new address
  componentDidMount() {
    var idx = this.props.index;
    if (this.props.prevLocation[idx - 1] !== undefined 
      && this.props.prevLocation[idx - 1].location.dest !== undefined) {
        this.restrictRadius(
          this.props.prevLocation[idx - 1].location.dest.geometry.location.lat(), 
          this.props.prevLocation[idx - 1].location.dest.geometry.location.lng()
        );
    } else {
      this.anyRadius();
    }
  }

  componentDidUpdate() {
    var idx = this.props.index;
    if (this.props.prevLocation[idx - 1] !== undefined 
      && this.props.prevLocation[idx - 1].location.dest !== undefined) {
        this.restrictRadius(
          this.props.prevLocation[idx - 1].location.dest.geometry.location.lat(), 
          this.props.prevLocation[idx - 1].location.dest.geometry.location.lng()
        );
    } else {
      this.anyRadius();
    }
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    this.props.onPlaceChanged([place, this.props.index]);
  }

  

  render() {
    return (
        <form className="form">
            <input 
              ref={this.autocompleteInput}
              id="autocomplete"
              placeholder="Enter Location"

              type="text"
            />
            
        </form>

    );
  }
}

export default Autocomplete;

