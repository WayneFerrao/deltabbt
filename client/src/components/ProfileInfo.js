import React from 'react';
import TextField from '@material-ui/core/TextField';
import BG from '../components/background.png'
import NavBar from '../components/NavBar'
import Grid from '@material-ui/core/Grid';

const ProfileInfo = (props) => {
    return(
        <div>
        <Grid container spacing={2} justify="center">
            <Grid item md={6} style={{textAlign:'right'}}>
                <p>{props.title}</p>
            </Grid>
            <Grid item md={6}style={{textAlign:'left'}}>
                    <p>{props.content}</p>
            </Grid>
        </Grid>
        </div>
    );
};

export default ProfileInfo;
