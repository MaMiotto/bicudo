import React from 'react';
import ImageContent from '../../components/Image';
import Worker from '../../images/bicudo1.jpg';
import * as S from './styled';
import SimpleText from '../../components/TextDisplay/SimpleText';
import { Divider } from '@material-ui/core';
import Detail from './Detail';
import { textObject, infoTexts } from './constants';

function Home(){
    return (
      <>
        <S.Container>
          <S.GridContent container spacing={2}>
            <S.GridItem item xs={6}>
              <S.GridItem container spacing={1}>
                <S.GridItem item xs={12}>
                  <S.Title>
                    Uma Nova Forma De Contratar Profissionais<br></br>
                    Sem Sair de Casa
                  </S.Title>
                </S.GridItem>
                <S.GridItem item xs={12}>
                  <S.Text>
                    Conectando quem precisa com quem sabe fazer.<br></br>
                    Fale o que precisa, receba até 4 orçamentos, escolha o
                    melhor.
                  </S.Text>
                </S.GridItem>
                {textObject.map((item, index) => (
                  <S.GridItem item  xs={12}  md={4} key={index}>
                    <SimpleText text={item.text} image={item.image} />
                  </S.GridItem>
                ))}
              </S.GridItem>
            </S.GridItem>
            <S.GridItem item xs={6} md={6}>
              <ImageContent image={Worker} />
            </S.GridItem>
          </S.GridContent>
          <Divider />
          <Detail data={infoTexts} />
          <Divider />
        </S.Container>
        <S.Footer>
          <S.FooterText>© 2021 Bicudo</S.FooterText>
        </S.Footer>
      </>
    );
}

export default Home;