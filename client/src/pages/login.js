import React, { Component } from 'react'
import TextField from '../components/TextBox'
import LoginButton from '../components/LoginButton'

export class Login extends Component {
    render() {
        return (
            <div id = 'TextFields' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style = {{position: "relative"}}>
                <br/>
                <TextField 
                    id = 'UNTextField'
                    TextFieldLabel = "Username"
                />
                </div>
                <br/>
                <div style = {{position: "relative"}}>
                <TextField
                    id = 'PWTextField'
                    TextFieldLabel = "Password"
                />
                </div>
                <br/>
                <div>
                <LoginButton/>
                </div>
            </div>
        )
    }
}

export default Login

