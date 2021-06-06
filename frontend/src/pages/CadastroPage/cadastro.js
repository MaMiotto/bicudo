import React from 'react';
import * as S from './styled';

import { TextField, Select, MenuItem, InputAdornment, IconButton, Button } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import HeaderOff from '../../components/headerOff';

function Cadastro(){

    const [values, setValues] = React.useState({
        email: '',
        password: '',
        confPassword: '',
        showPassword: false,
        showConfPassword: false,

        nome: '',
        sobrenome: '',
        cpf: '',

        logradouro: '',
        numero: '',
        cidade:'',


    });

    const handleClickShowPassword = (event) => {
        setValues({showPassword: !values.showPassword})
    }

    const handleClickShowConfPassword = (event) => {
        setValues({showConfPassword: !values.showConfPassword})
    }

    return(
        <div>
            <HeaderOff/>
            <S.titulo>Cadastro</S.titulo>
            <form noValidate autoComplete="off" style={{width:800, margin:"auto"}}>
                <fieldset style={{width:"100%"}}>
                    <S.label>Informações De Login</S.label>
                    <br/>
                    <TextField required
                        id="email" 
                        label="Email"
                        variant="outlined"
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                    />
                    <br/>
                    <TextField required
                        id="senha" 
                        label="Senha"
                        type={values.showPassword ? 'text' : 'password'}
                        variant="outlined"
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField required
                        id="confirma-senha" 
                        label="Confirmar Senha"
                        type={values.showConfPassword ? 'text' : 'password'}
                        variant="outlined"
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfPassword}
                                    edge="end"
                                    >
                                    {values.showConfPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </fieldset>
                <br/>
                <fieldset style={{width:"100%"}}>
                    <S.label>Informações Básicas</S.label>
                    <br/>
                    <TextField 
                        id="nome" 
                        label="Nome"
                        variant="outlined"
                        style={{width:"28%", marginLeft:"20%", marginBottom:25}}
                    />
                    <TextField 
                        id="sobrenome" 
                        label="Sobrenome"
                        variant="outlined"
                        style={{width:"28%", marginLeft:"4%", marginBottom:25}}
                    />
                    <br/>
                    <TextField 
                        id="cpf" 
                        label="CPF"
                        variant="outlined"
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                    />
                    <TextField 
                        id="data-nascimento" 
                        label="Data de Nascimento"
                        variant="outlined"
                        type="date"
                        defaultValue="2000-01-01"
                        style={{width:"28%", marginLeft:"20%", marginBottom:25}}
                    />
                    <Select 
                        id="genero" 
                        label="Gênero"
                        variant="outlined"
                        style={{width:"28%", marginLeft:"4%", marginBottom:25}}
                    >
                        <MenuItem value="male">Masculino</MenuItem>
                        <MenuItem value="female">Feminino</MenuItem>
                    </Select>
                </fieldset>
                <br/>
                <fieldset style={{width:"100%"}}>
                    <S.label>Endereço</S.label>
                    <br/>
                    <TextField 
                        id="logradouro" 
                        label="Logradouro"
                        variant="outlined"
                        style={{width:"28%", marginLeft:"20%", marginBottom:25}}
                    />
                    <TextField 
                        id="numero" 
                        label="Número"
                        variant="outlined"
                        style={{width:"28%", marginLeft:"4%", marginBottom:25}}
                    />
                    <br/>
                    <TextField 
                        id="cidade" 
                        label="Cidade"
                        variant="outlined"
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                    />
                    <br/>
                    <Select
                        id="estado"
                        label="UF"
                        defaultValue="UF"
                        variant="outlined"
                        style={{width:"28%", marginLeft:"20%", marginBottom:25}}
                        >
                        <MenuItem value="UF"><em>UF:</em></MenuItem>
                        <MenuItem value="AC">AC</MenuItem>
                        <MenuItem value="AL">AL</MenuItem>
                        <MenuItem value="AP">AP</MenuItem>
                        <MenuItem value="AM">AM</MenuItem>
                        <MenuItem value="BA">BA</MenuItem>
                        <MenuItem value="CE">CE</MenuItem>
                        <MenuItem value="ES">ES</MenuItem>
                        <MenuItem value="GO">GO</MenuItem>
                        <MenuItem value="MA">MA</MenuItem>
                        <MenuItem value="MT">MT</MenuItem>
                        <MenuItem value="MS">MS</MenuItem>
                        <MenuItem value="MG">MG</MenuItem>
                        <MenuItem value="PA">PA</MenuItem>
                        <MenuItem value="PB">PB</MenuItem>
                        <MenuItem value="PR">PR</MenuItem>
                        <MenuItem value="PE">PE</MenuItem>
                        <MenuItem value="PI">PI</MenuItem>
                        <MenuItem value="RJ">RJ</MenuItem>
                        <MenuItem value="RN">RN</MenuItem>
                        <MenuItem value="RS">RS</MenuItem>
                        <MenuItem value="RO">RO</MenuItem>
                        <MenuItem value="RR">RR</MenuItem>
                        <MenuItem value="SC">SC</MenuItem>
                        <MenuItem value="AC">SP</MenuItem>
                        <MenuItem value="AL">SE</MenuItem>
                        <MenuItem value="AP">TO</MenuItem>
                        <MenuItem value="AM">DF</MenuItem>
                    </Select>
                    <TextField 
                        id="cep" 
                        label="CEP"
                        variant="outlined"
                        style={{width:"28%", marginLeft:"4%", marginBottom:25}}
                    />
                    <TextField 
                        id="bairro" 
                        label="Bairro"
                        variant="outlined"
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                    />
                </fieldset>
                
                <Button 
                    variant="contained" 
                    color="primary" 
                    disableElevation
                    style={{width:"60%", height:55, marginLeft:"20%", marginTop:35, marginBottom:35}}>
                        Registrar
                </Button>
                        
            </form>
        </div>
    )
}

export default Cadastro;