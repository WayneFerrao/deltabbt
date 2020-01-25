import React, { Component } from 'react'
import faker from 'faker';
import ProfileInfo from '../components/ProfileInfo';

export class Profile extends Component {
    render() {
        return (


            <div style= {{display:'flex',justifyContent:'center', alignItems:'center'}}>
                <ProfileInfo
                pp={faker.image.avatar()}
                fName="Daddy"
                lName="Wayne"
                phone="416-629-6921"
                email="DaddyWayne@gmail.com"
                password="***********"/>

            </div>
        );
    }
}

export default Profile
