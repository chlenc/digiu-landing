import styled from "@emotion/styled";
import React from "react";
import Layout from "../../components/Layout";
import BackgroundWrapper from "@components/BackgroundWrapper";
import Button from "@components/Button";
import Input from "@components/Input";

interface IProps {}

const Root = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  @media (min-width: 480px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  @media (min-width: 1280px) {
    padding-top: 160px;
    padding-bottom: 160px;
  }
`;

const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #091131;
  margin-bottom: 32px;
  width: 100%;
  @media (min-width: 480px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const Subtitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;
  color: #091131;
  @media (min-width: 480px) {
    font-size: 16px;
    line-height: 24px;
    max-width: 790px;
  }
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;

  @media (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
  }
`;
const Mailing: React.FC<IProps> = () => {
  return (
    <BackgroundWrapper background="#f3f9ff" isColor>
      <Root>
        <Title>Получайте новости первым!</Title>
        <Subtitle color="#091131">
          Подпишитесь на нашу рассылку, чтобы узнать больше о новых инвестициях,
          а так же секреты успешных стартапов и венчурных фондов.
        </Subtitle>
        <Form>
          <Input placeholder="E-mail" />
          <Button blue>Подписаться</Button>
        </Form>
      </Root>
    </BackgroundWrapper>
  );
};
export default Mailing;