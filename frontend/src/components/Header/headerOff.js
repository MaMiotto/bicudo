import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import { useHistory } from "react-router-dom";

function HeaderOff(){
    const [isLogged, setIsLogged] = useState(true)

    const history = useHistory();

    const handleClickInicio = (props, context) => {
        history.push("/")
    };

    const handleClickEntrar = (props, context) => {
        history.push("/login")
    };

    const handleClickPerfil = (props, context) => {
        history.push("/perfil");
    };

    const handleClickPassword = (props, context) => {
      history.push("change-password");
    };

    return(
        <AppBar position="static" style={{background: '#0080ff'}}>
            <Toolbar>
            <Typography variant="h6" style={{width:"90%"}} >
                Bicudo
            </Typography>
            <Button color="inherit" onClick={handleClickInicio}>Início</Button>
            <Button color="inherit" onClick={handleClickEntrar}>Entrar</Button>
            {isLogged ? (
                <div>
                    <Button color="inherit" onClick={handleClickPerfil}>Perfil</Button>
                    {/* <Button color="inherit" onClick={handleClickPassword}>Altera Senha</Button> */}
                </div>
            ): <Button color="inherit" onClick={handleClickEntrar}>Entrar</Button>}
            </Toolbar>
        </AppBar>
    );
}

export default HeaderOff;