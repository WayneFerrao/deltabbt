import React, { Component, createRef } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import API_KEY from '../apiKey';

const mapStyles = {
    marginTop: '3%',
    width: '50%',
    height: '70%',
  };

export class GoogleMap extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            lat:0,
            lon:0,
        };
        this.googleMapRef = React.createRef();
    }



    render() {
        return (
            <Map
                google={this.props.google}
                zoom={13}
                style={mapStyles}
                initialCenter={{ lat: 43.2585919, lng:-79.910951}}
            > 
                <Marker position={{ lat: 48.00, lng: -122.00}} />
            </Map>
        )};
        }
export default GoogleApiWrapper({apiKey:API_KEY})(GoogleMap);