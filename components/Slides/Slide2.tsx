import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, Body } from "components/Typography";
import context, { TContext } from "context";
import { TComponent } from "pages/index";

const P1 = (): ReactNode => <H1>How we're doing</H1>;
const P2 = (): ReactNode => <Body>hmmmmmmm</Body>;
const P3 = (): ReactNode => <Body>????????</Body>;
const P4 = (): ReactNode => {
  const { setCurrentSlide } = useContext<TContext>(context);
  return (
    <Button
      text="???"
      onClick={(): void => setCurrentSlide((slide) => slide + 1)}
    />
  );
};

const componentMap: TComponent[] = [
  { Component: P1 },
  { Component: P2 },
  { Component: P3 },
  { Component: P4 },
].map((o: any, id: number): TComponent => Object.assign(o, { id }));

export const Slide2 = (props): ReactNode => (
  <Template componentMap={componentMap} {...props} />
);
