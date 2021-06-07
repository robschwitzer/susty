import { ReactNode, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/GlobalStyle";
import context, { TContext } from "context";
import Header from "./Header";

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
  display: grid;
  grid-template-columns: 2fr 4fr 1fr;
  grid-template-rows: minmax(auto, 10vh) minmax(100vh, auto);
  gap: 0px 0px;
  grid-template-areas:
    "logo header switch"
    "sidebar main .";
  justify-content: flex-start;
  min-height: 100vh;
  max-width: 100vw;
`;
