
const gender = [
    {
        type: "Masculino",
        id: 0
    },
    {
        type:'Feminina',
        id: 1,
    }
]

const getGenderType = (genNum) =>{
    const value = gender.filter(item => item.id === genNum);
    return value[0].type
}

export {getGenderType}