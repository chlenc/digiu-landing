import styled from "@emotion/styled";
import React from "react";
import Layout from "../../components/Layout";
import Button from "@components/Button";
import BackgroundWrapper from "@components/BackgroundWrapper";

interface IProps {}

const Root = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
  background: #f3f9ff;
  @media (min-width: 480px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  @media (min-width: 1280px) {
    padding-top: 160px;
    padding-bottom: 80px;
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

const BecomeInvestor: React.FC<IProps> = () => {
  return (
    <BackgroundWrapper background="#F3F9FF" isColor>
      <Root>
        <Title>
          Станьте совладельцем сотен стартапов в области блокчейн и ИИ
        </Title>
        <Button
          onClick={() => (window.location.href = "google.com")}
          background="#316bff"
          color="#ffffff"
        >
          Стать инвестором DigiU
        </Button>
      </Root>
    </BackgroundWrapper>
  );
};
export default BecomeInvestor;
