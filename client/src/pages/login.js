import React, { Component } from 'react'
import TextField from '../components/TextBox'

export class Login extends Component {
    render() {
        return (
            <div id = 'TextFields' style={{display: 'flex', justifyContent: 'center'}}>
                <TextField 
                    id = 'UNTextField'
                    TextFieldLabel = "Username"
                />
                <TextField
                    id = 'PWTextField'
                    TextFieldLabel = "Password"
                />
            </div>
        )
    }
}

export default Login

