import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from '../pages/HomePage'
import Login from '../pages/LoginPage/login'
import Cadastro from '../pages/CadastroPage/cadastro'

function Routes(){
    return (
    <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/cadastro' component={Cadastro} exact/>
    </Switch>
    )
}

export default Routes;