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
    const [invalidEmailMsg, setInvalidEmailMsg] = useState("Campo Obrigatório");
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [confPassword, setConfPassword] = useState('');
    const [isConfPasswordValid, setIsConfPasswordValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [isCPFValid, setIsCPFValid] = useState(true);
    const [invalidCPFMsg, setInvalidCPFMsg] = useState("Campo Obrigatório");
    const [dataDeNascimento, setDataDeNascimento] = useState("2000-01-01");
    const [sexo, setSexo] = useState("Masculino");

    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [UF, setUF] = useState("12");
    const [CEP, setCEP] = useState("");
    const [bairro, setBairro] = useState("");

    const [cadastraServico, setCadastraServico] = useState(false);
    const [descricao, setDescricao] = useState("");

    var [categorias, setCategorias] = useState([]);
    const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
    const [categoriasEscolhidas, setCategoriasEscolhidas] = useState([]);

    const handleClickShowPassword = (event) => {
        setShowPassword(!showPassword);
    }

    async function getCategorias(){
        const response = await api.get('/categorias/api');
        setCategorias(response.data);
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

    async function handleCadastraServico(event) {
        await getCategorias();
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

    async function handleRegistrar() {
        if(validaCampos()){
            const jsonToSend = {
                primeiro_nome: nome,
                segundo_nome: sobrenome,
                cpf:cpf,
                email: email,
                senha: password,
                genero: sexo == "Masculino" ? 0 : 1,
                data_nascimento: dataDeNascimento,
                logradouro: logradouro,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: UF,
                cep: CEP,
                fazServico: cadastraServico,
                tipos: categoriasEscolhidas,
                descricao: descricao
            }
            try {
                const response = await api.post('/cadastro/api', jsonToSend);
                if(response.data.hasOwnProperty('msg') && response.data.msg == "Cadastro Realizado Com Sucesso!"){
                    history.push("/login");
                } else if (response.data.hasOwnProperty('erro') && response.data.erro.includes("E-mail ja cadastrado")){
                    setInvalidEmailMsg("Email Já Cadastrado");
                    setIsEmailValid(false);
                } else if (response.data.hasOwnProperty('erro') && response.data.erro.includes("CPF ja cadastrado")){
                    setInvalidCPFMsg("CPF Já Cadastrado");
                    setIsCPFValid(false);
                }
    
            } catch (err) {
                
            }
            
        }
    }

    const validaCampos = () => {
        if(email == null || email.length == 0){ //Valida se o campo Email está em branco
            setInvalidEmailMsg("Campo Obrigatório");
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
                        helperText={isEmailValid == false ? invalidEmailMsg : ""}
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
                        error={isCPFValid == false}
                        helperText={isCPFValid == false ? invalidCPFMsg : ""}
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
                            defaultValue="male"
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
                            defaultValue="12"
                            onChange={handleUFChange}
                            >
                            <MenuItem value="1">AC</MenuItem>
                            <MenuItem value="2">AL</MenuItem>
                            <MenuItem value="3">AP</MenuItem>
                            <MenuItem value="4">AM</MenuItem>
                            <MenuItem value="5">BA</MenuItem>
                            <MenuItem value="6">CE</MenuItem>
                            <MenuItem value="7">ES</MenuItem>
                            <MenuItem value="8">GO</MenuItem>
                            <MenuItem value="9">MA</MenuItem>
                            <MenuItem value="10">MT</MenuItem>
                            <MenuItem value="11">MS</MenuItem>
                            <MenuItem value="12">MG</MenuItem>
                            <MenuItem value="13">PA</MenuItem>
                            <MenuItem value="14">PB</MenuItem>
                            <MenuItem value="15">PR</MenuItem>
                            <MenuItem value="16">PE</MenuItem>
                            <MenuItem value="17">PI</MenuItem>
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