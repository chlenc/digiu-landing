import styled from "@emotion/styled";
import React from "react";
import Layout from "../../components/Layout";
import Subtitle from "@components/Subtitile";
import VideoItem from "@layout/Education/VideoItem";

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

const cards = [
  {
    title: "Курс “Как стать венчурным инвестором” ",
    subtitle: "Бесплатный курс для новичков в мире венчурных инвестиций ",
    img: "/images/education/venture-capital.png",
    url: "",
  },
  {
    title: "Курс “Введение в криптовалюту”",
    subtitle:
      "Бесплатный вводный  курс для тех, кто хочет начать зарабатывать на криптовалютном рынке",
    img: "/images/education/crypto-intro.png",
    url: "",
  },
  {
    title: "Курс “Криптовалюты 2.0 DeFi”",
    subtitle:
      "Получите практические навыки заработка на крипторынке всего за 8 уроков .",
    img: "/images/education/crypto-currency.png",
    url: "",
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
const Education: React.FC<IProps> = () => {
  return (
    <Root>
      <Title>Образовательные программы</Title>
      <Subtitle color="#989CB1" textAlign="center">
        Образовательная платформа DigiU.Education предоставляет возможность всем
        желающим получать платное и бесплатное образование в сфере финансов,
        инвестиций, DeFi.
      </Subtitle>
      <TechnologiesList>
        {cards.map((item) => (
          <VideoItem {...item} key={item.title} />
        ))}
      </TechnologiesList>
    </Root>
  );
};
export default Education;
