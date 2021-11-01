import styled from "@emotion/styled";
import { Column } from "@src/components/Flex";
import React from "react";
import Layout from "../../components/Layout";

interface IProps {}

const Root = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  //align-items: center;
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
const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #091131;
  margin-bottom: 32px;
  width: 100%;
  text-align: left;
  @media (min-width: 480px) {
    font-size: 40px;
    line-height: 48px;
    max-width: 624px;
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
  color: url(${({ color }) => (color ? color : "#ffffff")});
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

const ImgContainer = styled.div`
  position: relative;
  width: 264px;
  height: 312px;
  margin-bottom: 32px;
  margin-right: 34px;
  @media (min-width: 980px) {
    max-width: 640px;
    margin-right: 140px;
    width: 640px;
    height: 720px;
    margin-bottom: 64px;
  }
  @media (min-width: 1280px) {
    margin-right: 0px;
  }
`;

const Img = styled.img`
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 264px;
  @media (min-width: 980px) {
    width: 640px;
  }
`;

const items = [
  {
    title: "Эдвайзерство и акселерация",
    subtitle: "Технологическая и продуктовая  экспертиза",
  },
  {
    title: "Финансирование",
    subtitle: "Предоставляем бизнес-ангельские инвестиции",
  },
  {
    title: "Фандрайзинг",
    subtitle: "Помощь в привлечении дополнительных\n источников финансирования",
  },
  { title: "Маркетинг", subtitle: "Рекламно-информационная поддержка" },
];
const Row = styled.div`
  display: flex;

  img {
    width: 28px;
    height: 28px;
    padding-right: 12px;
  }

  .title {
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 12px;
    @media (min-width: 480px) {
      font-size: 20px;
      line-height: 28px;
    }
    @media (min-width: 1280px) {
      margin-bottom: 20px;
      max-width: 428px;
    }
  }
  .subtitle {
    font-size: 12px;
    line-height: 18px;
    color: #989cb1;
    margin-bottom: 32px;
    @media (min-width: 480px) {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 40px;
    }
    @media (min-width: 1280px) {
      max-width: 428px;
      margin-bottom: 44px;
    }
  }
`;
const Venture: React.FC<IProps> = () => {
  return (
    <Root>
      <Title>Международный венчурный фонд для IT-Стартапов</Title>
      <Subtitle>
        DigiU сопровождает IT-стартапы на всех этапах роста, помогает не только
        в развитии продукта, стратегии вывода продукта на рынок и продаж, но
        также в выходе на стратегических партнеров и привлечении инвесторов на
        следующих раундах.
      </Subtitle>
      <Container>
        <ImgContainer>
          <Img src="/images/venture/spots.png" alt="img" />
        </ImgContainer>
        <div>
          {items.map((item) => (
            <Row key={item.title}>
              <img src="/radioBtn.svg" />
              <Column>
                <div className="title">{item.title}</div>
                <div className="subtitle">{item.subtitle}</div>
              </Column>
            </Row>
          ))}
        </div>
      </Container>
    </Root>
  );
};
export default Venture;
