import styled from "@emotion/styled";

const Subtitle = styled.div<{ color?: string }>`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
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
