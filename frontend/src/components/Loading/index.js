import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const Progress = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  svg {
    color: ${(props) => props.color || "#2E324050"};
  }
`;

export default function CircularIndeterminate({ color }) {
  return (
    <Progress>
      <CircularProgress color={color} />
    </Progress>
  );
}
