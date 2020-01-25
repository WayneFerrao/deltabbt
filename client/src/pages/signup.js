import React, { Component } from 'react'
import TextField from '../components/TextBox'
import ColouredButton from '../components/ColouredButton'

export class Signup extends Component {
    render() {
        return (
            <div id = 'TextFields' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style = {{position: "relative"}}>
                <br/>
                <TextField 
                    id = 'FNTextField'
                    TextFieldLabel = "Full Name"
                />
                </div>
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
                <div style = {{position: "relative"}}>
                <TextField
                    id = 'PWTextField'
                    TextFieldLabel = "Confirm Password"
                />
                </div>
                <br/>
                <div>
                <ColouredButton
                    label = 'Create Account'
                />
                </div>
            </div>
        )
    }
}

export default Signup
