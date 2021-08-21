import React, { useEffect, useState } from "react";
import HeadTable from "../../components/Table";
import { orders } from "./constants";
import ModalUpdate from "./Modal";
import * as S from "./styled";

function Visualizar() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(null)
    

    const handleClickEye = (index) =>{
      const info = orders[index]
      setData(info)
      setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false)
    }

  return (
    <>
      <S.Container>
        <div>
          <S.Header>
            <S.Title>Solicitações de Serviços</S.Title>
            <p>Todos os Serviços para voce</p>
          </S.Header>
          <S.Main>
            <HeadTable rows={orders} handleClickEye={handleClickEye} />
          </S.Main>
        </div>
      </S.Container>
      {/* {open && data && (
        <ModalUpdate open={open} handleModal={handleClose} setOpen={setOpen} />
      )} */}
    </>
  );
}

export default Visualizar;
