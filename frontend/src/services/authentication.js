const TOKEN_KEY = 'jwt';

export const login = (email) => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
    localStorage.setItem('email', email);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('email');
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
    return false;
}

export const whosLoged = () =>{
    return localStorage.getItem('email');
}