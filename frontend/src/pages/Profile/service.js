import api from "../../services/api";

export const requestUserInfo = async (email) =>{
    const res = await api.get(`profile/${email}/api`);
    return res; 
}

export const updateUserInfo = async (data) =>{
    const res = api.put(`/profile/${data.email}/api`, {params: data});
    return res;
}

