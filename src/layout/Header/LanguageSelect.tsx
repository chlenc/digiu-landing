import styled from "@emotion/styled";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
  FR: "/images/head/FRA.svg",
  VN: "/images/head/VTN.svg",
};

const LanguageSelect: React.FC = () => {
  const router = useRouter();
  const { locale } = useRouter();

  return (
    <Link href={router.route} locale={locale === "RU" ? "EN" : "RU"}>
      <Root onClick={() => null}>
        <LangIcon src={iconsMap[locale ?? "RU"]} alt={locale} />
        <div>{locale}</div>
      </Root>
    </Link>
  );
};

export default LanguageSelect;
