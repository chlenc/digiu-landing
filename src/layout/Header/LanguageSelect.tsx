import styled from "@emotion/styled";
import React, { useContext } from "react";
import { langs, LanguageProvider, useLang } from "@src/hooks/useLang";

const Root = styled.div<{ dark?: boolean }>`
  display: flex;
  align-items: center;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: ${({ dark }) => (dark ? "#ffffff" : "#ffffff")};
  width: 83px;
  cursor: pointer;
  z-index: 1;
`;
const LangIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 9px;
  flex-direction: column;
`;

const iconsMap: Record<string, string> = {
  RU: "/images/head/RUS.svg",
  EN: "/images/head/ENG.svg",
  VN: "/images/head/VTN.svg",
  FR: "/images/head/FRA.svg",
};

const LanguageSelect: React.FC<{ onChange: (l: langs) => void }> = ({
  onChange,
}) => {
  const locale = useContext(LanguageProvider);
  return (
    <Root onClick={() => onChange(locale === langs.RU ? langs.EN : langs.RU)}>
      <LangIcon src={iconsMap[locale ?? "RU"]} alt={locale} />
      <div>{locale}</div>
    </Root>
  );
};

export default LanguageSelect;
