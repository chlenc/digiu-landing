import styled from "@emotion/styled";
import React from "react";

interface IProps {
  title: string;
  subtitle: string;
  img: string;
  url: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e2e8ff;
  border-radius: 10px;

  .icon {
    width: 48px;
    height: 48px;
    margin-bottom: 32px;
  }

  .title {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #091131;
    padding: 20px 0 12px;
  }

  .subtitle {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #989cb1;
    text-align: center;
  }

  @media (min-width: 480px) {
    //height: 346px;
    padding: 64px 12px;
    .icon {
      width: 64px;
      height: 64px;
    }

    .title {
      padding-bottom: 20px;
      font-size: 20px;
      line-height: 28px;
    }

    .subtitle {
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media (min-width: 1280px) {
    padding: 107px 24px;
  }
`;
const Star = styled.img`
  position: absolute;
  top: 10px;
  right: 5px;
  width: 40px;
  @media (min-width: 1280px) {
    width: 54px;
  }
`;

const Img = styled.img`
  width: 256px;
  padding: 28px 16px 0;
  cursor: pointer;
`;
const VideoItem: React.FC<IProps> = ({ title, subtitle, img, url }) => {
  return (
    <Root onClick={() => window.open(url, "_blank")}>
      <div style={{ position: "relative" }}>
        <Img src={img} alt="video" />
        <Star className="icon" src="images/ai/star.svg" alt={title} />
      </div>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </Root>
  );
};
export default VideoItem;
