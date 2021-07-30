import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import * as S from './styled';
<<<<<<< HEAD
import { whosLoged, isLogin } from '../../services/authentication';
=======
import {isLogin, logout} from '../../services/authentication'
>>>>>>> 510488ea039924ac1fecd8bb8ec5b31a3e8fa551

function HeaderOff(){

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

    const handleLogout = (props, context) => {
      logout();
      history.push("/login");
    }

    const handleClickPesquisa = (props, context) => {
      history.push("pesquisa");
    };

    return (
      <AppBar position="static" style={{ background: "#0080ff" }}>
        <Toolbar>
          <Typography variant="h6" style={{ width: "90%" }}>
            Bicudo
          </Typography>
          <S.Container>
            <Button color="inherit" onClick={handleClickInicio}>
              Início
            </Button>
            {!isLogin() &&  <Button color="inherit" onClick={handleClickEntrar}>
                Entrar
              </Button>
            }
            {isLogin() && 
              <S.Container>
                <Button color="inherit" onClick={handleClickPesquisa}>Contratar</Button>
                <Button color="inherit" onClick={handleClickPerfil}>Perfil</Button>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
                {/*<Button color="inherit" onClick={handleClickPassword}>Altera Senha</Button>*/}
              </S.Container>
            }
          </S.Container>
        </Toolbar>
      </AppBar>
    );
}

export default HeaderOff;