import styled from "@emotion/styled";
import React from "react";
import Layout from "../../components/Layout";
import { useLang } from "@src/hooks/useLang";

interface IProps {}

const Root = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
  @media (min-width: 480px) {
    margin-bottom: 120px;
    margin-top: 120px;
  }
`;

const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #091131;
  padding-bottom: 32px;
  @media (min-width: 480px) {
    font-size: 40px;
    line-height: 56px;
    padding-bottom: 64px;
    max-width: 849px;
  }
`;
const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (min-width: 480px) {
    gap: 64px;
    width: 100%;
  }

  @media (min-width: 789px) {
    display: flex;
    grid-template-columns: none;
    justify-content: center;
  }

  .hide {
    @media (min-width: 480px) {
      display: none;
    }
    @media (min-width: 1280px) {
      display: none;
    }
  }

  .big {
    width: 175px;
    height: 175px;
    margin-top: -40px;

    @media (min-width: 480px) {
      width: 220px;
      height: 220px;
      margin-top: -40px;
    }
  }

  img {
    width: 64px;
    height: 64px;

    @media (min-width: 480px) {
      width: 150px;
      height: 150px;
    }
    @media (min-width: 1280px) {
      width: 100px;
      height: 100px;
    }
  }
`;

const Partners: React.FC<IProps> = () => {
  const { partners } = useLang();
  return (
    <Root>
      <Title>{partners.title}</Title>
      <Images>
        <img src="/images/partners/1.png" alt="partner" />
        <img src="/images/partners/2.png" alt="partner" />
        <img src="/images/partners/3.png" alt="partner" />
        <img src="/images/partners/4.png" alt="partner" />
      </Images>
    </Root>
  );
};
export default Partners;
