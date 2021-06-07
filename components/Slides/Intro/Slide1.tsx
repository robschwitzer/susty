import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, Body } from "components/Typography";
import context, { TContext, TComponent } from "context";

const children: TComponent[] = [
  "‘Net zero emissions’ refers to achieving an overall balance between greenhouse gas emissions produced and greenhouse gas emissions taken out of the atmosphere.",
  "Getting to net zero means we can still produce some emissions, as long as they are offset by processes that reduce greenhouse gases already in the atmosphere."
].map((item, id) => ({
  Component: () => <Body>{item}</Body>,
  id
}));

const componentMap: TComponent[] = [
  { Component: (): ReactNode => <H1>The Road to Net Zero</H1> },
  ...children,
  { Component: (): ReactNode => {
    const { setCurrentSlide } = useContext<TContext>(context);
    return <Button onClick={(): void => setCurrentSlide((slide) => slide + 1)} />;
  } },
].map((o: any, id: number): TComponent => Object.assign(o, { id }));

export const Intro1 = (props): ReactNode => <Template componentMap={componentMap} {...props} />;

Intro1.displayName = "Intro1";
