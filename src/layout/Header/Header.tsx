import { Row } from "@components/Flex";
import SizedBox from "@components/SizedBox";
import styled from "@emotion/styled";
import React, { useState } from "react";
import Layout from "@components/Layout";

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

interface ILanguage {
  name: string;
  icon: string;
}

const Lang = styled.div<{ dark?: boolean }>`
  display: flex;
  align-items: center;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${({ dark }) => (dark ? "#ffffff" : "#ffffff")};
`;
const LangIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 9px;
  flex-direction: column;
`;

const languages: ILanguage[] = [
  { name: "RUS", icon: "/images/head/RUS.svg" },
  { name: "ENG", icon: "/images/head/ENG.svg" },
  { name: "FRA", icon: "/images/head/FRA.svg" },
  { name: "TUR", icon: "/images/head/TUR.svg" },
];

const Header: React.FC<IProps> = ({ ...rest }) => {
  const [lang, setLang] = useState<ILanguage>(languages[0]);
  return (
    <Root {...rest}>
      <Logo src="/images/head/logo.png" alt="logo" />
      <Row style={{ width: "auto" }}>
        <Lang>
          <LangIcon src={lang.icon} alt={lang.name} />
          <div>RU</div>
        </Lang>
        <SizedBox width={30} />
        <Menu src="/images/head/menu.svg" alt="menu" />
      </Row>
    </Root>
  );
};
export default Header;
