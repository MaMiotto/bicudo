import { Grid } from '@material-ui/core';
import React from 'react';
import * as S from './styeld';
import InfoCard from '../../../components/InfoCards/InfoCard';


function Detail({data}){
    return (
      <>
        <S.Wrapper>
          <S.Title>O que é Bicudo ???</S.Title>
          <S.Info>
            Bicudo é uma plataforma de contratação de serviços do Brasil.
            Conectamos Profissionais de todo o Brasil com pessoas solicitando
            serviço, atendendo com qualidade, facilidade e rapidez todos os
            tipos de necessidade. No momento estamos focando em serviço de casa.
          </S.Info>
          <S.InfoWrapper>
            <S.InfoTitle>Como Funciona???</S.InfoTitle>
          </S.InfoWrapper>
          <Grid container spacing={2}>
            {data.map((item, index) => 
                <Grid key={index} item xs={3}>
                  <InfoCard
                     image={item.image}
                     number={index}
                     text={item.text}
                     title={item.title}
                  />
                </Grid>
            )}
          </Grid>
        </S.Wrapper>
      </>
    );
}


export default Detail;