import React, { Component, createRef } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const API_KEY = process.env.REACT_APP_API_KEY;

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
                zoom={14}
                style={mapStyles}
                initialCenter={{ lat: 43.2585919, lng:-79.910951}}
            > 
                <Marker position={{ lat: 43.261640, lng: -79.907140}} />
                <Marker position={{ lat: 43.257790, lng: -79.925240}} />
                <Marker position={{ lat: 43.262199, lng: -79.920013}} />



            </Map>
        )};
        }
export default GoogleApiWrapper({apiKey:API_KEY})(GoogleMap);