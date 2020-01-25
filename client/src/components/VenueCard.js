import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import withStyles from '@material-ui/core/styles/withStyles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = { 
    card: {
        display: 'flex',
        marginBottom: 20,
        marginRight: 25,
    },
    image:{
        minWidth:200,
        minHeight:200,
    },
    content:{
        padding: 25, 
        objectFit: 'cover', 
    },
    details: {

    }
}

class VenueCard extends Component {
  
    render() {
        const {classes, venueData: {name, address, hours, image, venueId}} = this.props;
        return (
            <Card className={classes.card}>
                <CardMedia 
                    image={image}
                    title="Profile Image"
                    className={classes.image}/>
                <CardContent >
                   

                </CardContent>
            </Card>
        )
    }
}
export default withStyles(styles)(VenueCard); 