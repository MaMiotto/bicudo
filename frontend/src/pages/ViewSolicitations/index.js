import React, { useState, useEffect } from "react";
import HeadTable from "../../components/Table";
import { orders } from "./constants";
import ModalUpdate from "./Modal";
import { requestAllServices } from "./service";
import * as S from "./styled";

function Visualizar() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(null)
    
    const fetchData = async () =>{
      const res = await requestAllServices();
      console.log(res)
      setData(res.data.data)
    }

    const handleClickEye = (index) =>{
      const info = orders[index]
      setOpen(true);
      setData(info)
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
        <p>Todos os Serviços para voce</p>
      </S.Header>
      {/* if not working, change data to ordes just for testing sake */}
     { data && <S.Container>
        <div>
          <S.Main>
            <HeadTable rows={data} handleClickEye={handleClickEye} />
          </S.Main>
        </div>
        {open && data && (
          <ModalUpdate
            open={open}
            handleModal={handleClose}
            setOpen={setOpen}
            data={data}
          />
        )}
      </S.Container> }
    </>
  );
}

export default Visualizar;
