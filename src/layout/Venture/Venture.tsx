import styled from "@emotion/styled";
import { Column } from "@src/components/Flex";
import React from "react";
import Layout from "../../components/Layout";
import { useLang } from "@src/hooks/useLang";

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
`;
const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #091131;
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
  margin: 16px 34px 16px 0;
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

const Row = styled.div`
  display: flex;
  font-family: Montserrat;
  margin-bottom: 32px;

  @media (min-width: 480px) {
    margin-bottom: 40px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 44px;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 22px;
    @media (min-width: 480px) {
      width: 28px;
      height: 28px;
    }
  }

  .title {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 12px;
    @media (min-width: 480px) {
      font-size: 20px;
      line-height: 28px;
    }
    @media (min-width: 1280px) {
      max-width: 428px;
    }
  }

  .subtitle {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #989cb1;
    @media (min-width: 480px) {
      font-size: 16px;
      line-height: 24px;
      //margin-bottom: 40px;
    }
    @media (min-width: 1280px) {
      max-width: 428px;
      //margin-bottom: 44px;
    }
  }
`;
const Venture: React.FC<IProps> = () => {
  const { venture } = useLang();
  return (
    <Root id="venture">
      <Title>{venture.title}</Title>
      <Subtitle>{venture.subtitle}</Subtitle>
      <Container>
        <ImgContainer>
          <Img src="/images/venture/spots.png" alt="img" />
        </ImgContainer>
        <div>
          {[
            { title: venture.itemTitle1, subtitle: venture.itemText1 },
            { title: venture.itemTitle2, subtitle: venture.itemText2 },
            { title: venture.itemTitle3, subtitle: venture.itemText3 },
            { title: venture.itemTitle4, subtitle: venture.itemText4 },
          ].map((item) => (
            <Row key={item.title}>
              <img src="/done.svg" />
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
