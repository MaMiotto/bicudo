import React, {useState} from 'react';
import * as S from './styled';
import { useHistory } from "react-router-dom";
import api from '../../services/api';

import { TextField, Select, MenuItem, InputAdornment, IconButton, Button, Switch, FormControlLabel, FormControl, InputLabel } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';


function Cadastro(){
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [confPassword, setConfPassword] = useState('');
    const [isConfPasswordValid, setIsConfPasswordValid] = useState(true);
    const [showPassword, setShowPassword] = useState(true);
    const [showConfPassword, setShowConfPassword] = useState(true);

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [dataDeNascimento, setDataDeNascimento] = useState("");
    const [sexo, setSexo] = useState("");

    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [UF, setUF] = useState("");
    const [CEP, setCEP] = useState("");
    const [bairro, setBairro] = useState("");

    const [cadastraServico, setCadastraServico] = useState(false);
    const [descricao, setDescricao] = useState("");

    const [categorias, setCategorias] = useState(["teste1", "teste2", "teste3"]);
    const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
    const [categoriasEscolhidas, setCategoriasEscolhidas] = useState([]);

    const handleClickShowPassword = (event) => {
        setShowPassword(!showPassword);
    }

    const handleClickShowConfPassword = (event) => {
        setShowConfPassword(!showConfPassword);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setIsEmailValid(true);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setIsPasswordValid(true);
    }

    const handleConfPasswordChange = (event) => {
        setConfPassword(event.target.value);
        setIsConfPasswordValid(true);
    }

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    }
    const handleSobrenomeChange = (event) => {
        setSobrenome(event.target.value);
    }

    const handleCPFChange = (event) => {
        setCPF(event.target.value);
    }

    const handleDataNascimentoChange = (event) => {
        setDataDeNascimento(event.target.value);
    }

    const handleSexoChange = (event) => {
        setSexo(event.target.value);
    }

    const handleLogradouroChange = (event) => {
        setLogradouro(event.target.value);
    }

    const handleNumeroChange = (event) => {
        setNumero(event.target.value);
    }

    const handleCidadeChange = (event) => {
        setCidade(event.target.value);
    }

    const handleUFChange = (event) => {
        setUF(event.target.value);
    }

    const handleCEPChange = (event) => {
        setCEP(event.target.value);
    }
    
    const handleBairroChange = (event) => {
        setBairro(event.target.value);
    }

    const handleCadastraServico = (event) => {
        setCadastraServico(!cadastraServico);
    }

    const handleDescricaoChange = (event) => {
        setDescricao(event.target.value);
    }

    const handleCategoriaChange = (event) => {
        setCategoriaEscolhida(event.target.value);
    }

    const handleAdicionaCategoria = (event) => {
        if(!categoriasEscolhidas.includes(categoriaEscolhida)){
            var cat = categoriasEscolhidas;
            cat.push(categoriaEscolhida);
            setCategoriasEscolhidas(cat);
        }
    }

    const makeOption = (value) => {
        return <MenuItem value={value}>{value}</MenuItem>;
    };

    const makeCategoriasEscolhidas = (value) => {
        return value + ", ";
    };

    const handleRegistrar = (value) => {
        if(validaCampos()){
            //const response = await api.post('/registro', {email:values.email, senha:values.password});
            history.push("/entrar");
        }
    }

    const validaCampos = () => {
        if(email == null || email.length == 0){ //Valida se o campo Email está em branco
            setIsEmailValid(false);
            return false;
        } else if(password == null || password.length == 0){ //Valida se o campo Senha está em branco
            setIsPasswordValid(false);
            return false;
        }
        else if(confPassword == null || confPassword.length == 0){ //Valida se o campo Senha está em branco
            setIsConfPasswordValid(false);
            return false;
        }

        return true;
    }

    return(
        <div>
            <S.titulo>Cadastro</S.titulo>
            <form noValidate autoComplete="off" style={{width:800, margin:"auto"}}>
                <fieldset style={{width:"100%"}}>
                    <S.label>Informações De Login</S.label>
                    <br/>
                    <TextField required
                        id="email" 
                        label="Email"
                        variant="outlined"
                        onChange={handleEmailChange} 
                        error={isEmailValid == false}
                        helperText={isEmailValid == false ? "Campo Obrigatório" : ""}
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                    />
                    <br/>
                    <TextField required
                        id="senha" 
                        label="Senha"
                        type={showPassword ? 'text' : 'password'}
                        variant="outlined"
                        onChange={handlePasswordChange} 
                        error={isPasswordValid == false}
                        helperText={isPasswordValid == false ? "Campo Obrigatório" : ""}
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField required
                        id="confirma-senha" 
                        label="Confirmar Senha"
                        type={showConfPassword ? 'text' : 'password'}
                        variant="outlined"
                        onChange={handleConfPasswordChange} 
                        error={isConfPasswordValid == false}
                        helperText={isConfPasswordValid == false ? "Campo Obrigatório" : ""}
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfPassword}
                                    edge="end"
                                    >
                                    {showConfPassword ? <Visibility /> : <VisibilityOff />}
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
                        onChange={handleNomeChange}
                        style={{width:"28%", marginLeft:"20%", marginBottom:25}}
                    />
                    <TextField 
                        id="sobrenome" 
                        label="Sobrenome"
                        variant="outlined"
                        onChange={handleSobrenomeChange}
                        style={{width:"28%", marginLeft:"4%", marginBottom:25}}
                    />
                    <br/>
                    <TextField 
                        id="cpf" 
                        label="CPF"
                        variant="outlined"
                        onChange={handleCPFChange}
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                    />
                    <TextField 
                        id="data-nascimento" 
                        label="Data de Nascimento"
                        variant="outlined"
                        type="date"
                        defaultValue="2000-01-01"
                        onChange={handleDataNascimentoChange}
                        style={{width:"28%", marginLeft:"20%", marginBottom:25}}
                    />
                    <FormControl variant="outlined" style={{width:"28%", marginLeft:"4%", marginBottom:25}} >
                        <InputLabel id="demo-simple-select-outlined-label">Sexo</InputLabel>
                        <Select 
                            id="genero" 
                            label="Sexo"
                            variant="outlined"
                            onChange={handleSexoChange}
                        >
                            <MenuItem value="male">Masculino</MenuItem>
                            <MenuItem value="female">Feminino</MenuItem>
                        </Select>
                    </FormControl>
                </fieldset>
                <br/>
                <fieldset style={{width:"100%"}}>
                    <S.label>Endereço</S.label>
                    <br/>
                    <TextField 
                        id="logradouro" 
                        label="Logradouro"
                        variant="outlined"
                        onChange={handleLogradouroChange}
                        style={{width:"28%", marginLeft:"20%", marginBottom:25}}
                    />
                    <TextField 
                        id="numero" 
                        label="Número"
                        variant="outlined"
                        onChange={handleNumeroChange}
                        style={{width:"28%", marginLeft:"4%", marginBottom:25}}
                    />
                    <br/>
                    <TextField 
                        id="cidade" 
                        label="Cidade"
                        variant="outlined"
                        onChange={handleCidadeChange}
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                    />
                    <br/>
                    <FormControl variant="outlined" style={{width:"28%", marginLeft:"20%", marginBottom:25}} >
                        <InputLabel id="demo-simple-select-outlined-label">UF</InputLabel>
                        <Select
                            id="estado"
                            label="UF"
                            variant="outlined"
                            onChange={handleUFChange}
                            >
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
                    </FormControl>
                    <TextField 
                        id="cep" 
                        label="CEP"
                        variant="outlined"
                        onChange={handleCEPChange}
                        style={{width:"28%", marginLeft:"4%", marginBottom:25}}
                    />
                    <TextField 
                        id="bairro" 
                        label="Bairro"
                        variant="outlined"
                        onChange={handleBairroChange}
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                    />
                </fieldset>

                <FormControlLabel
                    control={
                        <Switch
                            checked={cadastraServico}
                            onChange={handleCadastraServico}
                            name="checkedB"
                            color="primary"
                        />  
                    }
                    label="Deseja Prestar Serviços?"
                />

                {cadastraServico && <fieldset style={{width:"100%"}}>
                    <S.label>Prestador de Serviços</S.label>
                    <br/>
                    <FormControl variant="outlined" style={{width:"28%", marginLeft:"20%", marginBottom:25}} >
                        <InputLabel id="demo-simple-select-outlined-label">Categoria</InputLabel>
                        <Select
                            id="categorias"
                            label="Categoria"
                            variant="outlined"
                            onChange={handleCategoriaChange}                    
                            >
                            {categorias.map(makeOption)}
                        </Select>
                    </FormControl>

                    <Button 
                        variant="contained" 
                        color="primary" 
                        disableElevation
                        onClick={handleAdicionaCategoria}
                        style={{width:"28%", height:55, marginLeft:"4%"}}>
                            Adicionar
                    </Button>
                    <br/>
                    <S.categorias>Categorias: {categoriasEscolhidas.map(makeCategoriasEscolhidas)}</S.categorias>
                    <br/>
                    <TextField 
                        id="descricao" 
                        label="Descrição"
                        helperText="Descreva brevemente suas habilidades profissionais e capacitações"
                        variant="outlined"
                        onChange={handleDescricaoChange}
                        multiline
                        rows={7}
                        style={{width:"60%", marginLeft:"20%", marginBottom:25}}
                    />
                    </fieldset>
                }         
                
                <Button 
                    variant="contained" 
                    color="primary" 
                    disableElevation
                    onClick={handleRegistrar}
                    style={{width:"60%", height:55, marginLeft:"20%", marginTop:35, marginBottom:35}}>
                        Registrar
                </Button>

                          
            </form>
        </div>
    )
}

export default Cadastro;