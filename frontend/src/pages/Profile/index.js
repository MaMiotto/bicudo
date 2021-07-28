import React,{useEffect, useState} from 'react';
import * as S from './styled';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { Button, Grid, makeStyles, TextField, FormControl, Select, MenuItem, InputLabel} from '@material-ui/core';
import { requestUserInfo, updateUserInfo } from './service';
import Loading from '../../components/Loading';
import {isLogin} from '../../services/authentication'

function Profile(){
    const classes = useStyles()
    const [userInfo, setUserInfo] = useState(true);
    const id = 0;

    const history = useHistory();

    const fetchData = async () =>{
        const res = await requestUserInfo(id);
        setUserInfo(res.data)
    }

    useEffect(() => {

        if(!isLogin()){
            history.push("/login");
        }
        
    }, []);

    useEffect(()=>{
        fetchData()
    }, [userInfo])

    const [user, setUser] = useState({
      nome: "",
      email: "",
      dob: "",
      sex: "",
      cpf: "",
      log: "",
      num: "",
      cidade: "",
      cep: "",
      bairro:""
    });

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setUser({ ...user, [name]: value });
    };

    const handleSubmit = async () =>{
        user.id = id;
        const res = await updateUserInfo(user);
        if(res){
            toast.success('Dados salvos com sucesso');
        }
        else{
            toast.error("Erro ao salvar os dados");
        }
    }

return (
  <>
    {userInfo ? (
      <S.Container>
        <div>
          <S.Header>
            <S.Title>Dados Pessoais</S.Title>
            <p>Altere seus dados e salvar eles</p>
          </S.Header>
          <S.Main>
            <div>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      required
                      type="text"
                      id="nome"
                      label="Nome"
                      variant="outlined"
                      name="nome"
                      defaultValue={userInfo.nome}
                      className={classes.text}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      type="text"
                      id="email"
                      label="Email"
                      variant="outlined"
                      name="email"
                      defaultValue={userInfo.email}
                      className={classes.text}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      type="date"
                      id="dob"
                      type="date"
                      defaultValue={user.dob}
                      label="Data de Nascimento"
                      variant="outlined"
                      name="dob"
                      className={classes.text}
                      onChange={handleChange}
                    />
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Sexo
                      </InputLabel>
                      <Select
                        id="genero"
                        label="Sexo"
                        variant="outlined"
                        name="sex"
                        defaultValue={userInfo.genero}
                        onChange={handleChange}
                        className={classes.text}
                      >
                        <MenuItem value="male">Masculino</MenuItem>
                        <MenuItem value="female">Feminino</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      required
                      id="cpf"
                      label="CPF"
                      type="text"
                      variant="outlined"
                      name="cpf"
                      defaultValue={userInfo.cpf}
                      className={classes.text}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id="log"
                      label="Logradouro"
                      variant="outlined"
                      name="log"
                      defaultValue={userInfo.logodouro}
                      className={classes.text}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="Num"
                      label="Numero"
                      variant="outlined"
                      name="num"
                      defaultValue={userInfo.numero}
                      className={classes.text}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="cidade"
                      label="Cidade"
                      variant="outlined"
                      name="cidade"
                      defaultValue={userInfo.cidade}
                      className={classes.text}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="cep"
                      label="CEP"
                      variant="outlined"
                      name="cep"
                      defaultValue={userInfo.cep}
                      className={classes.text}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="bairro"
                      label="Bairro"
                      variant="outlined"
                      name="bairro"
                      defaultValue={userInfo.bairro}
                      className={classes.text}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </form>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                className={classes.button}
                onClick={handleSubmit}
              >
                Alterar Dados
              </Button>
            </div>
          </S.Main>
        </div>
      </S.Container>
    ) : (
      <Loading />
    )}
  </>
);
}

const useStyles = makeStyles((theme) => ({
  text: {
    margin: 20,
    width: "320px",
  },
  button: {
    width: "60%",
    height: 55,
    margin: "10px 0px 10px 20%",
    background: "#0080ff",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default Profile