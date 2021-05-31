import variables from "variables";

export interface Theme {
  fg: string;
  bg: string;
  name: string;
}

export interface Themes {
  brand: Theme;
  light: Theme;
  dark: Theme;
}

export interface ThemeProps {
  theme: Theme;
}

export const THEMES: Themes = {
  brand: {
    name: "brand",
    fg: variables.white,
    bg: variables.blue_offset,
  },
  light: {
    name: "light",
    fg: variables.black,
    bg: variables.light_grey
  },
  dark: {
    name: "dark",
    fg: variables.white,
    bg: variables.black_secondary
  }
};
