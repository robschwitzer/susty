import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, Body } from "components/Typography";
import context, { TContext, TComponent } from "context";

const TITLE: string = "Clothing";

const data: string[] = [
  "The fashion industry is the world's second worst polluter, surpassed only by oil.",
  "The average North American consumer discards 81 pounds of textiles per year (😱). The fast fashion industry contributes to much of this waste with it's cheaply made garmets that lose their shape and color after only a few wears.",
  "You likely don't need 20+ t-shirts or 10 pairs of pants. Consider donating some rarely worn items, and curating a well thought out, intentional wardrobe.",
  "Instead of shopping merely by price tag, consider the slow fashion movement. Slow fashion encourages thoughtful ownership by seeking out timeless, well made pieces that will stand the test of time not only in quality, but also in style.",
];

const children = data.map((item, id) => ({
  Component: () => <Body>{item}</Body>,
  id,
}));

const componentMap: TComponent[] = [
  { Component: (): ReactNode => <H1>{TITLE}</H1> },
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

export const Main3 = (props): ReactNode => <Template componentMap={componentMap} {...props} />;

Main3.displayName = TITLE;
