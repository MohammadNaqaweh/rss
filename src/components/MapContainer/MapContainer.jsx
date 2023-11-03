import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { getJobPostsByCountry } from '../../api/APIUtils.js';
import { MapPopUp, InfoWindowWrapper } from '../index.js';
import config from '../../config.json'

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    jobs: []
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {

    
    return (
      <div id='map'>
        <Map 
          google={this.props.google}
          zoom={4}
          initialCenter={{lat: 37, lng: 37}}
          scrollwheel={false}
          mapTypeControl={false}
          streetViewControl={false}
          onClick={this.onMapClicked}
        >
          {this.props.coordinates.map((c,i) => (
            <Marker
              key={i}
              name={c.country}
              position={{lat: c.lat, lng: c.lng}}
              onClick={this.onMarkerClick}
            />
          ))}

          <InfoWindowWrapper
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <MapPopUp jobPosts={getJobPostsByCountry(this.props.jobPosts, this.state.selectedPlace.name)}/>
          </InfoWindowWrapper>

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_API_KEY}`
})(MapContainer)
