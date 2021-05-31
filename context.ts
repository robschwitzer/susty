import { createContext } from "react";

export interface TContext {
  isMenuOpen: boolean;
  setMenuOpen: Function;
  handleChangeSlide: Function;
  currentSlide: number;
}

export default createContext<TContext>({
  isMenuOpen: false,
  setMenuOpen: () => {},
  handleChangeSlide: () => {},
  currentSlide: 0,
});
