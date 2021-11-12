import styled from "@emotion/styled";
import React from "react";
import NewsItem from "./NewsItem";
import Layout from "../../components/Layout";
import { useLang } from "@src/hooks/useLang";

interface IProps {}

const Root = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 80px;
  background: #fff;
  overflow: scroll;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
  @media (min-width: 480px) {
    padding-top: 120px;
  }
`;

const PageTitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #091131;
  margin-bottom: 32px;
  width: 100%;

  @media (min-width: 480px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 32px;
  }

  & > :last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 480px) {
    max-width: calc(100% + 48px);
    flex-direction: row;

    & > :first-of-type {
      margin-left: 24px;
    }

    & > * {
      margin-bottom: 0;
      margin-right: 30px;
    }

    & > :last-of-type {
      margin-right: 24px;
    }
  }
  @media (min-width: 1280px) {
    max-width: 1200px;
    & > :first-of-type {
      margin-left: 0px;
    }

    & > * {
      margin-bottom: 0;
      margin-right: 32px;
    }

    & > :last-of-type {
      margin-right: 0px;
    }
  }
`;

const News: React.FC<IProps> = () => {
  const { news } = useLang();

  return (
    <Root>
      <PageTitle>{news.title}</PageTitle>
      <NewsList>
        {[
          {
            photo: "/images/news/news1.png",
            date: news.newsDate1,
            title: news.newsTitle1,
            description: news.newsText1,
          },
          {
            photo: "/images/news/news2.png",
            date: news.newsDate2,
            title: news.newsTitle2,
            description: news.newsText2,
          },
          {
            photo: "/images/news/news3.png",
            date: news.newsDate3,
            title: news.newsTitle3,
            description: news.newsText3,
          },
        ].map((item) => (
          <NewsItem key={item.description} item={item} />
        ))}
      </NewsList>
    </Root>
  );
};
export default News;
