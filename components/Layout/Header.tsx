import { useContext } from "react";
import styled from "styled-components";
import variables from "variables";
import context, { TContext } from "context";
import { H1 } from "components/Typography";
import { THEMES } from "components/Layout/themes";

const Header = (): JSX.Element => {
  const { theme, setTheme, setCurrentSlide } = useContext<TContext>(context);

  return (
    <>
      <Container>
        <Logo onClick={() => setCurrentSlide(0)}>
          Sphere
        </Logo>
      </Container>
      <Main />
      <Switch
        onClick={() =>
          setTheme((theme) =>
            theme.name === "dark" ? THEMES["light"] : THEMES["dark"]
          )
        }
      >
        {theme.name === "dark" ? "🌝" : "🌚"}
      </Switch>
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
  justify-content: center;
  margin: 0 20px;
`;

const Logo = styled(H1)`
  color: ${({ theme }) => theme.fg};
  cursor: pointer;
  display: flex;
  font-family: Mercury-Bold;
  font-size: 36px;
  padding: 0;
  text-decoration: none;

  @media (min-width: ${variables.breakpoints.medium}px) {
    font-size: 64px;
  }
`;

const Switch = styled.a`
  align-self: center;
  cursor: pointer;
  display: flex;
  font-size: 30px;
  justify-content: center;
  user-select: none;
`;
