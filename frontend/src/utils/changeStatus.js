

const changeStatus = (status) => {
    if (status === 1) return <p style={{color: 'blue', fontSize: '15px'}}>Aberto</p>;
    else if(status === 2) return <p style={{ color: "DimGrey", fontSize: "15px" }}>Agendado</p>;
    else if(status === 3) return <p style={{ color: "green", fontSize: '15px' }}>Confirmado</p>;
    else if(status === 4) return <p style={{ color: "#008B8B", fontSize: "15px" }}>Finalizado</p>;
    else if(status === 5) return <p style={{ color: "red", fontSize: "15px" }}>Recusado</p>;
    else return ''
}

export {
    changeStatus
}