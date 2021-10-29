import styled from "@emotion/styled";
import React from "react";
import { Column } from "@components/Flex";

interface IProps {
  items: TNewsItem[];
}

export type TNewsItem = {
  photo: string;
  date: string;
  title: string;
  description: string;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewsList: React.FC<IProps> = () => {
  return <Root></Root>;
};
export default NewsList;
