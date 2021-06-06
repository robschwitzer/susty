import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, Body } from "components/Typography";
import context, { TContext, TComponent } from "context";
import { useTransition } from "hooks";
import TransitionWrapper from "components/TransitionWrapper";
import { BulletPointWrapper } from "../styled";

const data: string[] = [
  "Dematerialized coaching with a fully digital end-to-end coaching product.",
  "Started to democratize coaching with flexible, affordable coaching experiences (can still greatly improve here with regards to marginalized communities).",
  "Created a thriving fully remote team.",
];

const bulletPoints: any[] = data
  .map(
    (text, i): ReactNode =>
      (): ReactNode =>
        <Body key={i}>{text}</Body>
  )
  .map((Component, id) => ({ Component, id }));

const P1 = (): ReactNode => <H1>How we're doing 🌤</H1>;
const P2 = (): ReactNode => <Body>So far, we've:</Body>;
const P3 = ({ inProp }: { inProp: boolean }): ReactNode => {
  const { transitionMap } = useTransition(bulletPoints, inProp, 200);
  const children: ReactNode[] = bulletPoints.map(({ Component, id }) => (
    <TransitionWrapper key={id} inProp={transitionMap[id]}>
      <BulletPointWrapper>
        <span>🌱</span>
        <Component />
      </BulletPointWrapper>
    </TransitionWrapper>
  ));
  if (!inProp) return null;
  return <div>{children}</div>;
};
const P4 = (): ReactNode => {
  const { setCurrentSlide } = useContext<TContext>(context);
  return <Button onClick={(): void => setCurrentSlide((slide) => slide + 1)} />;
};

const componentMap: TComponent[] = [
  { Component: P1 },
  { Component: P2 },
  { Component: P3 },
  { Component: P4 },
].map((o: any, id: number): TComponent => Object.assign(o, { id }));

export const Intro2 = (props): ReactNode => (
  <Template componentMap={componentMap} {...props} />
);
