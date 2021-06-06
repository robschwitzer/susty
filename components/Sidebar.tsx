import styled, { css } from "styled-components";
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

const Sidebar = (): JSX.Element => {
  const {
    currentSlide,
    currentStack,
    setCurrentSlide,
    setCurrentStack,
    setTheme,
    showSidebar,
  } = useContext<TContext>(context);

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

  const onClickCategory = (id) => {    
    setCurrentSlide(id);
  };

  const children = useMemo((): ReactNode | ReactNode[] => {
    return stackName === STACK_NAMES.INTRO ? (
      <NavItem onClick={() => onClickNavigation(STACK_NAMES.MAIN, "1")}>
        Explore
      </NavItem>
    ) : (
      [
        ...mainStack.map(({ Component, id }) => {
          return (
            <NavItem
              selected={currentSlide === id}
              onClick={() => onClickCategory(id)}
              key={id}
            >
            &nbsp;{Component.displayName}
            </NavItem>
          )
        }),
        <NavItem
          key={"backtointro"}
          onClick={() => onClickNavigation(STACK_NAMES.INTRO, "0")}
        >
          ← Back
        </NavItem>,
      ]
    );
  }, [stackName, currentSlide]);

  if (!stackName || !showSidebar) return null;

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
`;

const NavItem = styled(Body)<{ selected?: boolean; }>`
  --left: 6vw;
  align-self: flex-start;
  cursor: pointer;
  display: flex;
  margin-left: var(--left);
  opacity: 0.7;
  transition: all 200ms ease;
  user-select: none;

  &:nth-child(even) {
    margin: 20px 0 20px var(--left);
  }

  ${({ selected }) => selected && css`
    opacity: 1;
    &:before {
      content: "→";
    }
  `}
  
  &:hover {
    text-decoration: underline;
    opacity: 1;
    transform: scale(1.01);
  }
`;
