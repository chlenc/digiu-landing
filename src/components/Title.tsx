import styled from "@emotion/styled";

const Title = styled.div<{ color?: string; textAlign?: string }>`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: url(${({ color }) => (color ? color : "#ffffff")});
  textalign: (${({ textAlign }) => (textAlign ? textAlign : "left")});
  padding: 16px 0;

  @media (min-width: 480px) {
    font-size: 40px;
    line-height: 56px;
    padding: 32px 0;
  }
`;
export default Title;
