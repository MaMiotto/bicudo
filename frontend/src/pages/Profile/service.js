import api from "../../services/api";

export const requestUserInfo = async (email) =>{
    const res = await api.get(`/get_usuario2/por_email?email=${email}`);
    return res; 
}

export const updateUserInfo = async (data) =>{
    const res = api.put(`/usuario/api_edita`, data);
    return res;
}