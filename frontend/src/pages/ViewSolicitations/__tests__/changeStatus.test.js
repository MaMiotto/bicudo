import { changeStatus } from "../../../utils/changeStatus";

describe('Testing the output of each status', () =>{
    test('should return Aberto', () => {
        const answer = <p style={{color: 'blue', fontSize: '15px'}}>Aberto</p>;
        expect(changeStatus(1)).toEqual(answer)
    })

    test("should return Agendado", () => {
       const answer = <p style={{ color: "DimGrey", fontSize: "15px" }}>Agendado</p>;
       expect(changeStatus(2)).toEqual(answer);
    });

    test("should return Confirmado", () => {
       const answer = <p style={{ color: "green", fontSize: '15px' }}>Confirmado</p>;
       expect(changeStatus(3)).toEqual(answer);
    });

    test("should return Finalizado", () => {
       const answer = <p style={{ color: "#008B8B", fontSize: "15px" }}>Finalizado</p>;
       expect(changeStatus(4)).toEqual(answer);
    });

    test("should return Recusado", () => {
       const answer = <p style={{ color: "red", fontSize: "15px" }}>Recusado</p>;
       expect(changeStatus(5)).toEqual(answer);
    });

    test("should return empty string", () => {
      const answer = ''
      expect(changeStatus(10)).toEqual(answer);
    });

})