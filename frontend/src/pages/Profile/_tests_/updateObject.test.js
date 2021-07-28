import { updateObject } from "../../../utils/createUpdateObject";

test('return validated data', ()=>{
    const data = {
        email: 'james@gmail.com',
        dob: '2021-04-04',
        sex:  0,
        nome: "james Henry",
        cpf:'99999999999',
        bairro: 'sao francisco',
        log:  4,
        num: 4,
        cidade: 'belo horizonte',
        cep: 219324,
        telefone:'123456'
    }

    const acceptedDAta = {
        first_name: "james",
        last_name: 'Henry',
        sex:  0,
        data_nascimento: '2021-04-04',
        cpf:'99999999999',
        bairro: 'sao francisco',
        cidade: 'belo horizonte',
        logradouro:  4,
        numero: 4,
        cep: 219324,
        email: 'james@gmail.com',
        telefone:'123456',
    }

    expect(JSON.stringify(updateObject(data))).toEqual(JSON.stringify(acceptedDAta))
});