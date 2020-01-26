import React, { Component } from 'react'
import VenueCard from '../components/VenueCard'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import backgroundPic from '../images/background.png';
import GoogleMap from '../components/GoogleMap';

export default class Home extends Component {
    state = {
        venues: null
    }
    componentDidMount(){
        axios.get('/venues')
        .then(res =>{
            this.setState({
                venues: res.data
            })
        })
        .catch(err =>{console.log(err)});
    }

    render() {
        let recentVenuesMarkup = this.state.venues ? (
            this.state.venues.map(venue => <VenueCard key= {venue.venueId} venueData={venue}/>)
        ): <p> Loading...</p>;
        return (
            <div styles = {{backgroundImage: 'url(${backgroundPic})'}}>
            <Grid container spacing={10}>
                <Grid item sm={4} xs={10}>
                      {recentVenuesMarkup}
                </Grid>
                <GoogleMap/>
            </Grid>
            </div>
        )
    }
}
