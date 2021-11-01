import styled from "@emotion/styled";
import React from "react";
import Layout from "../../components/Layout";

interface IProps {}

const Root = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
  @media (min-width: 480px) {
    margin-bottom: 120px;
    margin-top: 120px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 160px;
    margin-top: 160px;
  }
`;

const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #091131;
  padding-bottom: 32px;
  @media (min-width: 480px) {
    font-size: 40px;
    line-height: 56px;
    padding-bottom: 64px;
    max-width: 849px;
  }
`;
const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  img {
    width: 64px;
    height: 64px;

    @media (min-width: 480px) {
      width: 150px;
      height: 150px;
    }
    @media (min-width: 1280px) {
      width: 100px;
      height: 100px;
    }
  }
`;

const Partners: React.FC<IProps> = () => {
  return (
    <Root>
      <Title>Партнеры экосистемы</Title>
      <Images>
        <img src="/images/partners/1.png" alt="partner" />
        <img src="/images/partners/2.png" alt="partner" />
        <img src="/images/partners/3.png" alt="partner" />
        <img src="/images/partners/4.png" alt="partner" />
        <img src="/images/partners/5.png" alt="partner" />
        <img src="/images/partners/6.png" alt="partner" />
      </Images>
    </Root>
  );
};
export default Partners;
