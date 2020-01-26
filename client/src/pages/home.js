import React, { Component } from 'react'
import Map from '../components/SimpleMap'
import BG from '../components/background.png'
import NavBar from '../components/NavBar'
export class Home extends Component {
    render() {
        return (
            <div style = {{backgroundImage: `url(${BG})`, height: '100vh', backgroundSize: 'cover'}}>
                
                <NavBar/>
            </div>
        )
    }
}

export default Home
