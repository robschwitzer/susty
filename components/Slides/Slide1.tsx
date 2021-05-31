import { ReactNode } from "react";
import Button from "components/Button";
import Slide from "components/Slide";
import { H1, Body } from "components/Typography";

const P1 = (): ReactNode => <H1>The Road to Net Zero</H1>;
const P2 = (): ReactNode => (
  <Body style={{ margin: "40px 0" }}>
    ‘Net zero emissions’ refers to achieving an overall balance between
    greenhouse gas emissions produced and greenhouse gas emissions taken outof
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
const P4 = ({ onChangeSlide }): ReactNode => {
  return (
    <div style={{ margin: "40px 0" }}>
      <Button text="Next" onClick={() => onChangeSlide("next")} />
    </div>
  )
};

const componentMap: { Component: Function, id: number }[] = [
  { Component: P1 },
  { Component: P2 },
  { Component: P3 },
  { Component: P4 },
].map((o, id) => Object.assign(o, { id }));

export const Slide1 = (props): ReactNode => <Slide componentMap={componentMap} {...props} />
