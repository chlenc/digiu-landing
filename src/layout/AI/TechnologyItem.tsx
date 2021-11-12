import styled from "@emotion/styled";
import React from "react";

interface IProps {
  title: string;
  subtitle: string;
  img: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #ffffff;
  border: 1px solid #e2e8ff;
  border-radius: 10px;
  height: 288px;

  .icon {
    width: 48px;
    height: 48px;
    margin-bottom: 32px;
  }

  img {
    margin-bottom: 16px;
  }

  .title {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #091131;
    padding-bottom: 12px;
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
    height: 346px;
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
    padding: 32px 24px;
    height: 380px;
  }
`;
const Star = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
`;
const TechnologyItem: React.FC<IProps> = ({ title, subtitle, img }) => {
  return (
    <Root>
      {/* <Star className="icon" src="images/ai/star.svg" alt={title} />
       */}
      <img src={img} />
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </Root>
  );
};
export default TechnologyItem;
