import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import api from '../../services/api';
import * as S from './styled';

import { Button, Card, CardContent, Divider, IconButton, InputAdornment, TextField, Typography } from '@material-ui/core';
import { Search} from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';

function Pesquisa(){

    const history = useHistory();

    const [categorias, setCategorias] = useState([{"nome":""}]);
    const [categoriaPesquisada, setCategoriaPesquisada] = useState('');
    const [pesquisou, setPesquisou] = useState(false);
    const [profissionais, setProfissionais] = useState([
        {
            primeiro_nome: 'Rodrigo',
            segundo_nome: 'Hilbert',
            categorias: ['Eletricista', 'Pintor', 'Encanador'],
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales massa eu arcu pulvinar lacinia. Etiam rhoncus euismod ultrices. Fusce ut tellus aliquam, porttitor neque sed, iaculis ipsum. Integer sollicitudin quis orci id porta."

        },
        {
            primeiro_nome: 'Rodrigo',
            segundo_nome: 'Hilbert',
            categorias: ['Eletricista', 'Pintor', 'Encanador'],
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales massa eu arcu pulvinar lacinia. Etiam rhoncus euismod ultrices. Fusce ut tellus aliquam, porttitor neque sed, iaculis ipsum. Integer sollicitudin quis orci id porta."

        },
        {
            primeiro_nome: 'Rodrigo',
            segundo_nome: 'Hilbert',
            categorias: ['Eletricista', 'Pintor', 'Encanador'],
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales massa eu arcu pulvinar lacinia. Etiam rhoncus euismod ultrices. Fusce ut tellus aliquam, porttitor neque sed, iaculis ipsum. Integer sollicitudin quis orci id porta."

        }
    ]);

    useEffect(() => {

        async function getCategorias(){
            const response = await api.get('/categorias/api');
            setCategorias(response.data);
        }

        getCategorias()
        
        //setCategorias(['Encanador', 'Eletricista', 'Pintor']);
    }, []);

    function handleTextChange(event) {
        setCategoriaPesquisada(event.target.textContent);
    }

    function handleSearch(event) {
        setPesquisou(true)
    }

    function handleClickVerPerfil(event){
        history.push("/perfil");
    }

    function handleClickContratar(event){
        history.push("/solicitar-servico");
    }

    function formataCategoriaDoPrestador(categoria){
        return <Typography variant="subtitle1" color="textSecondary" style={{margin: 5}}>
            {categoria}
        </Typography>
    }

    function formataPrestador(prestador){
        return <Card style={{marginTop: 25, height: 250}}>
            <div style={{display: 'flex'}}>
            <img src='https://peopleinmedia.org/wp-content/uploads/ext/5/f/5f4kmvt57vdl0.jpg' width='200' height='200' style={{marginTop: 25, marginLeft: 10}}/>
                <CardContent>
                    <Typography component="h5" variant="h5">
                        {prestador.primeiro_nome} {prestador.segundo_nome} 
                    </Typography>
                    <div style={{display: 'flex'}}>
                        {prestador.categorias.map(formataCategoriaDoPrestador)}
                    </div>
                    <Divider variant="middle" />
                    <Typography style={{textAlign: 'justify', textOverflow: "ellipsis", overflow: "hidden", height: 100}}>
                        {prestador.descricao}
                    </Typography>
                    <div style={{display: 'flex'}}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        disableElevation
                        onClick={handleClickVerPerfil}
                        style={{height:30, marginLeft: 320, marginTop: 20}}>
                            Ver Perfil
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        disableElevation
                        onClick={handleClickContratar}
                        style={{height:30, marginLeft: 10, marginTop: 20}}>
                            Contratar
                    </Button>
                    </div>
                </CardContent>
            </div>
        </Card>
    }

    return(
        <div>
            <div style={{width:800, margin:"auto"}}>
                <S.titulo>Pesquisar Serviço</S.titulo>
                <Autocomplete
                    style={{width:'80%', margin:"auto"}}
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    onChange={handleTextChange}
                    options={categorias.map((option) => option.nome)}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Pesquisa por uma Categoria. Ex: Pintor"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps,
                            endAdornment: (
                                <InputAdornment>
                                <IconButton 
                                    onClick={handleSearch}>
                                    <Search />
                                </IconButton>
                                </InputAdornment>
                            ), 
                            type: 'search' }}
                    />
                    )}
                />
                {pesquisou && profissionais.map((formataPrestador))}
            </div>
        </div>
    )
}

export default Pesquisa;