import styled from "@emotion/styled";
import React from "react";
import Layout from "@components/Layout";
import EcosystemItem from "./EcosystemItem";

interface IProps {}

const Root = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
  background: #fff;
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
  color: #091131;
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

const Ecosystem: React.FC<IProps> = () => {
  return (
    <Root>
      <PageTitle>Экосистема DigiU</PageTitle>
      <EcosystemList>
        {[
          {
            photo: "/images/ecosystem/blockchain.svg",
            title: "Блокчейн лаборатория",
            description:
              "Разработка проектов \nв области блок-чейн технологий.",
          },
          {
            photo: "/images/ecosystem/statistics.svg",
            title: "Управление активами",
            description: "Доверительное управление \nкриптоактивами",
          },
          {
            photo: "/images/ecosystem/ai.svg",
            title: "Лаборатория ИИ",
            description:
              "Разработка проектов \nв области искуственного интеллекта.",
          },
          {
            photo: "/images/ecosystem/leaves.svg",
            title: "Венчурный фонд",
            description:
              "Инвестиции в технологии \nи проекты в области ИИ \nи блок-чейна.",
          },
          {
            photo: "/images/ecosystem/group.svg",
            title: "Международное сообщество \nинвесторов",
            description: "Финансирование и информационное\nпродвижение проекта",
          },
          {
            photo: "/images/ecosystem/education.svg",
            title: "Образовательная платформа",
            description:
              "Онлайн образование в сфере \nвенчурного инвестирования, \nDeFi, блокчейн и криптовалют",
          },
        ].map((item) => (
          <EcosystemItem key={item.description} item={item} />
        ))}
      </EcosystemList>
    </Root>
  );
};
export default Ecosystem;
