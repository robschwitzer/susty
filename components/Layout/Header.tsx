import { useContext } from "react";
import styled from "styled-components";
import variables from "variables";
import context, { TContext } from "context";
import { H1 } from "components/Typography";

const Header = (): JSX.Element => {
  const { setMenuOpen, isMenuOpen } = useContext<TContext>(context);

  return (
    <>
      <Container>
        <Logo>
          <a
            href="https://sphere.guide/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sphere
          </a>
        </Logo>
        <Hamburger onClick={() => setMenuOpen((open: boolean) => !open)}>
          {!isMenuOpen ? "🍔" : "❌"}
        </Hamburger>
      </Container>
      <Main />
    </>
  );
};

export default Header;

const Main = styled.div`
  grid-area: header;
`;

const Container = styled.div`
  align-items: center;
  grid-area: logo;
  display: flex;
  justify-content: space-between;
  margin: 0 20px;

  @media (min-width: ${variables.breakpoints.medium}px) {
    justify-content: center;
  }
`;

const Logo = styled(H1)`
  & > * {
    color: ${({ theme }) => theme.fg};
    cursor: pointer;
    font-family: Mercury-Bold;
    font-size: 36px;
    padding: 0;
    text-decoration: none;

    @media (min-width: ${variables.breakpoints.medium}px) {
      font-size: 64px;
    }
  }

`;

const Hamburger = styled.a`
  cursor: pointer;
  display: flex;
  font-size: 30px;
  user-select: none;

  @media (min-width: ${variables.breakpoints.medium}px) {
    display: none;
  }
`;
