import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, H3, Body } from "components/Typography";
import context, { TContext, TComponent } from "context";

const TITLE = "General";
const children: TComponent[] = [
  {
    title: "🚘 Drive Less",
    sub: "Going without a car conserves roughly 2.6 tonnes of C02 annualy",
  },
  {
    title: "✈️ Travel Smart",
    sub: "If you don't need to fly, don't. A single round trip flight from New York to London creates a warming effect equivalent to 2-3 tonnes of carbon dioxide per person.",
  },
  {
    title: "🗑 Create Less Trash",
    sub: "First and foremost - reduce and reuse. Then, recycle according to your municipality's guidelines.",
  },
  {
    title: "🛍 Shop Less",
    sub: "Most products require non-renewable resources to get produced, and the packaging and shipping of items bought online is a huge contributor to pollution.",
  },
  {
    title: "🌿 Consider Carbon Offsets",
    sub: "Purchasing carbon offsets compensates for your emissions by helping fund carbon reducing projects.",
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
        Some general rules of thumb to make sure your carbon footprint stays
        low:
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

export const Main5 = (props): ReactNode => <Template componentMap={componentMap} {...props} />;

Main5.displayName = TITLE;
