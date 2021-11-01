import styled from "@emotion/styled";
import React from "react";
import Layout from "../../components/Layout";

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
const Subtitle = styled.div<{ color?: string }>`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: ${({ color }) => (color ? color : "#ffffff")};
  padding: 16px 0;

  @media (min-width: 480px) {
    font-size: 20px;
    line-height: 32px;
    padding: 32px 0;
  }
  @media (min-width: 1280px) {
    padding-bottom: 64px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 130px;
    flex-direction: row;
  }
`;
const Img = styled.img`
  width: 264px;
  @media (min-width: 480px) {
    width: 640px;
    padding-bottom: 64px;
  }
`;

const items = [
  "Пассивный заработок  на рынке DeFi",
  "Минимизация риска  за счет\n независимых аудитов смарт-контрактов",
  "Доходность более 30%  годовых в USDT",
];
const Row = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 28px;
    height: 28px;
    padding-right: 12px;
  }

  span {
    font-size: 12px;
    line-height: 20px;
    padding: 16px 0;

    @media (min-width: 480px) {
      padding: 20px 0;
      font-size: 20px;
      line-height: 28px;
    }
    @media (min-width: 1280px) {
      padding: 32px 0;
      max-width: 428px;
    }
  }
`;
const Management: React.FC<IProps> = () => {
  return (
    <Root>
      <PageTitle>Управление активами</PageTitle>
      <Subtitle>
        DigiU.Wealth - инвестиционный продукт экосистемы , приносящий
        ежемесячную прибыль без риска просадки депозита в ETH, BTC, USDT с
        октября 2020 года.
      </Subtitle>
      <Container>
        <Img src="/images/management/microwave.png" alt="microwave" />

        <div>
          {items.map((item) => (
            <Row key={item}>
              <img src="/radioBtn.svg" />
              <span>{item}</span>
            </Row>
          ))}
        </div>
      </Container>
    </Root>
  );
};
export default Management;