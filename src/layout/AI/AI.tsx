import styled from "@emotion/styled";
import React from "react";
import Layout from "../../components/Layout";
import BackgroundWrapper from "@components/BackgroundWrapper";
import Subtitle from "@components/Subtitile";
import TechnologyItem from "@layout/AI/TechnologyItem";

interface IProps {}

const Root = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
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

const PageTitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  margin-bottom: 32px;
  width: 100%;
  @media (min-width: 480px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const EcosystemList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  @media (min-width: 480px) {
    gap: 28px;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1280px) {
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const cards = [
  {
    title: "DigiU.Voice",
    subtitle:
      "Запатентованная технология клонирования речи. \nDigiU.Voice трансформирует текст в речь с помощью ИИ-технологии text-to-speech, позволяет воспроизводить интонации, акценты и паузы конкретного человека.",
  },
  {
    title: "DigiU.Vision",
    subtitle:
      "DigiU.Vision технология компьютерного зрения позволяющая различать пердметы, возраст, эмоции людей. ",
  },
  {
    title: "DigiU.Prophert",
    subtitle:
      "Технология предективной аналитики позволяющая предсказывать движение рынка с использовнием нейросетей.",
  },
];

const TechnologiesList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  @media (min-width: 480px) {
    gap: 28px;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1280px) {
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const AI: React.FC<IProps> = () => {
  return (
    <BackgroundWrapper background="/images/ai/bg.png" position="bottom">
      <Root>
        <PageTitle>Разработки в области ИИ</PageTitle>
        <Subtitle>
          Лаборатория ИИ включает в себя такие области разработки, как речевые
          технологии и обработка естественного языка, компьтерное зрение,
          предиктивная аналитика. Каждая область разработок являюется
          автономными сервисами и приложениями, которые имеют высокий потенциал
          взрывного роста в количестве пользователей и капитализации.
        </Subtitle>
        <TechnologiesList>
          {cards.map((item) => (
            <TechnologyItem {...item} key={item.title} />
          ))}
        </TechnologiesList>
      </Root>
    </BackgroundWrapper>
  );
};
export default AI;
