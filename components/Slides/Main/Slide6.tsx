import React, { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, H3, Body } from "components/Typography";
import context, { TContext, TComponent } from "context";

const TITLE = "Plastics";

const headings: TComponent[] = [
  "One garbage truck's load of plastic ends up in our oceans every minute. That adds up to 13 million metric tonnes per year. That's bad.",
  "Not only does all of this plastic kill birds, fish, and other marine life, it also encourages the growth of pathogens, seen in corals that come in contact with plastic waste.",
  "Here are some ways to be conscious of the plastic that you bring home:",
].map((item, id) => ({
  Component: () => <Body>{item}</Body>,
  id,
}));

const data: TComponent[] = [
  {
    title: "🛒 Plastic Free Food Shopping",
    sub: "Try using reusable totes, and keeping produce in reusable produce bags. Buying in bulk also helps cut down on un-needed plastic packaging.",
  },
  {
    title: "🍯 Plastic Free Food Storage",
    sub: "Glass jars make great containers. Consider removing labels from old pickle jars and using them to organzie your pantry.",
  },
  {
    title: "🕵️‍♂️ Be discerning",
    sub: "Supermarkets are packed with multiple varieties of the same item. When deciding which one to grab off the shelf, consider taking the one with less packaging.",
  },
].map((item, id) => ({
  Component: () => (
    <div key={id}>
      <Body>{item.title}</Body>
      <H3>{item.sub}</H3>
    </div>
  ),
  id,
}));

const componentMap: TComponent[] = [
  { Component: (): ReactNode => <H1>{TITLE}</H1> },
  ...headings,
  ...data,
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

export const Main6 = (props): ReactNode => <Template componentMap={componentMap} {...props} />;

Main6.displayName = TITLE;
