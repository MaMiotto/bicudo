import styled from 'styled-components';
import { Grid, Button }  from '@material-ui/core';

export const Title = styled.h1`
   font-size: 30px;
   color:  #0080ff;
   margin: 20px 0px 40px 1px;
`

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 20px
`

export const Header = styled.div`
   
`

export const GridContent = styled(Grid)`

`

export const GridItem = styled(Grid)`

`

export const Text = styled.p`
    font-size: 18px;
    font-weigth:bold;
    margin: 20px 0px 75px 5px;
`

export const TextButton = styled(Button)`
    color: #ffffff;
    background: #0080ff;

`

export const Footer = styled.div`
   display: flex;
   flex-direction: row;
`

export const FooterText = styled.p`
   left: 0px;
   font-size: 15px;

`