import api from "../../services/api";

export const requestUserInfo = async (id) =>{
    const res = await api.get(`profile/${id}/api`);
    return res; 
}

export const updateUserInfo = async (data) =>{
    const res = api.put(`/profile/${data.id}/api`, {params: data});
    return res;
}

