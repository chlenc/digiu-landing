import React from "react";
import styled from "@emotion/styled";
import WithBg from "@components/Background";
import Layout from "@components/Layout";

interface IProps {}

const Root = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 16px;
  @media (min-width: 480px) {
    padding: 64px 24px;
  }
`;
const Logo = styled.img`
  width: 84px;
  height: 28px;
  margin-bottom: 12px;
  @media (min-width: 480px) {
    width: 100px;
    height: 34px;
    margin-right: 40px;
    margin-bottom: 0;
  }
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  @media (min-width: 480px) {
    flex-direction: row;
    padding-bottom: 64px;
    align-items: center;
    justify-content: flex-start;
  }
`;
const SmallText = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 12px;
  text-align: center;
  color: #ffffff;
  max-width: 256px;
  @media (min-width: 480px) {
    max-width: 402px;
    text-align: start;
    font-size: 12px;
    line-height: 20px;
  }
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 710px;
  }

  .nav {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    margin-bottom: 16px;
    @media (min-width: 480px) {
      margin-bottom: 24px;
    }
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

const MainInfo = styled.div`
  max-width: 500px;
`;

const SecondaryInfo = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #7098ff;

  .buttom {
    display: flex;
    flex-direction: column;
    @media (min-width: 480px) {
      flex-direction: row;
      & > :first-of-type {
        margin-right: 40px;
      }
    }
  }
`;
const Text = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #7098ff;
  cursor: pointer;
  margin: 16px 0;
  max-width: 990px;
  @media (min-width: 480px) {
    text-align: start;
  }
`;
const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: flex-start;
  gap: 10px;
  padding: 64px 0;
  @media (min-width: 480px) {
    max-width: 300px;
    text-align: start;
  }
  @media (min-width: 1280px) {
    gap: 32px;
    padding: 0;
  }
`;
const SocialIcon = styled.img`
  max-width: 32px;
  max-height: 32px;
  cursor: pointer;
`;

const Footer: React.FC<IProps> = () => {
  return (
    <WithBg background="/images/bg3.jpg" position="bottom">
      <Root>
        <Wrapper>
          <div>
            <Top>
              <Logo src="/images/head/logo.png" alt="logo" />
              <SmallText>
                Разработка и финансирование проектов в области искусственного
                интеллекта и блок-чейн технологий
              </SmallText>
            </Top>
            <Navigation>
              <div>
                <div className="nav">Главная</div>
                <div className="nav">Новости</div>
                <div className="nav">Экосистема DigiU</div>
                <div className="nav">Блокчейн лаборотория</div>
              </div>
              <div>
                <div className="nav">Управление активами</div>
                <div className="nav">Разработки ИИ</div>
                <div className="nav">Венчурный фонд</div>
              </div>
            </Navigation>
          </div>
          <Links>
            <SocialIcon src="/images/footer/facebook.svg" alt="facebook" />
            <SocialIcon src="/images/footer/instagram.svg" alt="instagram" />
            <SocialIcon src="/images/footer/youtube.svg" alt="youtube" />
            <SocialIcon src="/images/footer/telegram.svg" alt="telegram" />
            <SocialIcon src="/images/footer/vk.svg" alt="vk" />
          </Links>
        </Wrapper>
        <SecondaryInfo>
          <Text>
            АНО “ЦифровойТЫ” ОГРН 1195476086740 ИНН 5405050584 630102,
            Новосибирск, ул. Кирова, 48, офис 701 Р/с 407038103000000712970 в АО
            “Тинькофф Банк” E-mail: info@digiu.ai Тел.: +7-383-258-13-99,
            +7-923-142-45-86
          </Text>
          <div className="buttom">
            <Text>Политика конфиденциальности</Text>
            <Text>Публичная оферта</Text>
          </div>
        </SecondaryInfo>
      </Root>
    </WithBg>
  );
};
export default Footer;
