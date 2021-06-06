import React from 'react';
import * as S from './styled';
import { useHistory } from "react-router-dom";

import { AppBar, Toolbar, Typography, TextField, InputAdornment, IconButton, Button } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import HeaderOff from '../../components/headerOff';

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

    const handleClickCadastrar = (props, context) => {
        history.push("/cadastro")
    };

    return(
        <div>
            <HeaderOff/>
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