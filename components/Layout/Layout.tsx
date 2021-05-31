import { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/GlobalStyle";
import Header from "./Header";
import variables from "variables";

interface Props {
  children: ReactNode;
}

interface Theme {
  fg: string;
  bg: string;
}

interface Themes {
  brand: Theme;
  light: Theme;
  dark: Theme;
}

interface StyleProps {
  theme: Theme;
}

const THEMES: Themes = {
  brand: {
    fg: variables.white,
    bg: variables.blue_primary,
  },
  light: {
    fg: variables.black,
    bg: variables.light_grey
  },
  dark: {
    fg: variables.white,
    bg: variables.black_secondary
  }
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <ThemeProvider theme={THEMES["dark"]}>
      <GlobalStyle />
      <Container>
        <Header />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

const Container = styled.div<StyleProps>`
  background: ${({ theme }) => theme.bg};
  box-sizing: border-box;
  color: ${({ theme }) => theme.fg};
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 10fr;
  gap: 0px 0px;
  grid-template-areas:
    "logo"
    "main";

  @media (min-width: ${variables.breakpoints.medium}px) {
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1fr 8fr;
    grid-template-areas:
      "logo header"
      "sidebar main";
  }
`;
