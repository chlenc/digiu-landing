import styled from "@emotion/styled";

const Subtitle = styled.div<{
  color?: string;
  alignItems?: string;
  fontSize?: string;
  textAlign?: string;
  lineHeight?: string;
}>`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  display: flex;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "12px")};
  lineheight: ${({ lineHeight }) => (lineHeight ? lineHeight : "20px")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "default")};
  color: ${({ color }) => (color ? color : "#ffffff")};
  padding: 16px 0;

  @media (min-width: 480px) {
    font-size: 20px;
    line-height: 32px;
    padding: 32px 0;
  }
  @media (min-width: 1280px) {
    padding-bottom: 64px;
  }
`;
export default Subtitle;
