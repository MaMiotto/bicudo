import React, { useState, useEffect } from "react";
import HeadTable from "../../components/Table/index2";
import { requestAllServices } from "./service";
import * as S from "./styled";
import {isLogin, whosLoged} from '../../services/authentication'

function VisualizarCliente() {
    const [data, setData] = useState(null)
    
    const fetchData = async () =>{
      //const res = await requestAllServices();
      console.log(whosLoged() === "marcos@gmail.com")
      if(whosLoged() === "marcos@gmail.com"){
        setData([
          {
            cliente: "Marcos",
            prestador: "João Paulo",
            tipo: "Pintura",
            disponibilidade: "26/08/2021",
            agendamento: "teste",
            status: 1
          }
        ])
      }
    }

    useEffect(() =>{
      fetchData()
    }, [])

  return (
    <>
      <S.Header>
        <S.Title>Solicitações de Serviços</S.Title>
        <p>Todos os Serviços que você solicitou</p>
      </S.Header>
      {/* if not working, change data to ordes just for testing sake */}
     { data && <S.Container>
        <div>
          <S.Main>
            <HeadTable rows={data} />
          </S.Main>
        </div>
      </S.Container> }
    </>
  );
}

export default VisualizarCliente;
