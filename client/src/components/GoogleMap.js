import React, { Component, createRef } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import API_KEY from '../apiKey';
const mapStyles = {
    marginTop: 90,
    marginLeft: 120,
    width: 550,
    height: 550,
  };
export class GoogleMap extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
        this.googleMapRef = React.createRef();
    }
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            > 
                <Marker position={{ lat: 48.00, lng: -122.00}} />
            </Map>
        )};
        }
export default GoogleApiWrapper({apiKey:API_KEY})(GoogleMap);