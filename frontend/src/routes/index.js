import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/HomePage'
import Login from '../pages/LoginPage/login'
import Cadastro from '../pages/CadastroPage/cadastro'
import Profile from '../pages/Profile';
//import ChangePassword from '../pages/Password';
import Pesquisa from '../pages/Pesquisa/pesquisa'
import Contato from '../pages/Contato/contato'
import Visualizar from '../pages/ViewSolicitations';
import VisualizarCliente from '../pages/ViewClientSolicitations';

function Routes(){
    return (
    <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/cadastro' component={Cadastro} exact/>
        <Route path='/perfil' component={Profile} exact/>
        <Route path='/pesquisa' component={Pesquisa} exact/>
        <Route path='/solicitar-servico' component={Contato} exact/>
        <Route path='/visualizar-solicitacoes' component={Visualizar} exact/>
        <Route path='/visualizar-requerimentos' component={VisualizarCliente} exact/>
    </Switch>
    )
}

export default Routes;