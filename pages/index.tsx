import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../src/layout/HomePage";
import styled from "@emotion/styled";
import Footer from "../src/layout/Footer";
import Header from "../src/layout/Header";
import News from "../src/layout/News";
import Ecosystem from "../src/layout/Ecosystem";
import Laboratory from "@layout/Laboratory";
import BackgroundWrapper from "@components/BackgroundWrapper";
import Management from "@layout/Management";
import AI from "@layout/AI";
import Venture from "@layout/Venture";
import BecomeInvestor from "@layout/BecomeInvestor";

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

const Home: NextPage = () => {
  return (
    <Root>
      <Head>
        <title>DigiU</title>
        <meta name="description" content="DigiU website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <BackgroundWrapper background="/images/head/bg.png" position="left">
          <Header style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
          <HomePage />
        </BackgroundWrapper>
        <News />
        <Ecosystem />
        <Laboratory />
        <Management />
        <AI />
        <Venture />
        <BecomeInvestor />
      </Main>
      <Footer />
    </Root>
  );
};

export default Home;
