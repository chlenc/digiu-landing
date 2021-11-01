import styled from "@emotion/styled";
import React from "react";
import Layout from "../../components/Layout";
import BackgroundWrapper from "@components/BackgroundWrapper";
import Button from "@components/Button";

interface IProps {}

const Root = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;
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
  color: #ffffff;
  margin-bottom: 16px;
  @media (min-width: 480px) {
    font-size: 40px;
    line-height: 56px;
    margin-bottom: 32px;
  }
`;

const Subtitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  margin-bottom: 40px;
  @media (min-width: 480px) {
    margin-bottom: 64px;
    font-size: 20px;
    line-height: 32px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 96px;
  }
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  width: 100%;
  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Community: React.FC<IProps> = () => {
  return (
    <BackgroundWrapper background="/images/laboratory/bg.png" position="bottom">
      <Root>
        <Title>Международное сообщество инвесторов DigiU.Partners</Title>
        <Subtitle>
          Комьюнити DigiU насчитывает 88 000 партнеров из 182 стран мира.
          DigiU.Partners помогает инвесторам разобраться в проекте, создает
          комьюнити, организовывает вебинары, конференции и помогает заниматься
          информационным продвижением проекта. Каждый партнер компании получает
          быструю обратную связь, ответы на интересующие вопросы, поддержку.
        </Subtitle>
        <Button>Получить консультацию</Button>
      </Root>
    </BackgroundWrapper>
  );
};
export default Community;
