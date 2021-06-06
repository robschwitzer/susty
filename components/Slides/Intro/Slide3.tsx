import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, Body } from "components/Typography";
import context, { TContext, TComponent } from "context";
import { useTransition } from "hooks";
import TransitionWrapper from "components/TransitionWrapper";
import { BulletPointWrapper } from "../styled";
import { THEMES } from "components/Layout/themes";

const data: string[] = [
  "Looking to measure the impact of sessions.",
  "Looking at where we bank, and the eco footprint of their investments.",
  "Looking at the impact of how we process data.",
  "Encouraging our investors to measure their portfolios with an environmental policy lens.",
  "Examining the energy profiles of who is serving our ads and social profiles.",
  "Evaluating the amount of work related travel (pre/post COVID-19).",
];

const bulletPoints: any[] = data
  .map(
    (text, i): ReactNode =>
      /* fancy 😉 */
      (): ReactNode =>
        <Body style={{ fontSize: 30 }} key={i}>{text}</Body>
  )
  .map((Component, id) => ({ Component, id }));

const P1 = (): ReactNode => <H1>What we can do better</H1>;
const P2 = (): ReactNode => (
  <Body>Some opportunities to improve our climate impact are:</Body>
);
const P3 = ({ inProp }: { inProp: boolean }): ReactNode => {
  const { transitionMap } = useTransition(bulletPoints, inProp, 200);
  const children: ReactNode[] = bulletPoints.map(({ Component, id }) => (
    <TransitionWrapper key={id} inProp={transitionMap[id]}>
      <BulletPointWrapper>
        <span>🛠</span>
        <Component />
      </BulletPointWrapper>
    </TransitionWrapper>
  ));
  if (!inProp) return null;
  return <div>{children}</div>;
};
const P4 = (): ReactNode => {
  const { setCurrentStack, setTheme } = useContext<TContext>(context);
  const onClick = (): void => {
    setTheme(THEMES.find(theme => theme.name === "brand"));
    setCurrentStack(null, "0");
  };

  return <Button text="Hot Take ➡" onClick={onClick} />;
};

const componentMap: TComponent[] = [
  { Component: P1 },
  { Component: P2 },
  { Component: P3 },
  { Component: P4 },
].map((o: any, id: number): TComponent => Object.assign(o, { id }));

export const Intro3 = (props): ReactNode => (
  <Template componentMap={componentMap} {...props} />
);

Intro3.displayName = "Intro3";
