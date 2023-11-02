import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const style = {
      // width: '300px',
      // height: '300px',
    }

    const containerStyle = {
      
    }
    
    return (
      <Map 
        google={this.props.google}
        zoom={4}
        style={style}
        containerStyle={containerStyle}
        initialCenter={{lat: 37, lng: 37}}
        scrollwheel={false}
      >
        {this.props.coordinates.map((c,i) => (
          <Marker 
            key={i}
            position={{lat: c.lat, lng: c.lng}}
          />
        ))}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyATnarUvXaKwbm_bFefQ6ePe5INvsCZppY"
})(MapContainer)
