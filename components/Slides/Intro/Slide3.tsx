import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, Body } from "components/Typography";
import context, { TContext, TComponent } from "context";
import { useTransition } from "hooks";
import TransitionWrapper from "components/TransitionWrapper";
import { BulletPointWrapper } from "../styled";
import { THEMES } from "components/Layout/themes";

const children: TComponent[] = [
  "Looking to measure the impact of sessions.",
  "Looking at where we bank, and the eco footprint of their investments.",
  "Looking at the impact of how we process data.",
  "Encouraging our investors to measure their portfolios with an environmental policy lens.",
  "Examining the energy profiles of who is serving our ads and social profiles.",
  "Evaluating the amount of work related travel (pre/post COVID-19).",
].map((item, id) => ({
  Component: ({ inProp }) => {
    const { transitionMap } = useTransition(children, inProp, 200);
    return (
      <TransitionWrapper key={id} inProp={transitionMap[id]}>
        <BulletPointWrapper>
          <span>🛠</span>
          <Body>{item}</Body>
        </BulletPointWrapper>
      </TransitionWrapper>
    );
  },
  id,
}));

const componentMap: TComponent[] = [
  { Component: (): ReactNode => <H1>What we can do better</H1> },
  {
    Component: (): ReactNode => (
      <Body>Some opportunities to improve our climate impact are:</Body>
    ),
  },
  ...children,
  {
    Component: (): ReactNode => {
      const { setCurrentStack, setTheme } = useContext<TContext>(context);
      const onClick = (): void => {
        setTheme(THEMES.find((theme) => theme.name === "brand"));
        setCurrentStack(null, "0");
      };
      return <Button text="Hot Take →" onClick={onClick} />;
    },
  },
].map((o: any, id: number): TComponent => Object.assign(o, { id }));

export const Intro3 = (props): ReactNode => <Template componentMap={componentMap} {...props} />;

Intro3.displayName = "Intro3";
