import React from 'react';
import * as S from './styled';


function InfoCard({image, text, number, title}){
    return (
        <S.Wrapper>
            <S.ImageWrapper>
                <S.Image src={image}/>
            </S.ImageWrapper>
            <S.TextDivider/>
            <S.InfoTitle>{`${number+1}. ${title}`}</S.InfoTitle>
            <S.Info>{text}</S.Info>
        </S.Wrapper>
    )
}

export default InfoCard;