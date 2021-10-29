import styled from "@emotion/styled";
import React from "react";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 80px;
  background: #fff;
  @media (min-width: 480px) {
  }
  @media (min-width: 1280px) {
  }
`;

const PageTitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #091131;
`;

const News: React.FC<IProps> = () => {
  return (
    <Root>
      <PageTitle>Новости</PageTitle>
    </Root>
  );
};
export default News;
