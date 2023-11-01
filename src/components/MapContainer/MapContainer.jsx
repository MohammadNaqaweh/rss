import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '300px',
      height: '300px',
    }

    const containerStyle = {
      
    }
    
    return (
      <Map 
        google={this.props.google}
        zoom={14}
        style={style}
        containerStyle={containerStyle}
      >

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyATnarUvXaKwbm_bFefQ6ePe5INvsCZppY"
})(MapContainer)
