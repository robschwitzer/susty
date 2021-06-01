import variables from "variables";

export interface Theme {
  fg: string;
  bg: string;
  name: string;
}

export interface ThemeProps {
  theme: Theme;
}

export const THEMES: Theme[] = [
  {
    name: "dark",
    fg: variables.white,
    bg: variables.black_secondary
  },
  {
    name: "forest",
    bg: "#268056",
    fg: "#f5c771"
  },
  {
    name: "bright",
    bg: "#fcba03",
    fg: "#0379a1"
  },
  {
    name: "brand",
    fg: variables.white,
    bg: variables.blue_offset,
  },
  {
    name: "light",
    fg: variables.black,
    bg: variables.light_grey
  },
];
