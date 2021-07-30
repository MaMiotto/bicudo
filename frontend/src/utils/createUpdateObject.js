import * as Yup from 'yup';

const updateObject = (data) =>{
    const {nome, sex, dob, cpf, bairro, cidade, log, num, cep, email, telefone, id} = data
    const newObject = {}
    const newNmae = nome.split(" ");
    newObject.first_name = newNmae[0];
    newObject.last_name = newNmae[1];
    newObject.sex = sex;
    newObject.data_nascimento = dob;
    newObject.cpf = cpf;
    newObject.bairro = bairro;
    newObject.cidade = cidade;
    newObject.logradouro = log;
    newObject.numero = num;
    newObject.cep = cep;
    newObject.email = email;
    newObject.telefone = telefone;
    newObject.id = id;
    return newObject
}

export {updateObject}