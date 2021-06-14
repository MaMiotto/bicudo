import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../template/default/defaultLayout';

function RouteWrapper({
    component: Component,
    isPrivate = false,
    ...rest
}){

    function DefaultLayout({children}){
        return <Layout {...rest}>{children}</Layout>
    }

    return (
        <Route
           {...rest}
           render={props => (
               <DefaultLayout {...rest}>
                   <Component {...props}/>
               </DefaultLayout>
            )}
        />
    )
}

export default RouteWrapper;