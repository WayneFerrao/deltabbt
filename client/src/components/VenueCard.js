import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';

const styles = {
    card: {
        maxWidth: 345,
    },
}

class VenueCard extends Component {

    render() {

        const {classes, venueData: {name, address, hours, image, venueId}} = this.props;

        return (

            <Card className={classes.card} variant="outlined" style={{ background: '#D99E30', borderWidth: '3px'}}>
                <CardHeader avatar={
                    <Avatar aria-label="logo"
                    className={classes.Avatar}
                    src={image}
                    style = {{width: '30%', height: '30%'}}
                    />

                    }
                    action={<IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>}/>

                    <div style={{ width: '100%'}} >
                      <Box display="flex" p={1}>
                        <Box p={1} style = {{fontWeight: 'bold', fontSize: '20px', color: 'white'}}>
                          {name}
                        </Box>
                        <Box p={1} style = {{fontSize: '16px', color: 'white'}}>
                          {hours}
                        </Box>
                      </Box>
                      <Box display="flex" p={2} style = {{fontSize: '16px', color: 'white'}}>
                      {address}
                  </Box >
                    </div>
            </Card>
        )
    }
}
export default withStyles(styles)(VenueCard);
