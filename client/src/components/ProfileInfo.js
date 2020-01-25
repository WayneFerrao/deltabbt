import React from 'react';
import TextField from '@material-ui/core/TextField';
const ProfileInfo = (props) => {
    return(
        <div>
            <img alt="avatar" src ={props.pp}/>
            <form>
              <label>
                <p>First Name</p>
                <TextField
                    id="filled-read-only-input"
                    defaultValue={props.fName}
                    InputProps={{readOnly: true,}}/>

                <p>Last Name</p>
                <TextField
                    id="filled-read-only-input"
                    defaultValue={props.lName}
                    InputProps={{readOnly: true,}}/>

                <p>Phone Number</p>
                <TextField
                    id="filled-read-only-input"
                    defaultValue={props.phone}
                    InputProps={{readOnly: true,}}/>

                <p>Email</p>
                <TextField
                    id="filled-read-only-input"
                    defaultValue={props.email}
                    InputProps={{readOnly: true,}}/>
                    
                <p>Password</p>
                <TextField
                    id="filled-read-only-input"
                    defaultValue={props.password}
                    InputProps={{readOnly: true,}}/>

              </label>
            </form>
            </div>
    );
};

export default ProfileInfo;