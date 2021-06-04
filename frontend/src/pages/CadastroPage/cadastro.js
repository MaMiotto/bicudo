import React from 'react';
import * as S from './styled';

import { AppBar, Toolbar, Typography, TextField, InputAdornment, IconButton, Button } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

function Cadastro(){
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
            <form noValidate autoComplete="off" style={{width:450, margin:"auto"}}>
                <fieldset>
                    <br/>
                    Página de Cadastro
                </fieldset>
            </form>
        </div>
    )
}

export default Cadastro;