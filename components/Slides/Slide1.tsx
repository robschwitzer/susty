import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, Body } from "components/Typography";
import context, { TContext } from "context";
import { TComponent } from "pages/index";

const P1 = (): ReactNode => <H1>The Road to Net Zero</H1>;
const P2 = (): ReactNode => (
  <Body>
    ‘Net zero emissions’ refers to achieving an overall balance between
    greenhouse gas emissions produced and greenhouse gas emissions taken outof
    the atmosphere.
  </Body>
);
const P3 = (): ReactNode => (
  <Body>
    Getting to net zero means we can still produce some emissions, as long as
    they are offset by processes that reduce greenhouse gases already in the
    atmosphere.
  </Body>
);
const P4 = (): ReactNode => {
  const { setCurrentSlide } = useContext<TContext>(context);
  return (
    <Button
      text="Next"
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

export const Slide1 = (props): ReactNode => (
  <Template componentMap={componentMap} {...props} />
);
