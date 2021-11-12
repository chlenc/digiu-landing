import { Row } from "@components/Flex";
import SizedBox from "@components/SizedBox";
import styled from "@emotion/styled";
import React from "react";
import Layout from "@components/Layout";

import LanguageSelect from "@layout/Header/LanguageSelect";
import Button from "@components/Button";
import { useLang } from "@src/hooks/useLang";

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

const MobileRow = styled(Row)`
  @media (min-width: 1280px) {
    display: none;
  }
`;
const DesktopRow = styled(Row)`
  @media (max-width: 1280px) {
    display: none;
  }
`;

const TextButton = styled.a`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
`;

const TextButtonMenu = styled(TextButton)`
  position: relative;
  .dropdown {
    display: none;
  }
  :hover {
    padding: 16px 24px;
    background: #fff;
    border-radius: 8px 8px 0 0;
    color: #000000;
    width: 240px;
    .dropdown {
      border-radius: 0 0 8px 8px;
      background: #fff;
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 50px;
      left: 0;
      right: 0;
      .dropdownItem {
        padding: 16px 24px;
        :hover {
          color: #245ff0;
        }
      }
    }
  }
`;

const MenuItemsWrapper = styled(DesktopRow)`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
`;

const MenuItemsRow = styled(Layout)`
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 1500px) and (min-width: 1280px) {
    padding-left: 112px;
  } ;
`;

const Header: React.FC<IProps> = ({ ...rest }) => {
  const { menu } = useLang();
  return (
    <Root {...rest}>
      <Row
        style={{ position: "relative" }}
        mainAxisSize="stretch"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo src="/images/head/logo.png" alt="logo" />
        <MenuItemsWrapper>
          <MenuItemsRow>
            <TextButton href="#home">{menu.home}</TextButton>
            <SizedBox width={48} />
            <TextButton href="#news">{menu.news}</TextButton>
            <SizedBox width={48} />
            <TextButtonMenu>
              <a href="#ecosystem">{menu.ecosystem}</a>
              <div className="dropdown">
                <a href="#lab" className="dropdownItem">
                  {menu.lab}
                </a>
                <a href="#assetManagement" className="dropdownItem">
                  {menu.assetManagement}
                </a>
                <a href="#ai" className="dropdownItem">
                  {menu.ai}
                </a>
                <a href="#venture" className="dropdownItem">
                  {menu.venture}
                </a>
              </div>
            </TextButtonMenu>
          </MenuItemsRow>
        </MenuItemsWrapper>
        <Row style={{ width: "auto" }} alignItems="center">
          <LanguageSelect />
          <SizedBox width={30} />
          <MobileRow>
            <Menu src="/images/head/menu.svg" alt="menu" />
          </MobileRow>
          <DesktopRow style={{ zIndex: 1 }} alignItems="center">
            <TextButton>{menu.login}</TextButton>
            <SizedBox width={48} />
            <Button style={{ width: 256 }}>{menu.register}</Button>
          </DesktopRow>
        </Row>
      </Row>
    </Root>
  );
};
export default Header;
