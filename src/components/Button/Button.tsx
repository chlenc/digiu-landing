import styled from "@emotion/styled";

const Button = styled.button<{
  blue?: boolean;
}>`
  background: ${({ blue }) => (blue ? "#316bff" : "#ffffff")};
  // color: ${({ blue }) => (blue ? "#ffffff" : "#316bff")};
  border-radius: 10px;
  height: 48px;
  max-width: 100%;
  width: 100%;
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #091131;

  @media (min-width: 480px) {
    height: 60px;
    max-width: 380px;
    font-size: 16px;
  }
`;
export default Button;
