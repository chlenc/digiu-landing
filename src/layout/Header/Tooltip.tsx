import styled from "@emotion/styled";
import React from "react";

interface IProps {}

const Root = styled.div<{ isShown?: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 6px 2px rgba(23, 47, 100, 0.06);
  border-radius: 8px;
`;

const Tooltip: React.FC<IProps> = ({}) => {
  return <Root></Root>;
};
export default Tooltip;
