import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import api from '../../services/api';
import {isLogin} from '../../services/authentication'

import {Button, Card, CardContent, Divider, MenuItem, Select, TextField, Typography}  from '@material-ui/core';

function Contato(){

    const history = useHistory();

    useEffect(() => {

        if(!isLogin()){
            history.push("/login");
        }
        
    }, []);

    const [contratado, setContratado] = useState("Luiz");
    const [tipoContato, setTipoContato] = useState("telefone");
    const [email, setEmail] = useState("maria@gmail.com");
    const [telefone, setTelefone] = useState("(31) 9 8888-5555");
    const [contratante, setContratante] = useState("Maria");
    const [categoria, setCategoria] = useState("Eletricista");
    const [dataServico, setDataServico] = useState("2000-01-01");

    function handleTipoContatoChange (event) {
        setTipoContato(event.target.value);
    }

    function handleEmailChange (event) {
        setEmail(event.target.value);
    }

    function handleDataChange (event) {
        setDataServico(event.target.value)
    }

    function handleSubmit(event) {

    }

    return(
        <div style={{width:800, margin:"auto", marginTop: 20}}>
            <Card>
                <CardContent>
                    <Typography component="h5" variant="h5">
                        Solicitar Serviço
                    </Typography>
                    <Divider variant="middle" />
                    <Typography style={{textAlign: 'justify', marginTop: 10}}>
                        Oi {contratado},
                    </Typography>
                    <Typography>
                        Me chamo {contratante}, e estou interessado nos seus serviços de {categoria}.
                    </Typography>
                    <Typography style={{textAlign: 'justify', textOverflow: "ellipsis", overflow: "hidden"}}>
                        Favor entrar em contato comigo por <Select 
                            id="tipo-contato" 
                            variant="outlined"
                            defaultValue="telefone"
                            onChange={handleTipoContatoChange}
                        >
                            <MenuItem value="telefone">telefone</MenuItem>
                            <MenuItem value="email">e-mail</MenuItem>
                        </Select>
                    </Typography>
                    {tipoContato == "email" && <Typography style={{marginTop:10, display: 'flex'}}>
                        <span style={{marginTop:15, marginRight: 10}}>Email:</span> <TextField 
                        id="emailInput" 
                        label="E-mail"
                        variant="outlined"
                        defaultValue={email}
                        onChange={handleEmailChange}
                        style={{width:"28%"}}
                    />
                    </Typography>}
                    {tipoContato == "telefone" && <Typography style={{marginTop:10, display: 'flex'}}>
                        <span style={{marginTop:15, marginRight: 10}}>Telefone:</span> <TextField 
                        id="celularInput" 
                        label="Telefone"
                        variant="outlined"
                        defaultValue={telefone}
                        onChange={handleEmailChange}
                        style={{width:"28%"}}
                    />
                    </Typography>}
                    <Typography style={{marginTop:10, display: 'flex'}}>
                        <span style={{marginTop:15, marginRight: 10}}>Sugiro marcarmos para o dia </span> <TextField 
                            id="data-atendimento" 
                            label="Data do Serviço"
                            variant="outlined"
                            type="date"
                            defaultValue="2000-01-01"
                            onChange={handleDataChange}
                            style={{width:"28%"}}
                        />
                    </Typography>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    disableElevation
                    onClick={handleSubmit}
                    style={{width:"60%", height:55, marginLeft:"20%", marginTop:35, marginBottom:35}}>
                        Solicitar
                </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Contato;