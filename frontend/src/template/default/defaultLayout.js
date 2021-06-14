import React from 'react';
import HeaderOff from '../../components/Header/headerOff'


function Layout({children}){
    return (
        <>
            <HeaderOff/>
            <div>{children}</div>
        </>
    )
}

export default Layout;