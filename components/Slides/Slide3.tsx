import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, Body } from "components/Typography";
import context, { TContext } from "context";
import { TComponent } from "pages/index";

const P1 = (): ReactNode => <H1>What we can do better</H1>;
const P2 = (): ReactNode => <Body>ahhhh....</Body>;
const P3 = (): ReactNode => <Body>ohhhh...</Body>;
const P4 = (): ReactNode => {
  const { setTheme, setCurrentSlide } = useContext<TContext>(context);
  const onClick = () => {
    setTheme();
    setCurrentSlide(0);
  };

  return <Button text="???" onClick={onClick} />;
};

const componentMap: TComponent[] = [
  { Component: P1 },
  { Component: P2 },
  { Component: P3 },
  { Component: P4 },
].map((o: any, id: number): TComponent => Object.assign(o, { id }));

export const Slide3 = (props): ReactNode => (
  <Template componentMap={componentMap} {...props} />
);
