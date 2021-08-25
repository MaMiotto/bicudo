import { isValidDate } from "../../../utils/formatDate";


describe('Testing if a date is valid or not', () => {
    test('should return True', () =>{
        const date = new Date('2021/01/31');
        const answer = true;
        expect(isValidDate(date)).toEqual(answer)
    });

    test("should return False", () => {
      const date = new Date("2021/01/34");
      const answer = false;
      expect(isValidDate(date)).toEqual(answer);
    });
});