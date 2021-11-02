import styled from "@emotion/styled";

const Input = styled.input`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #989cb1;
  background: #ffffff;
  border: 1px solid #e2e8ff;
  box-sizing: border-box;
  border-radius: 10px;
  height: 48px;
  padding: 0 16px;
  margin: 16px 0;
  width: 100%;

  @media (min-width: 480px) {
    margin: 32px 0;
  }
  @media (min-width: 1280px) {
    height: 60px;
  }
`;
export default Input;
