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
                                <ProfileInfo title="First Name:" content="Andy"/>
                                <ProfileInfo title="Last Name:" content="Smith"/>
                                <ProfileInfo title="Email:" content="andy@gmail.com"/>
                                <ProfileInfo title="Password:" content="***********"/>
                            </form>
                            </Grid>
                            <Grid item md={6} style={{textAlign:'center'}}>
                                <img alt="avatar" src ={faker.image.avatar()} style={{width:"50%", borderRadius: "10%"}}/>
                            </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item md={3} style={{textAlign:'right'}}>
                               <p>Favourites: </p>
                            </Grid>
                            <Grid item md={3}>
                                <img alt="avatar" src ="https://cocobubbletea.com/wp-content/uploads/2019/01/1.png" style={{maxWidth:"70%",maxHeight:"70%"}}/>
                            </Grid>
                            <Grid item md={3}>
                                <img alt="avatar" src ="https://www.chatime.com.tw/wp-content/uploads/%E5%8F%B0%E5%8C%97%E6%97%A5%E5%87%BA%E7%8F%8D%E5%A5%B6.png" style={{width:"90px",height:"70%"}}/>
                            </Grid>
                            <Grid item md={3}>
                                <img alt="avatar" src ="https://www.chatime.com.tw/wp-content/uploads/%E5%A4%AA%E6%A5%B5%E8%8C%B6%E6%8B%BF%E9%90%B5-1-165x314.png" style={{width:"80px",height:"65%"}}/>
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
