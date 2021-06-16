import styled from "styled-components";
import { Divider } from "@material-ui/core";


export const Wrapper = styled.div`
    margin: 5px 20px 5px 30px;
`

export const Title = styled.h1`
   font-size: 25px;
   color: #0080ff;
`

export const ImageWrapper = styled.div`
    margin:10px 0px 20px 0px;
`

export const Image = styled.img`
    display:block;
    margin-left: auto;
    margin-right: auto;
    width: 100px;
`

export const TextDivider = styled(Divider)`
    width: 60%;
    margin-left: 70px;
    background:  #0080ff;
` 

export const Info = styled.p`
    font-size: 15px;
    text-align:center;
    color: #505050;
    padding:0px 5px 0px 5px;
`

export const InfoTitle = styled.p`
  font-size: 15px;
  color: #505050;
  text-transform: uppercase;
  font-weight: bold;
`;