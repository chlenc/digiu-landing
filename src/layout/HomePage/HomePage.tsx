import Button from "../../components/Button";
import styled from "@emotion/styled";
import React from "react";
import Statistics from "./Statistics";
import Layout from "../../components/Layout";

interface IProps {}

const Root = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 40px;
  align-items: center;
  @media (min-width: 480px) {
    padding-bottom: 64px;
  }
  @media (min-width: 1280px) {
    padding-bottom: 140px;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 0;
  margin-top: 84px;
  @media (min-width: 480px) {
    font-size: 32px;
    line-height: 48px;
    margin-top: 128px;
  }
  @media (min-width: 1280px) {
    font-size: 40px;
    font-weight: 600;
    line-height: 64px;
    text-align: left;
    max-width: 1170px;
    margin-top: 212px;
  }
`;

const Subtitle = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-top: 24px;
  margin-bottom: 24px;
  @media (min-width: 480px) {
    font-size: 20px;
    line-height: 32px;
    margin-top: 24px;
    margin-bottom: 64px;
  }
  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 32px;
    text-align: left;
    margin-top: 32px;
    max-width: 792px;
  }
`;

const HomePage: React.FC<IProps> = () => {
  return (
    <Root>
      <Title>
        Экосистема разработки и финансирования проектов в области искусственного
        интеллекта и блокчейн технологий
      </Title>
      <Subtitle>
        Основным выгодоприобретателем от развития высоких технологий должен быть
        обычный человек.
      </Subtitle>
      <Button>Скачать концепцию</Button>
      <Statistics
        items={[
          { title: "10 147", subtitle: "Активных \nучастников экосистемы" },
          {
            title: "70 000",
            subtitle: "Численность комьюнити\nпо итогам 2021 года",
          },
          { title: "182", subtitle: "Стран, состоящих \nв экосистеме DigiU" },
          { title: "28", subtitle: "Количество проектов\nв портфеле" },
        ]}
      />
    </Root>
  );
};
export default HomePage;
