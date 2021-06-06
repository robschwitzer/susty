import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, Body } from "components/Typography";
import context, { TContext, TComponent } from "context";
import { THEMES } from "components/Layout/themes";

const P1 = (): ReactNode => <H1>In addition to things that we can do as an organization, we should strive to affect change on an individual level.</H1>;
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
  const { setCurrentSlide, setTheme } = useContext<TContext>(context);
  const onClick = (): void => {
    setCurrentSlide((slide) => slide + 1);
    setTheme(THEMES.find(({ name }) => name === "forest"));
  }
  return <Button text="Explore" onClick={onClick} />;
};

const componentMap: TComponent[] = [
  { Component: P1 },
  { Component: P2 },
  { Component: P3 },
  { Component: P4 },
].map((o: any, id: number): TComponent => Object.assign(o, { id }));

export const Main1 = (props): ReactNode => {
  return (
    <Template componentMap={componentMap} {...props} />
  )
};

Main1.displayName = "Main1";
