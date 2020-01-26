import React, { Component } from 'react'
import faker from 'faker';
import ProfileInfo from '../components/ProfileInfo';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import BG from '../components/background.png'
import NavBar from '../components/NavBar'





export class Profile extends Component {
    render() {
        return (
            <div style = {{backgroundImage: `url(${BG})`, height: '100vh', backgroundSize: 'cover'}}>
            <NavBar/>

            <Grid container spacing={1}>
            <Grid item md={2}/>


            <Grid item md={8}>
                <div>
                    <div style={{fontSize:20}}>

                            <h1 style={{textAlign:'center',color:'#5d1504'}}>Profile</h1>
                            <Grid container spacing={2}>
                            <Grid item md={6} style={{textAlign:'right'}}>
                            <form>
                                <ProfileInfo title="First Name:" content="Daddy"/>
                                <ProfileInfo title="Last Name:" content="Wayne"/>
                                <ProfileInfo title="Email:" content="DaddyWayne@gmail.com"/>
                                <ProfileInfo title="Password:" content="***********"/>
                            </form>
                            </Grid>
                            <Grid item md={6} style={{textAlign:'center'}}>
                                <img alt="avatar" src ={faker.image.avatar()} style={{width:"50%"}}/>
                            </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item md={3} style={{textAlign:'right'}}>
                               <p>Favourites: </p>
                            </Grid>
                            <Grid item md={3}>
                                <img alt="avatar" src ="https://wba-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/CoCo-Logo--1024x1024.jpg" style={{maxWidth:"70%",maxHeight:"70%"}}/>
                            </Grid>
                            <Grid item md={3}>
                                <img alt="avatar" src ="https://wba-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/CoCo-Logo--1024x1024.jpg" style={{maxWidth:"70%",maxHeight:"70%"}}/>
                            </Grid>
                            <Grid item md={3}>
                                <img alt="avatar" src ="https://wba-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/CoCo-Logo--1024x1024.jpg" style={{maxWidth:"70%",maxHeight:"70%"}}/>
                            </Grid>
                            </Grid>

                    </div>
                </div>
            </Grid>

            <Grid item md={2}/>
            </Grid>
            </div>
        );
    }
}

export default Profile
