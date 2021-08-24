import api from "../../services/api"


const requestAllServices = async () =>{
    const res = await api.get(`/get_solicitacao/dados`)
    return res;
}

export {requestAllServices}