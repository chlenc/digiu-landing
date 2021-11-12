import styled from "@emotion/styled";
import React from "react";
import Layout from "../../components/Layout";
import EcosystemItem from "./EcosystemItem";
import { useLang } from "@src/hooks/useLang";

interface IProps {}

const Root = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
  background: #fff;
  @media (min-width: 480px) {
    padding-top: 120px;
    padding-bottom: 120px;
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
    margin-bottom: 64px;
    font-size: 40px;
    line-height: 48px;
  }
`;

const EcosystemList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  @media (min-width: 480px) {
    gap: 28px;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1280px) {
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Ecosystem: React.FC<IProps> = () => {
  const { ecosystem: l } = useLang();
  return (
    <Root id="ecosystem">
      <PageTitle>{l.title}</PageTitle>
      <EcosystemList>
        {[
          {
            photo: "/images/ecosystem/blockchain.svg",
            title: l.itemTitle1,
            description: l.itemText1,
          },
          {
            photo: "/images/ecosystem/statistics.svg",
            title: l.itemTitle2,
            description: l.itemText2,
          },
          {
            photo: "/images/ecosystem/ai.svg",
            title: l.itemTitle3,
            description: l.itemText3,
          },
          {
            photo: "/images/ecosystem/leaves.svg",
            title: l.itemTitle4,
            description: l.itemText4,
          },
          {
            photo: "/images/ecosystem/group.svg",
            title: l.itemTitle5,
            description: l.itemText5,
          },
          {
            photo: "/images/ecosystem/education.svg",
            title: l.itemTitle6,
            description: l.itemText6,
          },
        ].map((item) => (
          <EcosystemItem key={item.description} item={item} />
        ))}
      </EcosystemList>
    </Root>
  );
};
export default Ecosystem;
