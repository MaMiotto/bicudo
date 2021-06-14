import React from 'react';
import * as S from './styled';


function SimpleText({text,image}){
    return(
        <S.Container>
            <S.Text>{text}</S.Text>
            <S.TextDivider/>
            <S.Image src={image}/>
        </S.Container>
    )
}

export default SimpleText;