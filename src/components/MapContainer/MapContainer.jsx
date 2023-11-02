import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {getJobPostsByCountry} from '../../api/APIUtils.js'

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

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          {getJobPostsByCountry(this.props.jobPosts, this.state.selectedPlace.name).map((job, i)=>(
            <p>{job.title}</p>
          ))}
        </InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyATnarUvXaKwbm_bFefQ6ePe5INvsCZppY"
})(MapContainer)
