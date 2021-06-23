import styled from "styled-components";
import { Divider } from "@material-ui/core";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 10px 20px 5px;
    border: 1px solid rgba(0,0,0,.1);
    box-sizing: border-box;
    border-radius: 5px;
    height: 70%;
`;

export const Text = styled.p`
    font-size: 15px;
    color: #2d2a32;
    font-weight: bold;
    padding: 10px 5px 0px 10px;
`

export const Image = styled.img`
    height:  70px;
    weight:  0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const TextDivider = styled(Divider)`
    width: 20%;
    margin-left: 15px;
    background:  #0080ff;
    margin-bottom: 10px;
`