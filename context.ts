import { createContext } from "react";
import { THEMES, Theme } from "components/Layout/themes";

export interface TComponent {
  Component: Function;
  id: number;
}

export interface TContext {
  setCurrentSlide: Function;
  setCurrentStack: Function;
  setShowSidebar: Function;
  setTheme: Function;
  currentSlide: number;
  currentStack: TComponent[];
  theme: Theme;
  showSidebar: boolean;
}

export default createContext<TContext>({
  setCurrentSlide: () => {},
  setCurrentStack: () => {},
  setShowSidebar: () => {},
  setTheme: () => {},
  currentSlide: 0,
  currentStack: [],
  theme: THEMES["dark"],
  showSidebar: false,
});
