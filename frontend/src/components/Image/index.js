import React from 'react';
import * as S from './styled';


function ImageContent({image}){
    return (
        <S.Container>
            <S.Image
                src={image}
            />
        </S.Container>
    )
}

export default ImageContent;