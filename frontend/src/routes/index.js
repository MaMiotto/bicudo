import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from '../pages/HomePage'
import Login from '../pages/LoginPage/login'
import Cadastro from '../pages/CadastroPage/cadastro'
import Profile from '../pages/Profile';
import Password from '../pages/Password';

function Routes(){
    return (
    <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/cadastro' component={Cadastro} exact/>
        <Route path='/perfil' component={Profile} exact/>
        <Route path='/change-password' component={Password} exact/>
    </Switch>
    )
}

export default Routes;