import React from 'react';
import TextField from '@material-ui/core/TextField';
const ProfileInfo = (props) => {
    return(
        <div>
            <img alt="avatar" src ={props.pp}/>
            <form>
              <label>
                <p>First Name</p>
                <TextField id="filled-read-only-input" defaultValue={props.fName}/>
                <p>Last Name</p>
                <TextField id="filled-read-only-input" defaultValue={props.lName}/>
                <p>Phone Number</p>
                <TextField id="filled-read-only-input" defaultValue={props.phone}/>
                <p>Email</p>
                <TextField id="filled-read-only-input" defaultValue={props.email}/>
                <p>Password</p>
                <TextField id="filled-read-only-input" defaultValue={props.password}/>

              </label>
            </form>
            </div>
    );
};

export default ProfileInfo;
