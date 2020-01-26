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
import CircularProgress from '@material-ui/core/CircularProgress';
import BG from '../components/background.png'

const styles = {
    form:{
        textAlign:'center',
        display: "flex",
        flexDirection: "column",
        marginTop: '70%'
    }, 
    image:{
        margin:'20px auto 20px auto'
    },
    textField:{
        margin:'20px auto 20px auto',
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
export class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors:{}
        }
    }

    handleSubmit = (event) =>{
        console.log(event);
        event.preventDefault();
        this.setState({
            loading:true
        });
        const userData = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(userData);
        axios.post('/login', userData)
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

            <div id = 'TextFields' 
                style={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    width:'auto', 
                    height: '100%',
                    }}>
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
                                type="password"
                                label="Password"
                                className= {classes.textField}
                                helperText={errors.password}
                                error={errors.password ? true :false}
                                value={this.state.password}
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
                                Login
                                {loading && (
                                    <CircularProgress size={30} className={classes.progress}/>
                                )}
                            </Button>
                            <small style={{fontWeight:"bold", marginTop:20,color: "#eee"}}>Don't have an account yet?</small> 
                            <br/>
                            <small style={{fontWeight:"bold", color: "#eee"}}> <Link to="/signup">Sign up here</Link></small>
                    </div>
                    </ThemeProvider>
                </form>
                <br/>
                <div>
                </div>
            </div>
            </div>
        )
    }
}

Login.propTypes={
    classes:PropTypes.object.isRequired
};
export default withStyles(styles)(Login);

