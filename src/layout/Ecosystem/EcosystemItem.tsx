import styled from "@emotion/styled";
import React from "react";

interface IProps {
  item: TEcosystemItem;
}

export type TEcosystemItem = {
  photo: string;
  title: string;
  description: string;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8ff;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 64px 24px;
  .icon {
    width: 48px;
    height: 48px;
    margin-bottom: 32px;
  }
  .title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #091131;
    margin-bottom: 12px;
    white-space: pre-wrap;
  }
  .subtitle {
    white-space: pre-wrap;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #989cb1;
  }

  @media (min-width: 480px) {
    padding: 104px 12px;
    .icon {
      width: 64px;
      height: 64px;
    }
    .title {
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
    width: 380px;
  }
`;

const EcosystemItem: React.FC<IProps> = ({
  item: { photo, title, description },
}) => {
  return (
    <Root>
      <img className="icon" src={photo} alt={title} />
      <div className="title">{title}</div>
      <div className="subtitle">{description}</div>
    </Root>
  );
};
export default EcosystemItem;
