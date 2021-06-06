import { createContext, FC } from "react";
import { THEMES, Theme } from "components/Layout/themes";

export interface TComponent {
  Component: FC<{ displayName?: string; inProp?: boolean; }>;
  id: number;
  stackName?: string;
}

export interface TContext {
  setCurrentSlide: Function;
  setCurrentStack: Function;
  setTheme: Function;
  currentSlide: number;
  currentStack: TComponent[];
  theme: Theme;
  showSidebar: boolean;
}

export default createContext<TContext>({
  setCurrentSlide: () => {},
  setCurrentStack: () => {},
  setTheme: () => {},
  currentSlide: 0,
  currentStack: [],
  theme: THEMES["dark"],
  showSidebar: false,
});
