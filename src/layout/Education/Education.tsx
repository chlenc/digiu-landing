import styled from "@emotion/styled";
import React from "react";
import Layout from "../../components/Layout";
import Subtitle from "@components/Subtitile";
import VideoItem from "@layout/Education/VideoItem";
import Button from "@components/Button";
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
  text-align: center;
  @media (min-width: 480px) {
    font-size: 40px;
    line-height: 48px;
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
const FreeVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 80px 17px;
  width: 100%;
  margin-top: 20px;
  overflow: hidden;
  margin: 80px 0;
  background: url("/images/head/bg.png") bottom no-repeat;

  img {
    width: 100%;
  }

  @media (min-width: 1280px) {
    margin-top: 120px;
    flex-direction: row;
  }
`;

const VideoCaption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;
const Text = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  margin-bottom: 32px;
  text-align: center;
  @media (min-width: 480px) {
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 40px;
  }
  @media (min-width: 1280px) {
    text-align: start;
    max-width: 500px;
  }
`;

const SmallBtn = styled(Button)`
  @media (min-width: 1280px) {
    display: none;
  }
`;
const BigBtn = styled(Button)`
  display: none;
  @media (min-width: 1280px) {
    display: inline;
  }
`;

const Education: React.FC<IProps> = () => {
  const { education } = useLang();
  return (
    <Root>
      <Title>{education.title}</Title>
      <Subtitle color="#989CB1" textAlign="center">
        {education.subtitle}
      </Subtitle>
      <TechnologiesList>
        {[
          {
            title: education.itemTitle1,
            subtitle: education.itemText1,
            img: "/images/education/vc-big.png",
            url: "https://education.digiu.ai/course/view?id=1",
          },
          {
            title: education.itemTitle2,
            subtitle: education.itemText2,
            img: "/images/education/crypto-intro.png",
            url: "https://education.digiu.ai/course/view?id=1",
          },
          {
            title: education.itemTitle3,
            subtitle: education.itemText3,
            img: "/images/education/crypto-currency.png",
            url: "https://education.digiu.ai/course/view?id=1",
          },
        ].map((item) => (
          <VideoItem {...item} key={item.title} />
        ))}
      </TechnologiesList>
      <FreeVideo>
        <VideoCaption>
          <Text>{education.freeCource}</Text>
          <BigBtn
            onClick={() =>
              (window.location.href =
                "https://education.digiu.ai/course/view?id=1")
            }
          >
            {education.button}
          </BigBtn>
        </VideoCaption>

        <div style={{ position: "relative" }}>
          <img src="/images/education/vc-big.png" alt="venture-capital" />
          <PlayBtn />
        </div>
        <SmallBtn
          style={{ marginTop: 32 }}
          onClick={() =>
            (window.location.href =
              "https://education.digiu.ai/course/view?id=1")
          }
        >
          {education.button}
        </SmallBtn>
      </FreeVideo>
    </Root>
  );
};
export default Education;
const BtnWrapper = styled.div`
  position: absolute;
  top: calc(50% - 24px);
  right: calc(50% - 24px);
`;
const PlayBtn = () => (
  <BtnWrapper>
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
    >
      <circle cx="24" cy="24" r="24" fill="white" />
      <path d="M34 24L19 32.6603L19 15.3397L34 24Z" fill="#6584FF" />
    </svg>
  </BtnWrapper>
);
