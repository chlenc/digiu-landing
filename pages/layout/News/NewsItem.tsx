import styled from "@emotion/styled";
import React from "react";
import { TNewsItem } from "./NewsList";

interface IProps {
  item: TNewsItem;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img``;

const NewsItem: React.FC<IProps> = ({
  item: { photo, title, description, date },
}) => {
  return (
    <Root>
      <Image src={photo} alt={title} />
    </Root>
  );
};
export default NewsItem;
