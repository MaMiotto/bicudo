import React from 'react';
import * as S from './styled';
import { useHistory } from "react-router-dom";

import { AppBar, Toolbar, Typography, TextField, InputAdornment, IconButton, Button } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

function Login(){

    const history = useHistory();

    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleEmailChange = (event) => {
        setValues({email:event.target.value});
    }

    const handlePasswordChange = (event) => {
        setValues({password:event.target.value});
    }

    const handleClickShowPassword = (event) => {
        setValues({showPassword: !values.showPassword})
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickCadastrar = (props, context) => {
        history.push("/cadastro")
    };

    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" style={{width:"90%"}} >
                    Bicudo
                </Typography>
                <Button color="inherit">Início</Button>
                <Button color="inherit">Entrar</Button>
                </Toolbar>
            </AppBar>
            <div>
                <S.bemVindo>Bem-vindo de volta!</S.bemVindo>
            </div>
            <form noValidate autoComplete="off" style={{width:450, margin:"auto"}}>
                <fieldset>
                    <br/>
                    <TextField 
                        id="email" 
                        label="Email"
                        onChange={handleEmailChange} 
                        variant="outlined"
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                    />
                    <br/>
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type={values.showPassword ? 'text' : 'password'}
                        variant="outlined"
                        onChange={handlePasswordChange}
                        autoComplete="current-password"
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleClickShowPassword}
                                edge="end"
                                >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            ),
                        }}
                    />
                    <br/>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    disableElevation
                    style={{width:"60%", height:55, marginLeft:"20%"}}>
                        Enviar
                    </Button>
                    <br/><br/>
                    <hr/>
                    <div style={{textAlign:"center"}}>
                        Ainda não tem conta? <a href="" onClick={handleClickCadastrar}>Cadastre-se!</a>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Login;