import { useContext } from "react";
import styled from "styled-components";
import variables from "variables";
import context, { TContext } from "context";
import { H1 } from "components/Typography";
import { THEMES } from "components/Layout/themes";
import { componentMaps, STACK_NAMES } from "pages/_app";

const Header = (): JSX.Element => {
  const { theme, setTheme, setCurrentSlide, setCurrentStack, currentStack } = useContext<TContext>(context);
  const onClick = (): void => {
    const currentStackName = currentStack.find(() => true).stackName;
    if (currentStackName !== STACK_NAMES.INTRO) {
      setTheme();
      setCurrentStack(componentMaps[0]);
      setCurrentSlide(0);
    }
  };

  return (
    <>
      <LogoContainer>
        <Logo onClick={onClick}>Sphere</Logo>
      </LogoContainer>
      <Main />
      <Switch
        onClick={(): void =>
          setTheme(
            THEMES[
              theme.name === "dark"
                ? THEMES.findIndex(({ name }) => name === "light")
                : THEMES.findIndex(({ name }) => name === "dark")
            ]
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
  max-height: 10vh;
`;

const LogoContainer = styled.div`
  align-items: center;
  grid-area: logo;
  display: flex;
  justify-content: center;
  margin: 0 20px;
  max-height: 10vh;
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
  grid-area: switch;
  justify-content: center;
  user-select: none;
`;
