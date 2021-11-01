import styled from "@emotion/styled";
import React from "react";
import NewsItem from "./NewsItem";
import Layout from "@components/Layout";

interface IProps {}

const Root = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 80px;
  background: #fff;
  @media (min-width: 480px) {
    padding-top: 120px;
  }
  @media (min-width: 1280px) {
    padding-top: 160px;
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
    overflow: scroll;

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
  return (
    <Root>
      <PageTitle>Новости</PageTitle>
      <NewsList>
        {[
          {
            photo: "/images/news/news1.png",
            date: "21.07.2021",
            title: "Старт альфа-тестирования платформы EYWA",
            description:
              "8 сентября 2021 года мы запустили первую фазу альфа-тестирования платформы EYWA- первого потенциального единорога экосистемы",
          },
          {
            photo: "/images/news/news2.png",
            date: "21.07.2021",
            title: "Добро пожаловать в офис DigiU!",
            description:
              "Готовы узнать, как проходит рабочий день DigiU? Кто отвечает за личный кабинет, создает ИИ-разработки DigiU, ищет самых лучших специалистов в команду по всему миру?",
          },
          {
            photo: "/images/news/news3.png",
            date: "21.07.2021",
            title: "Внедрение ИИ разработок DigiU в сеть автосервисов",
            description:
              "Собственник Hunter-Сервис обратился к нам с просьбой оптимизировать процесс контроля деятельности сотрудников на одной из его автомоек.",
          },
        ].map((item) => (
          <NewsItem key={item.description} item={item} />
        ))}
      </NewsList>
    </Root>
  );
};
export default News;
