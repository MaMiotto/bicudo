import React, {useState} from 'react';
import * as S from './styled';
import { useHistory } from "react-router-dom";
import api from '../../services/api';

import { TextField, InputAdornment, IconButton, Button } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

function Login(){

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isInputEmailValid, setIsInputEmailValid] = useState(true);
    const [isInputPasswordValid, setIsInputPasswordValid] = useState(true);
    const [areCredentialsValid, setAreCredentialsValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setIsInputEmailValid(true);
        setAreCredentialsValid(true);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setIsInputPasswordValid(true);
        setAreCredentialsValid(true);
    }

    const handleClickShowPassword = (event) => {
        setShowPassword(!showPassword);
    }

    const handleClickCadastrar = (props, context) => {
        history.push("/cadastro")
    };

    async function handleClickLogin() {
        const valido = await validaCampos();
        if(valido){
            history.push('/home');
        }
        setAreCredentialsValid(false);
    }

    async function validaCampos() {
        const data = {email, password}
        
        if(email === null || email.length === 0){ //Valida se o campo Email está em branco
            setIsInputEmailValid(false);
            return false;
        } else if(password === null || password.length === 0){ //Valida se o campo Senha está em branco
            setIsInputPasswordValid(false);
            return false;
        }

        //Validar o par usuário/senha no banco
        try {
            const response = await api.post('/login/api', {email:email, senha:password});
            if(response.data.hasOwnProperty('msg') && response.data.msg === "Login Válido!"){
                return true;
            }       

        } catch (err) {
            return false;
        }

        return false;

    }

    return(
        <div>
            <div>
                <S.bemVindo>Bem-vindo de volta!</S.bemVindo>
            </div>
            <form noValidate autoComplete="off" style={{width:450, margin:"auto"}}>
                <fieldset>
                    <br/>
                    {areCredentialsValid === false && <S.msgErro>Email/Senha Inválidos</S.msgErro>}
                    <TextField 
                        id="email" 
                        label="Email"
                        onChange={handleEmailChange} 
                        variant="outlined"
                        error={isInputEmailValid === false}
                        helperText={isInputEmailValid === false ? "Campo Obrigatório" : ""}
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                    />
                    <br/>
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        variant="outlined"
                        onChange={handlePasswordChange}
                        autoComplete="current-password"
                        error={isInputPasswordValid === false}
                        helperText={isInputPasswordValid  === false ? "Campo Obrigatório" : ""}
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
                                {showPassword ? <Visibility /> : <VisibilityOff />}
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
                    style={{width:"60%", height:55, marginLeft:"20%"}}
                    onClick={handleClickLogin}
                    >
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