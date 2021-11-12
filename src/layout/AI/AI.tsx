import styled from "@emotion/styled";
import React from "react";
import Layout from "../../components/Layout";
import WithBg from "@components/Background";
import Subtitle from "@components/Subtitile";
import TechnologyItem from "@layout/AI/TechnologyItem";
import { useLang } from "@src/hooks/useLang";

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
  const { ai } = useLang();
  return (
    <WithBg background="/images/head/bg.png" position="center top">
      <Root id="ai">
        <PageTitle>{ai.title}</PageTitle>
        <Subtitle>{ai.subtitle}</Subtitle>
        <TechnologiesList>
          {[
            {
              title: ai.itemTitle1,
              img: "/images/ai/voice.png",
              subtitle: ai.itemText1,
            },
            {
              title: ai.itemTitle2,
              img: "/images/ai/vision.png",
              subtitle: ai.itemText2,
            },
            {
              title: ai.itemTitle3,
              img: "/images/ai/prophert.png",
              subtitle: ai.itemText3,
            },
          ].map((item) => (
            <TechnologyItem {...item} key={item.title} />
          ))}
        </TechnologiesList>
      </Root>
    </WithBg>
  );
};
export default AI;
