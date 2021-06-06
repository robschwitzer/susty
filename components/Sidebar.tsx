import styled from "styled-components";
import { ReactNode, useContext, useMemo } from "react";
import context, { TContext } from "context";
import variables from "variables";
import TransitionWrapper from "components/TransitionWrapper";
import { componentMaps, STACK_NAMES } from "pages/_app";
import { Body } from "components/Typography";

const sideBarTransitionStyles = {
  entering: { opacity: 0, transform: `translateY(-300px)` },
  entered: { opacity: 1, transform: `translateY(0)` },
  exiting: { opacity: 0, transform: `translateY(300px)` },
  exited: { opacity: 0, transform: `translateY(600px)` },
};

const mainStack = componentMaps
  /* find the main stack */
  .find((stack) =>
    stack.find(({ stackName }) => stackName === STACK_NAMES.MAIN)
  )
  /* filter out the first/intro slide */
  .filter(({ Component }) => Component.displayName !== "Main1");

interface Props {
  inProp: boolean;
}

const Sidebar = (): JSX.Element => {
  const { currentStack, setCurrentStack, setTheme, showSidebar } =
    useContext<TContext>(context);

  const stackName: string = useMemo(
    (): string | null =>
      currentStack.find((/* find any component */) => true)?.stackName ?? null,
    [currentStack]
  );

  const onClickNavigation = (dest, slide) => {
    setTheme();
    setCurrentStack(() => {
      if (dest === STACK_NAMES.MAIN) {
        return [
          ...componentMaps.find((stack) =>
            stack.find(({ stackName }) => stackName === STACK_NAMES.MAIN)
          ),
        ].filter(({ Component }) => Component.displayName !== "Main1");
      }
      return componentMaps.find((stack) =>
        stack.find(({ stackName }) => stackName === dest)
      );
    }, slide);
  };

  const children = useMemo((): ReactNode | ReactNode[] => {
    return stackName === STACK_NAMES.INTRO ? (
      <NavItem key={1} onClick={() => onClickNavigation(STACK_NAMES.MAIN, "1")}>
        Navigation
      </NavItem>
    ) : (
      [
        ...mainStack.map(({ Component, id }) => (
          <NavItem key={id}>{Component.displayName}</NavItem>
        )),
        <NavItem
          key={"backtointro"}
          style={{ margin: "20px 0" }}
          onClick={() => onClickNavigation(STACK_NAMES.INTRO, "0")}
        >
          👈
        </NavItem>,
      ]
    );
  }, [stackName]);

  if (!stackName) return null;

  return (
    <TransitionWrapper
      inProp={showSidebar}
      styles={{ gridArea: "sidebar", ...sideBarTransitionStyles }}
    >
      <Container>{children}</Container>
    </TransitionWrapper>
  );
};

export default Sidebar;

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  padding-top: 11vh;

  &:nth-child(even) {
    margin: 20px 0;
  }
`;

const NavItem = styled(Body)`
  cursor: pointer;
  opacity: 0.8;
  transition: all 200ms ease;
  user-select: none;

  &:hover {
    border-bottom: ${({ theme }) => `1px solid ${theme.fg}`};
    opacity: 1;
    transform: scale(1.01);
  }
`;
