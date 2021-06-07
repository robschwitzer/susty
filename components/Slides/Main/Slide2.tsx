import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, H3, Body } from "components/Typography";
import context, { TContext, TComponent } from "context";

const TITLE: string = "Household";

const children: TComponent[] = [
  {
    title: "🧦 Clean the lint trap",
    sub: "A clean dryer filter reduces drying time, which uses less electricity",
  },
  {
    title: "🔆 Turn off the lights",
    sub: "You save money and waste less energy by not lighting unoccupied rooms",
  },
  {
    title: "♽ Do you need all that paper towel?",
    sub: "Most times when we reach for paper towel, we should be reaching for it's fabric counterpart",
  },
  {
    title: "🛁 Turn down your water heater",
    sub: "You probably don't need it to be set to 140.",
  },
].map((item, id) => ({
  Component: () => (
    <div>
      <Body>{item.title}</Body>
      <H3>{item.sub}</H3>
    </div>
  ),
  id,
}));

const componentMap: TComponent[] = [
  { Component: (): ReactNode => <H1>{TITLE}</H1> },
  {
    Component: (): ReactNode => (
      <Body>
        Here are some quick wins that you can do around the house right now:
      </Body>
    ),
  },
  ...children,
  {
    Component: (): ReactNode => {
      const { setCurrentSlide, setTheme } = useContext<TContext>(context);
      const onClick = (): void => {
        setTheme();
        setCurrentSlide((slide) => slide + 1);
      };
      return <Button onClick={onClick} />;
    },
  },
].map((o: any, id: number): TComponent => Object.assign(o, { id }));

export const Main2 = (props): ReactNode => <Template componentMap={componentMap} {...props} />;

Main2.displayName = TITLE;
