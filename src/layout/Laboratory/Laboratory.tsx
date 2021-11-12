import styled from "@emotion/styled";
import React from "react";
import Layout from "../../components/Layout";
import BackgroundWrapper from "@components/BackgroundWrapper";
import AdvantageItem from "@layout/Laboratory/AdvantageItem";

interface IProps {}

const Root = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
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
    margin-bottom: 80px;
    max-width: 1048px;
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

const Laboratory: React.FC<IProps> = () => {
  return (
    <BackgroundWrapper background="/images/laboratory/bg.png" position="bottom">
      <Root>
        <PageTitle>Блокчейн лаборатория</PageTitle>
        <Subtitle>
          Разработкой блокчейн проектов занимается подразделение DigiU.Lab
          Области деятельности подразделения лежат в исследовании блокчейна ,
          создании собственной DeFi экостистемы, разработки продуктов. Основным
          проектом блокчейн лаборатории является Eywa.Finance - кроссчейн
          протокол передачи данных и ликвидности.
        </Subtitle>
        <AdvantagesGrid>
          {[
            {
              text: "Участник и призер \nмеждународных Хакатонов",
              icon: "/images/laboratory/medal.svg",
            },
            {
              text: "Eywa.Finance - первый продукт на \nстадии альфа-тестирования",
              icon: "/images/laboratory/eywa.svg",
            },
            {
              text: "В проекты лаборатории \nинвестируют международные венчурные фонды ",
              icon: "/images/laboratory/investment.svg",
            },
          ].map((item) => (
            <AdvantageItem key={item.text} {...item} />
          ))}
        </AdvantagesGrid>
      </Root>
    </BackgroundWrapper>
  );
};
export default Laboratory;
