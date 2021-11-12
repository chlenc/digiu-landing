import React from "react";
import styled from "@emotion/styled";

interface IBgProps {
  background: string;
  position: string;
}

const BackgroundWrapper = styled.div<IBgProps>`
  background: ${({ background, position }) =>
    `url(${background}) ${position ?? "center"} no-repeat`};
  background-size: cover;
  background-blend-mode: screen;
  width: 100%;

  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WithBg: React.FC<IBgProps> = ({ background, position, children }) => {
  return (
    <BackgroundWrapper background={background} position={position}>
      <Wrapper>{children}</Wrapper>
    </BackgroundWrapper>
  );
};

export default WithBg;
