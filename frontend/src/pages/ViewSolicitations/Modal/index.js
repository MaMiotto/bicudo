/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Loading from "../../../components/Loading";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme, Grid, Icon, Modal, TextField, Button} from "@material-ui/core";
import * as S from "./styled";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(() => ({
  paper: {
    position: "absolute",
    width: "700px",
    height: "600px",
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    margin: "0 auto",
    padding: "25px 35px",
    margin: "0 auto",
  },
  root: {
    flexGrow: 1,
  },
}));

export default function ModalUpdate({ handleModal, open, data, setOpen }) {
    const classes = useStyles();
    const theme = useTheme();
    const [modalStyle] = useState(getModalStyle);
    const [update, setUpdate] = useState({
      cliente: '',
      tipo: '',
      disponibilidade:'',
      agendamento: '',
    });

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setUpdate({ ...data, [name]: value });
    };

    const handleSubmit = (value) =>{
        if(value){
            update.status = 1;
            setOpen(false)
        }
        else{
            update.status = 0
        }
    }

    const body = (
      <div style={modalStyle} className={classes.paper}>
        <>
          <S.Header>
            <S.Title>Editar Solicitacao</S.Title>
            <S.RightHeader>
              <S.CloseButton
                startIcon={<Icon name="close" color="#223345" />}
                onClick={handleModal}
                style={{ backgroundColor: "transparent" }}
              />
            </S.RightHeader>
          </S.Header>
          <form
            noValidate="novalidate"
            style={{ position: "relative", height: "480px", width: "100%" }}
          >
            <S.Main className={classes.root}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    id="cliente"
                    label="Cliente"
                    variant="outlined"
                    name="cliente"
                    value={data.cliente}
                    InputLabelProps={{ shrink: true }}
                    disabled
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    id="tipo"
                    label="Tipo de Serviço"
                    variant="outlined"
                    name="tipo"
                    value={data.tipo}
                    InputLabelProps={{ shrink: true }}
                    disabled
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    id="disponibilidade"
                    label="Data de Disponibilidade"
                    variant="outlined"
                    name="disponibilidade"
                    value={data.disponibilidade}
                    InputLabelProps={{ shrink: true }}
                    maxRows={4}
                    disabled
                    multiline
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="text"
                    id="agendamento"
                    label="Agendamento"
                    variant="outlined"
                    name="agendamento"
                    defaultValue=""
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    maxRows={4}
                    multiline
                  />
                </Grid>
              </Grid>
            </S.Main>
            <S.Footer>
              <Button
                onClick={handleModal}
                style={{
                  backgroundColor: "#DDE5F0",
                  color: theme.palette.info.main,
                }}
                variant="outlined"
              >
                Cancelar
              </Button>
              <S.RightFooter>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleSubmit(false)}
                >
                  Recusar
                </Button>
                <Button
                  onClick={handleSubmit(true)}
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={{
                    color: "#fff",
                    marginLeft: "10px",
                  }}
                >
                  Aceitar
                </Button>
              </S.RightFooter>
            </S.Footer>
          </form>
        </>
      </div>
    );

  return (
    <div>
      <Modal open={open} onClose={handleModal}>
        {body}
      </Modal>
    </div>
  );
}
