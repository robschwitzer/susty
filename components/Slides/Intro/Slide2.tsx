import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, Body } from "components/Typography";
import context, { TContext, TComponent } from "context";
import { useTransition } from "hooks";
import TransitionWrapper from "components/TransitionWrapper";
import { BulletPointWrapper } from "../styled";

const children: TComponent[] = [
  "Dematerialized coaching with a fully digital end-to-end coaching product.",
  "Started to democratize coaching with flexible, affordable coaching experiences (can still greatly improve here with regards to marginalized communities).",
  "Created a thriving fully remote team.",
].map((item, id) => ({
  Component: ({ inProp }) => {
    const { transitionMap } = useTransition(children, inProp, 200);
    return (
      <TransitionWrapper key={id} inProp={transitionMap[id]}>
        <BulletPointWrapper>
          <span>🌱</span>
          <Body>{item}</Body>
        </BulletPointWrapper>
      </TransitionWrapper>
    )
  },
  id
}));

const componentMap: TComponent[] = [
  { Component: (): ReactNode => <H1>How we're doing 🌤</H1> },
  { Component: (): ReactNode => <Body>So far, we've:</Body> },
  ...children,
  { Component: (): ReactNode => {
    const { setCurrentSlide } = useContext<TContext>(context);
    return <Button onClick={(): void => setCurrentSlide((slide) => slide + 1)} />;
  } },
].map((o: any, id: number): TComponent => Object.assign(o, { id }));

export const Intro2 = (props): ReactNode => <Template componentMap={componentMap} {...props} />;

Intro2.displayName = "Intro2";
