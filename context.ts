import { createContext } from "react";
import { THEMES, Theme } from "components/Layout/themes";

export interface TContext {
  setCurrentSlide: Function;
  currentSlide: number;
  theme: Theme;
  setTheme: Function;
}

export default createContext<TContext>({
  setCurrentSlide: () => {},
  currentSlide: 0,
  theme: THEMES["dark"],
  setTheme: () => {},
});
