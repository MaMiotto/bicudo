import React,{useEffect, useState} from 'react';
import * as S from './styled';
import { useHistory } from "react-router-dom";
import { Button, Grid, makeStyles, TextField, FormControl, Select, MenuItem, InputLabel} from '@material-ui/core';
import { requestUserInfo, updateUserInfo } from './service';
import Loading from '../../components/Loading';
import {updateObject} from '../../utils/createUpdateObject';
import { getGenderType } from '../../utils/genderName';
import {whosLoged} from '../../services/authentication'
import { profile } from './constants';
import { getStandardDate } from '../../utils/formatDate';

function Profile(){
    const classes = useStyles()
    const [userInfo, setUserInfo] = useState(true);
    const [loading, setLoading] = useState(true)
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
      bairro: "",
      id: 0,
    });
    const email = whosLoged()
    const history = useHistory();

    const fetchData = async () =>{
        // const res = await requestUserInfo(email);
        // const data = res.data.dados[0];
        const data = profile[0]
        setUserInfo(data)
        setUser({
          nome:`${data.first_name}   ${data.last_name}`,
          email: data.email,
          dob: data.data_nascimento,
          sex: data.genero,
          cpf: data.cpf,
          log: data.logradouro,
          num: data.numero,
          cidade: data.cidade,
          cep: data.cep,
          bairro: data.bairro,
          id: data.id
        })
        setLoading(false)
    }

    useEffect(()=>{
        fetchData()
    }, [])

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setUser({ ...user, [name]: value });
    };

    const handleSubmit = async () =>{
        const updateUser = updateObject(user);
        const res = await updateUserInfo(updateUser);
    }

return (
  <>
    {!loading ? (
      userInfo &&
      user && (
        <S.Container>
          <div>
            <S.Header>
              <S.Title>Dados Pessoais</S.Title>
              <p>Altere seus dados e salvar eles</p>
            </S.Header>
            <S.Main>
              <div>
                <form noValidate autoComplete="off">
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
                        InputLabelProps={{ shrink: true }}
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
                        InputLabelProps={{ shrink: true }}
                      />
                      <TextField
                        required
                        id="dob"
                        type="date"
                        label="Data de Nascimento"
                        variant="outlined"
                        name="dob"
                        className={classes.text}
                        value={userInfo.dob}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                      />
                      <FormControl variant="outlined" className={classes.text}>
                        <InputLabel id="demo-simple-select-outlined-label">
                          Sexo
                        </InputLabel>
                        <Select
                          id="genero"
                          label="Sexo"
                          variant="outlined"
                          defaultValue="male"
                          onChange={handleChange}
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
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        required
                        id="log"
                        label="Logradouro"
                        variant="outlined"
                        name="log"
                        defaultValue={userInfo.logradouro}
                        className={classes.text}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
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
                        InputLabelProps={{ shrink: true }}
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
                        InputLabelProps={{ shrink: true }}
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
                        InputLabelProps={{ shrink: true }}
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
                        InputLabelProps={{ shrink: true }}
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
      )
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