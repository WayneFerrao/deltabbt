import React from 'react';
import TextField from '@material-ui/core/TextField';
import BG from '../components/background.png'
import NavBar from '../components/NavBar'
const ProfileInfo = (props) => {
    return(
      <div style = {{backgroundImage: `url(${BG})`, height: '100vh',width: '100%',  backgroundSize: 'cover', fontSize: '20px'}}>
        <NavBar/>
        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh',width: '100%'}}>
              <img alt="avatar" src ={props.pp} style = {{}}/>
              <form>
                <label>
                  <p style = {{fontWeight: 'bold'}}>First Name</p>
                  <TextField id="filled-read-only-input" defaultValue={props.fName}/>
                  <p style = {{fontWeight: 'bold'}}>Last Name</p>
                  <TextField id="filled-read-only-input" defaultValue={props.lName}/>
                  <p style = {{fontWeight: 'bold'}}>Phone Number</p>
                  <TextField id="filled-read-only-input" defaultValue={props.phone}/>
                  <p style = {{fontWeight: 'bold'}}>Email</p>
                  <TextField id="filled-read-only-input" defaultValue={props.email}/>
                  <p style = {{fontWeight: 'bold'}}>Password</p>
                  <TextField id="filled-read-only-input" defaultValue={props.password}/>

                </label>
              </form>
          </div>
        </div>
    );
};

export default ProfileInfo;
