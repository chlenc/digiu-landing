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
  justify-content: center;
  background: #ffffff;
  border: 1px solid #e2e8ff;
  border-radius: 10px;
  padding: 16px;

  .icon {
    width: 40px;
    height: 40px;
  }

  .title {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #091131;
    text-align: center;
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
    padding-bottom: 32px;
  }

  @media (min-width: 480px) {
    .icon {
      width: 54px;
      height: 54px;
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
`;
const Img = styled.img`
  width: calc(100% - 32px);
  padding-top: 40px;
  cursor: pointer;

  @media (min-width: 610px) {
    max-width: 270px;
    width: calc(100% - 76px);
  }
`;
const VideoItem: React.FC<IProps> = ({ title, subtitle, img, url }) => {
  return (
    <Root onClick={() => window.open(url, "_blank")}>
      <Img src={img} alt="video" />
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </Root>
  );
};
export default VideoItem;
