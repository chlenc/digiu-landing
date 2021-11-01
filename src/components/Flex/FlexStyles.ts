import styled from '@emotion/styled';

import { IFlexProps } from './FlexTypes';

export const Row = styled.div<IFlexProps>`
  display: flex;
  flex-direction: row;

  justify-content: ${({ justifyContent }) => justifyContent ?? 'start'};
  align-items: ${({ alignItems }) => alignItems ?? 'start'};
  height: ${({ crossAxisSize }) =>
    crossAxisSize === 'max' ? '100%' : 'fit-content'};
  width: ${({ mainAxisSize }) =>
    mainAxisSize === 'fit-content' ? 'fit-content' : '100%'};
`;

export const Column = styled.div<IFlexProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent ?? 'start'};
  align-items: ${({ alignItems }) => alignItems ?? 'start'};
  width: ${({ crossAxisSize }) =>
    crossAxisSize === 'max' ? '100%' : 'fit-content'};
  height: ${({ mainAxisSize }) =>
    mainAxisSize === 'stretch' ? '100%' : 'fit-content'};
`;
