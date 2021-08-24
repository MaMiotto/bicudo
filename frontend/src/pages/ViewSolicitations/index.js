import React, { useState, useEffect } from "react";
import HeadTable from "../../components/Table";
import { orders } from "./constants";
import ModalUpdate from "./Modal";
import { requestAllServices } from "./service";
import * as S from "./styled";
import {isLogin, whosLoged} from '../../services/authentication'

function Visualizar() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(null);
    const [datas, setDatas] = useState(null)
    const [index, setIndex] = useState(-1);
    
    const fetchData = async () =>{
      //const res = await requestAllServices();
      //setData(res.data.data)

      if(whosLoged() === "jp@x.com"){
        setDatas([
          {
            cliente: "Marcos",
            prestador: "João Paulo",
            tipo: "Pintura",
            disponibilidade: "26/08/2021",
            agendamento: "teste",
            status: 1,
            acao: "what is thats "
          }
        ])
      }
    }

    const handleClickEye = (index) =>{
      setIndex(index)
      setOpen(true);
      setData(datas[index])
    }

    const handleClose = () =>{
        setOpen(false)
    }

    useEffect(() =>{
      fetchData()
    }, [])

  return (
    <>
      <S.Header>
        <S.Title>Solicitações de Serviços</S.Title>
        <p>Todos os Serviços para você</p>
      </S.Header>
      {/* if not working, change data to ordes just for testing sake */}
     { datas && <S.Container>
        <div>
          <S.Main>
            <HeadTable rows={datas} handleClickEye={handleClickEye} />
          </S.Main>
        </div>
        {open && data && (
          <ModalUpdate
            open={open}
            handleModal={handleClose}
            setOpen={setOpen}
            data={data}
            datas={datas}
            index={index}
          />
        )}
      </S.Container> }
    </>
  );
}

export default Visualizar;
