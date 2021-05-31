import { ReactNode } from "react";
import Button from "components/Button";
import Slide from "components/Slide";
import { H1, Body } from "components/Typography";

const P1 = (): ReactNode => <H1>How we're doing</H1>;
const P2 = (): ReactNode => (
  <Body style={{ margin: "40px 0" }}>
    hmmmmmmm
  </Body>
);
const P3 = (): ReactNode => (
  <Body>
    ????????
  </Body>
);
const P4 = ({ onChangeSlide }): ReactNode => {
  return (
    <div style={{ margin: "40px 0" }}>
      <Button text="???" onClick={() => onChangeSlide("next")} />
    </div>
  )
};

const componentMap: { Component: Function, id: number }[] = [
  { Component: P1 },
  { Component: P2 },
  { Component: P3 },
  { Component: P4 },
].map((o, id) => Object.assign(o, { id }));

export const Slide2 = (props): ReactNode => <Slide componentMap={componentMap} {...props} />
