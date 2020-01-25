import React, { Component } from 'react'
import TextField from '../components/TextBox'
import ColouredButton from '../components/ColouredButton'

export class Login extends Component {
    render() {
        return (
            <div id = 'TextFields' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width:'auto', height: '100%'}}>
                <div style = {{position: "relative"}}>
                <br/>
                <TextField 
                    id = 'UNTextField'
                    TextFieldLabel = "Email"
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
                <ColouredButton
                    label = 'Login'
                />
                </div>
            </div>
        )
    }
}

export default Login

