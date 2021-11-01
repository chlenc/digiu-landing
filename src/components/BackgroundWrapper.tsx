import styled from "@emotion/styled";

const BackgroundWrapper = styled.div<{
  background: string;
  position?: "top" | "right" | "left" | "bottom" | "center";
  isColor?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ isColor, background, position }) =>
    isColor
      ? background
      : `url(${background}) ${position ?? "center"} no-repeat`};
  background-size: cover;
  width: 100%;
`;
export default BackgroundWrapper;
