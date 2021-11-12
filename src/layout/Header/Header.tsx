import { Row } from "@components/Flex";
import SizedBox from "@components/SizedBox";
import styled from "@emotion/styled";
import React from "react";
import Layout from "@components/Layout";

import LanguageSelect from "@layout/Header/LanguageSelect";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Root = styled(Layout)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding-top: 22px;
  @media (min-width: 480px) {
    padding-top: 22px;
  }
  @media (min-width: 1280px) {
    max-width: 100%;
    padding: 40px 40px 0 40px;
  }
`;

const Logo = styled.img`
  width: 48px;
  @media (min-width: 1280px) {
    width: 100px;
  }
`;

const Menu = styled.img`
  width: 24px;
`;

const Header: React.FC<IProps> = ({ ...rest }) => {
  return (
    <Root {...rest}>
      <Logo src="/images/head/logo.png" alt="logo" />
      <Row style={{ width: "auto" }}>
        <LanguageSelect />
        <SizedBox width={30} />
        <Menu src="/images/head/menu.svg" alt="menu" />
      </Row>
    </Root>
  );
};
export default Header;
