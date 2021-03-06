/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme, Grid, Icon, Modal, TextField, Button} from "@material-ui/core";
import * as S from "./styled";
import { updateStatus } from "../service";

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
    width: "500px",
    height: "400px",
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    margin: "0 auto",
    padding: "25px 35px",
  },
  root: {
    flexGrow: 1,
  },
}));

export default function ModalUpdate({ handleModal, open, data, setOpen, setInfo }) {
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
      e.preventDefault()
      const name = e.target.name;
      const value = e.target.value;
      setUpdate({ ...data, [name]: value });
    };

    const handleSubmit = async (value) =>{
        if(value){
          const res = await updateStatus(data.id, 2, update.agendamento)
          if(res){
            setOpen(false);
            setInfo(null);
          }
        }
        else{
          const res = await updateStatus(data.id, 5, update.agendamento);
          if(res){
            setOpen(false);
            setInfo(null);
          }
        }
    }

    const body = (
      <div style={modalStyle} className={classes.paper}>
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
            style={{ position: "relative", height: "300px", width: "100%" }}
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
                    label="Tipo de Servi??o"
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
          </form>
          <S.Footer>
              <Button
                onClick={handleModal}
                style={{
                  backgroundColor: "#DDE5F0",
                }}
                variant="outlined"
              >
                Cancelar
              </Button>
              <S.RightFooter>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleSubmit(false)}
                >
                  Recusar
                </Button>
                <Button
                  onClick={() => handleSubmit(true)}
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={{
                    background: 'rgb(0, 128, 255)',
                    color: "#fff",
                    marginLeft: "10px",
                  }}
                >
                  Aceitar
                </Button>
              </S.RightFooter>
            </S.Footer>
      </div>
    );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
