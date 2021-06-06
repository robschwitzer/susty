import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, Body } from "components/Typography";
import context, { TContext, TComponent } from "context";

const TITLE = "General"

const P1 = (): ReactNode => <H1>{TITLE}</H1>;
const P2 = (): ReactNode => (
  <Body>
    ‘Net zero emissions’ refers to achieving an overall balance between
    greenhouse gas emissions produced and greenhouse gas emissions taken out of
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
  return <Button onClick={(): void => setCurrentSlide((slide) => slide + 1)} />;
};

const componentMap: TComponent[] = [
  { Component: P1 },
  { Component: P2 },
  { Component: P3 },
  { Component: P4 },
].map((o: any, id: number): TComponent => Object.assign(o, { id }));

export const Main5 = (props): ReactNode => {
  return (
    <Template componentMap={componentMap} {...props} />
  )
};

Main5.displayName = TITLE;
