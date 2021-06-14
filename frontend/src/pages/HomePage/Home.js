import React from 'react';
import ImageContent from '../../components/Image';
import Worker from '../../images/worker.jpg';
import bicudo from '../../images/bicudo.png';
import * as S from './styled';
import SimpleText from '../../components/TextDisplay/SimpleText';

function Home(){

    const textObject = [
        {
            text: 'Profissionais Capazes e Verificados',
            image:  bicudo,
        },
        {
            text: 'Pagemento online ou na hora do Serviço',
            image: bicudo,
        },
        {
            text: 'Serviço Garantidio pelos Profissionais',
            image: bicudo,
        }
    ]

    return(
        <S.Container>
            <S.GridContent container spacing={2}>
                <S.GridItem item xs={6}> 
                    <S.GridItems container spacing={1}>
                        <S.GridItems item xs={12}>
                            <S.Title>Uma nova Forma De Contratar Profissionais<br></br>
                                    Sem Sair de Casa
                            </S.Title>
                        </S.GridItems>
                        <S.GridItems item xs={12}>
                            <S.Text>
                                Quer entender como a gente funcionar ???<br></br>
                                <S.TextButton>Clicar Aqui</S.TextButton>
                            </S.Text>
                        </S.GridItems>
                        {textObject.map((item, index)=>
                           <S.GridItems  item xs={4} key={index}>
                               <SimpleText text={item.text} image={item.image} />
                           </S.GridItems>    
                        )}
                    </S.GridItems>
                </S.GridItem>
                <S.GridItem  item xs={6}>
                    <ImageContent
                      image={Worker}
                    />
                </S.GridItem>
            </S.GridContent>
        </S.Container>
    )
}

export default Home;