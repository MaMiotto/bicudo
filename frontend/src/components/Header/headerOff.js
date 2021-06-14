import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import { useHistory } from "react-router-dom";

function HeaderOff(){

    const history = useHistory();

    const handleClickInicio = (props, context) => {
        history.push("/")
    };

    const handleClickEntrar = (props, context) => {
        history.push("/login")
    };

    return(
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" style={{width:"90%"}} >
                Bicudo
            </Typography>
            <Button color="inherit" onClick={handleClickInicio}>Início</Button>
            <Button color="inherit" onClick={handleClickEntrar}>Entrar</Button>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderOff;