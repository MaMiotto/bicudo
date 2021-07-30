import { getGenderType } from "../../../utils/genderName";


test('get the Male', () =>{
    const answer = "Masculino";
    expect(getGenderType(0)).toEqual(answer);
})

test('test if gender is female', ()=>{
    const answer = "Feminina";
    expect(getGenderType(1)).toEqual(answer);
})