import { getStandardDate } from "../../../utils/formatDate"


describe('Testing the date format that it should return',() =>{
    test('should return invalid date', () =>{
        const date = new Date('2021/01/31');
        const answer = '31/01/2021';
        expect(getStandardDate(date)).toEqual(answer);
    });

    test('should return valid date', () =>{
        const date = new Date("2021-01-31");
        const answer = '30/01/2021';
        expect(getStandardDate(date)).toEqual(answer);
    })

    test('should return null', ()=>{
        const date = new Date('2021-01/33');
        const answer = null;
        expect(getStandardDate(date)).toEqual(answer)
    });
})