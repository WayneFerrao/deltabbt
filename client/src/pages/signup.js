import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
    ThemeProvider,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import BG from '../components/background.png'
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    form:{
        textAlign:'center',
        display: "flex",
        flexDirection: "column"
    }, 
    image:{
        margin:'20px auto 20px auto'
    },
    textField:{
        margin:'20px auto 20px auto'
    },
    button:{
        marginTop: 10,
        position: 'relative'
    },
    customError:{
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10,
    },
    progress:{
        position:'absolute',
        color: 'black'
    }
}
const theme = createMuiTheme({
    palette: {
      primary:{ 
          main: '#e8eaf6'
      },
      secondary: {
          main: '#e8eaf6'
      },
    },
  });
export class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName:'',
            loading: false,
            errors:{}
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({
            loading:true
        });
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        }
        console.log(newUserData);
        axios.post('/signup', newUserData)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`)
                this.setState({
                    loading:false
                });
                this.props.history.push('/'); // Redirects to homepage
            })
            .catch(err =>{
                console.log(err);
                this.setState({
                    errors: err.response.data,
                    loading: false
                }) 
            })  
    }; 
    
     handleChange = (event) =>{
        console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.password);
    }


    render() {
        const {classes}= this.props;
        const {errors, loading} = this.state;
        return (
            <div style = {{backgroundImage: `url(${BG})`, height: '100vh', backgroundSize: 'cover'}}>

            <div id = 'TextFields' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width:'auto', height: '100%'}}>
                <form noValidate onSubmit={this.handleSubmit} >
                    <ThemeProvider theme={theme}>
                        <div className={classes.form}>
                            <TextField 
                                id ="email"
                                name="email"
                                type="email"
                                label="Email"
                                helperText={errors.email}
                                className= {classes.textField}
                                error={errors.email ? true :false}
                                value={this.state.email}
                                onChange={this.handleChange}
                                />
                            <TextField
                                id="standard-password-input"
                                type="password"
                                name= "password"
                                label="Password"
                                className= {classes.textField}
                                helperText={errors.password}
                                error={errors.password ? true :false}
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <TextField
                                id="confirm-password-input"
                                type="password"
                                name= "confirmPassword"
                                label="Confirm Password"
                                className= {classes.textField}
                                helperText={errors.confirmPassword}
                                error={errors.confirmPassword ? true :false}
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                            />
                            <TextField
                                id="firstName"
                                type="firstName"
                                name= "firstName"
                                label="First Name"
                                className= {classes.textField}
                                helperText={errors.firstName}
                                error={errors.firstName ? true :false}
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
                            <TextField
                                 id="lastName"
                                 type="lastName"
                                 name= "lastName"
                                 label="Last Name"
                                className= {classes.textField}
                                helperText={errors.lastName}
                                error={errors.lastName ? true :false}
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            />
                            {errors.error && (
                                <Typography variant="body2" className={classes.customError} >
                                    User not found
                                </Typography>
                            )}
                            {errors.general && (
                                <Typography variant="body2" className={classes.customError} >
                                    Invalid credentials
                                </Typography>
                            )}
                            <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary"
                            className={classes.button}
                            disabled={loading}>
                                Signup
                                {loading && (
                                    <CircularProgress size={30} className={classes.progress}/>
                                )}
                            </Button>
                            <small style={{fontWeight:"bold", marginTop:20,color: "#eee"}}>Already have an account? </small> 
                            <br/>   
                            <small style={{fontWeight:"bold", color: "#eee"}}> <Link to="/login">Login here</Link></small>
                    </div>
                    </ThemeProvider>
                </form>
                <br/>
            </div>
        </div>
        )
    }
}
Signup.propTypes={
    classes:PropTypes.object.isRequired
};
export default withStyles(styles)(Signup);
