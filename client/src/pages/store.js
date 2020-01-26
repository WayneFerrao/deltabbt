import React, { Component } from 'react'
import BG from '../components/background.png'
import NavBar from '../components/NavBar'
import SelectBox from '../components/SelectBoxes'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

export class Store extends Component {
    
    render() {          
        return (
            <div style = {{backgroundImage: `url(${BG})`, height: '100vh', backgroundSize: 'cover'}}>
                <NavBar
                    menuLabel = 'Store Menu'
                />
                <Grid container spacing={1}>
                <Grid item md={2}/>
                <Grid item md={6}>
            <div style ={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <SelectBox
                    label = 'Size'
                    option1 = 'Small'
                    option2 = 'Regular'
                    option3 = 'Large'
                />
            </div>
            <div style ={{display: 'flex', flexDirection: 'row', alignItems: 'center', width:'auto'}}>
                <SelectBox
                    label = 'Base'
                    option1 = 'Black Tea'
                    option2 = 'Oolong Tea'
                    option3 = 'Green Tea'
                />
                <SelectBox
                    label = 'Milk'
                    option1 = '2%'
                    option2 = 'Skim'
                    option3 = 'Almond'
                />
                <SelectBox
                    label = 'Toppings'
                    option1 = 'Tapioca'
                    option2 = 'Grass Jelly'
                    option3 = 'Aloe'
                />
            </div>
            <div style ={{display: 'flex', flexDirection: 'row', alignItems: 'center', width:'auto'}}>
                <SelectBox
                    label = 'Ice'
                    option1 = 'Less'
                    option2 = 'Regular'
                    option3 = 'Extra'
                />
                <SelectBox
                    label = 'Sugar'
                    option1 = 'Less'
                    option2 = 'Regular'
                    option3 = 'Extra'
                />
            </div>
            </Grid>
            <Grid item md={4}/>
            </Grid>

            <Button 
            variant="contained" 
            color="primary"
            style ={{background: "inherit",  marginLeft: '19%', marginTop: '2%'}}
            >
                Place Order
            </Button>
            </div>
        )
    }
}

export default Store
