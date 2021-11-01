import styled from "@emotion/styled";

import { ISizedBoxProps } from "./SizedBoxTypes";

export const SSizedBox = styled.div<ISizedBoxProps>`
  display: flex;
  flex: 0 0 auto;
  width: ${({ width }) => `${width}px` ?? "auto"};
  height: ${({ height }) => `${height}px` ?? "auto"};
`;
