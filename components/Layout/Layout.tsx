import { ReactNode, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/GlobalStyle";
import context, { TContext } from "context";
import Header from "./Header";
import variables from "variables";

import { ThemeProps } from "./themes"
interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  const { theme } = useContext<TContext>(context);
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

const Container = styled.div<ThemeProps>`
  background: ${({ theme }) => theme.bg};
  box-sizing: border-box;
  color: ${({ theme }) => theme.fg};
  height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 10fr;
  gap: 0px 0px;
  grid-template-areas:
    "logo"
    "main";

  @media (min-width: ${variables.breakpoints.medium}px) {
    grid-template-columns: 1.5fr 4fr 1fr;
    grid-template-rows: 1fr 8fr 1fr;
    grid-template-areas:
      "logo header"
      "sidebar main";
  }
`;
