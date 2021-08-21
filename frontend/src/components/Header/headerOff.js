import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import * as S from './styled';
import {isLogin, logout} from '../../services/authentication'

function HeaderOff(){

    const history = useHistory();

    const handleClickInicio = () => {
        history.push("/")
    };

    const handleClickEntrar = () => {
        history.push("/login")
    };

    const handleClickPerfil = () => {
        history.push("/perfil");
    };

    const handleLogout = () => {
      logout();
      history.push("/login");
    }

    const handleClickPesquisa = () => {
      history.push("pesquisa");
    };

    const handleClickVisualizarSolicitacoes = () => {
      history.push("visualizar-solicitacoes");
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
                <Button color="inherit" onClick={handleClickVisualizarSolicitacoes}>Trabalhos</Button>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
              </S.Container>
            }
          </S.Container>
        </Toolbar>
      </AppBar>
    );
}

export default HeaderOff;