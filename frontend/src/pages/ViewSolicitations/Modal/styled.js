import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 19px;
  color: "#223345";
  font-weight: 900;
  letter-spacing: 0px;
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
`;

export const Footer = styled.div`
  display: flex;
  width: 500px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  bottom: 0;
`;

export const RightFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CloseButton = styled(Button)`
  min-width: 15px !important;
  max-width: 15px !important;
  padding: 0px !important;
  border-radius: 50%;

  .MuiButton-startIcon {
    padding: 0px !important;
    margin: 0px !important;
  }
`;
