import { ReactNode, useContext } from "react";
import Button from "components/Button";
import Template from "components/Slides/Template";
import { H1, H3, Body } from "components/Typography";
import context, { TContext, TComponent } from "context";

const TITLE = "Waste"

const children: TComponent[] = [
  {
    title: "♻️ Recycling Bin",
    sub: "Most of us are guilty of putting non-recyclable items in the recycle bin. Non-recyclables clog machinery, take time to sort, and make the rycycling process more difficult. It's important to understand your municipality's guidelines for recycling, and to adhere to them."
  },
  {
    title: "🍂 Compost System",
    sub: "Because landfills are devoid of light and air, food scraps that end up there are not able to properly decompose. Instead, they produce methane gas as they break down, which contributes to global warming. Anyone can help mitigate this by composting food scraps at home. All you need is a small transport container in your kitchen to keep the scraps, and a tumbler outside or on your balcony where you can deposit your kitchen scraps to let them break down."
  },
  {
    title: "🗑 Trash Bin",
    sub: "Because we are conscious of our waste, a small kitchen trash bin should suffice. Line it with a re-used paper bag or newspaper to cut down on plastic waste, and consider if items that are destined for the bin could be recycled or composted."
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
  { Component: (): ReactNode => <Body>Even after going the extra mile to be good Earthlings, waste is still hard to avoid. Here are some things we can do to make sure our waste ends up where it needs to go:</Body> },
  ...children,
  { Component: (): ReactNode => {
    const { setCurrentSlide, setTheme } = useContext<TContext>(context);
    const onClick = (): void => {
      setTheme();
      setCurrentSlide(1);
    };
    return <Button text="Back to Start" onClick={onClick} />;
  } },
].map((o: any, id: number): TComponent => Object.assign(o, { id }));

export const Main7 = (props): ReactNode => <Template componentMap={componentMap} {...props} />;

Main7.displayName = TITLE;
