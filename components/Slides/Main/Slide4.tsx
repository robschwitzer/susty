import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, Body } from "components/Typography";
import context, { TContext, TComponent } from "context";

const TITLE = "Food";

const children: TComponent[] = [
  "🍍 The food we eat often has a large environmental impact. If you fancy tropical fruit in December, you may be unwittingly growing your carbon footprint.",
  "🍩 Supply chain aside, we as a Western society are over-fed. Next time you reach for the chips or snacks, consider the waste that is created from those empty calories, and whether you truly need to indulge.",
  "📍 Going to farmers markets is fun. Not only that, it's a great way to learn where your food comes from. Eating local food goes a long way to reduce your carbon footprint.",
  "🐮 At any given time, there are over a billion head of cattle and over 25 billion chickens alive in the world. These animals are bred purely for human consumption and their byproducts, and if we ate less of them, less of them would need to exist. The environmental benefits from eating a plant focused diet are immeasurable.",
].map((item, id) => ({
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

export const Main4 = (props): ReactNode => <Template componentMap={componentMap} {...props} />;

Main4.displayName = TITLE;
