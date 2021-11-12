import styled from "@emotion/styled";
import React from "react";

export type TStatisticsItem = {
  title: string | number;
  subtitle: string | number;
};

interface IProps {
  items: TStatisticsItem[];
}

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 24px;
  margin-top: 32px;
  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 64px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 80px;
    margin-top: 80px;
    max-width: fit-content;
  }
`;

const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  @media (min-width: 1280px) {
    text-align: left;
    font-size: 40px;
    font-weight: 400;
  }
`;
const Subtitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  white-space: pre-wrap;
  color: #ffffff;
  @media (min-width: 1280px) {
    text-align: left;
  }
`;

const StatisticsRow = styled.div`
  display: flex;
  flex-direction: column;
  & > :first-of-type {
    margin-bottom: 12px;
  }
  @media (min-width: 1280px) {
    width: fit-content;
  }
`;

const Statistics: React.FC<IProps> = ({ items }) => {
  return (
    <Root>
      {items.map(({ title, subtitle }) => (
        <StatisticsRow key={subtitle}>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </StatisticsRow>
      ))}
    </Root>
  );
};
export default Statistics;
