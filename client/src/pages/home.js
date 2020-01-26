import React, { Component } from 'react'
import BG from '../components/background.png'
import NavBar from '../components/NavBar'
import VenueCard from '../components/VenueCard'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
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
        document.body.style.overflow = "hidden";
        let recentVenuesMarkup = this.state.venues ? (
            this.state.venues.map(venue => <VenueCard key= {venue.venueId} venueData={venue}/>)
        ): <p> Loading...</p>;
        return (
            <div style = {{backgroundImage: `url(${BG})`, height: '100vh', backgroundSize: 'cover'}}>
                <NavBar
                menuLabel = 'Home'
                />
            <div styles = {{backgroundImage: 'url(${backgroundPic})'}}>
            <br/>
            <Grid container spacing={10} style = {{marginLeft: '5%'}}>
                <Grid item sm={4} xs={10} >
                      {recentVenuesMarkup}
                </Grid>
                <GoogleMap/>
            </Grid>
            </div>
            </div>
        )
    }
}
