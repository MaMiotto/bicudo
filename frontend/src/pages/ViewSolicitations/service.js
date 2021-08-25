import api from "../../services/api"

const requestAllServices = async () =>{
    const res = await api.get(`/get_solicitacao/dados?id_cliente=2`);
    return res;
}

const updateStatus = async (id, status, agendamento) =>{
    const params = new URLSearchParams({
      id_solicitacao: id,
      novo_status: status,
      novo_agendamento: agendamento,
    }).toString()
    const url = "/altera_status/alterar?" + params;
    const res = await api.put(url)
    return res;
}

export {requestAllServices, updateStatus}