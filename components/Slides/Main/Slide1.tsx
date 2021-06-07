import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, Body } from "components/Typography";
import context, { TContext, TComponent } from "context";
import { THEMES } from "components/Layout/themes";

const children: TComponent[] = [
  "By being smart consumers, exercising thoughtful ownership, being conscious about what and how we eat, and most of all leading by example, we can make a meaningful impact on the planet.",
  "Even if it sometimes feels like we're alone on the battlefield, the things we do on an individual level will contribute to our collective push to reduce the overall carbon footprint.",
  "Here are some things that we can do every day to be better Earthlings:",
].map((item, id) => ({
  Component: (): JSX.Element => <Body>{item}</Body>,
  id,
}));

const componentMap: TComponent[] = [
  {
    Component: (): ReactNode => (
      <H1>
        In addition to things that we can do as an organization, we should
        strive to affect change on an individual level.
      </H1>
    ),
  },
  ...children,
  {
    Component: (): ReactNode => {
      const { setCurrentSlide, setTheme } = useContext<TContext>(context);
      const onClick = (): void => {
        setCurrentSlide((slide) => slide + 1);
        setTheme(THEMES.find(({ name }) => name === "forest"));
      };
      return <Button text="Explore" onClick={onClick} />;
    },
  },
].map((o: any, id: number): TComponent => Object.assign(o, { id }));

export const Main1 = (props): ReactNode => <Template componentMap={componentMap} {...props} />;

Main1.displayName = "Main1";
