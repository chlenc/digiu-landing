import styled from "@emotion/styled";
import React from "react";

interface IProps {
  item: TNewsItem;
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

const Image = styled.img`
  width: 100%;
  height: 180px;
  margin-bottom: 16px;
  border-radius: 10px;
  object-fit: cover;
  @media (min-width: 480px) {
    width: 380px;
    height: 200px;
  }
`;

const Date = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;
  color: #989cb1;
  margin-bottom: 12px;
`;

const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #091131;
  margin-bottom: 12px;
`;

const Description = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #989cb1;
`;

const NewsItem: React.FC<IProps> = ({
  item: { photo, title, description, date },
}) => {
  return (
    <Root>
      <Image src={photo} alt={title} />
      <Date>{date}</Date>
      <Title>{date}</Title>
      <Description>{description}</Description>
    </Root>
  );
};
export default NewsItem;
