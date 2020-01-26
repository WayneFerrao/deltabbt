import React, { Component } from 'react'
import BG from '../components/background.png'
import NavBar from '../components/NavBar'

export class Store extends Component {
    render() {
        return (
            <div style = {{backgroundImage: `url(${BG})`, height: '100vh', backgroundSize: 'cover'}}>
                <NavBar
                    menuLabel = 'Store Menu'
                />
            </div>
        )
    }
}

export default Store
