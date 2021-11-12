import styled from "@emotion/styled";
import React from "react";

interface IProps {
  icon: string;
  text: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  @media (min-width: 480px) {
    width: 64px;
    height: 64px;
    margin-bottom: 24px;
  }
`;

const Text = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  white-space: pre-wrap;
  @media (min-width: 480px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (min-width: 1280px) {
    text-align: left;
    max-width: 328px;
  }
`;

const AdvantageItem: React.FC<IProps> = ({ icon, text }) => {
  return (
    <Root>
      <Icon src={icon} alt="icon" />
      <Text>{text}</Text>
    </Root>
  );
};
export default AdvantageItem;
