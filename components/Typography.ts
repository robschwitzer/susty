import styled from "styled-components";
import variables from "variables";

interface Props {
  theme: any;
  noUnderline?: boolean;
  lineHeight?: number;
  strong?: boolean;
}

export const BasicTextProperties = styled.span`
  display: block;
  font-family: Favorit-Regular;
  -webkit-font-smoothing: antialiased;
  line-height: ${(props: Props) => props.lineHeight || 1.2};
  letter-spacing: -0.8px;

  ​a {
    text-decoration: ${(props: Props) =>
      props.noUnderline ? "none" : "underline"};
    color: ${(props: Props) => props.theme.fg};
    cursor: pointer;
  }
`;

export const H1 = styled(BasicTextProperties)`
  font-family: Favorit-Medium;
  font-size: 40px;
  line-height: 1.1;
  letter-spacing: -2px;
  @media (min-width: ${variables.breakpoints.medium}px) {
    font-size: 64px;
  }
`;

export const H2 = styled(BasicTextProperties)`
  font-size: 24px;
  ​@media (min-width: ${variables.breakpoints.medium}px) {
    font-size: 36px;
  }
`;

export const H3 = styled(BasicTextProperties)`
  font-size: 24px;
  ​@media (min-width: ${variables.breakpoints.medium}px) {
    font-size: 28px;
  }
`;

export const H4 = styled(BasicTextProperties)`
  font-size: 20px;
  ​@media (min-width: ${variables.breakpoints.medium}px) {
    font-size: 24px;
  }
`;

export const Body = styled(BasicTextProperties)`
  font-size: 40px;
  ${(props: Props) => props.strong && "font-family: Favorit-Medium;"}
`;

export const FinePrint = styled(BasicTextProperties)`
  font-size: 14px;
`;
