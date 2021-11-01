import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "./layout/HomePage";
import styled from "@emotion/styled";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import News from "./layout/News";
import Ecosystem from "./layout/Ecosystem";

const Root = styled.div``;

const Main = styled.main`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100vw;
  position: relative;
`;

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(/images/head/bg.png) right no-repeat;
  background-size: cover;
  width: 100%;
`;

const Home: NextPage = () => {
  return (
    <Root>
      <Head>
        <title>DigiU</title>
        <meta name="description" content="DigiU website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <HeadWrapper>
          <Header style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
          <HomePage />
        </HeadWrapper>
        <News />
        <Ecosystem />
      </Main>
      <Footer />
    </Root>
  );
};

export default Home;
