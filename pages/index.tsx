import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "./layout/HomePage";
import styled from "@emotion/styled";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import News from "./layout/News";

const Root = styled.div``;

const Main = styled.main`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(134.31deg, #316bff 25.3%, #747afe 89.38%);
  min-width: 100vw;
  position: relative;
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
        <Header style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
        <HomePage />
        <News />
      </Main>
      <Footer />
    </Root>
  );
};

export default Home;
