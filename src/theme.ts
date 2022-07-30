import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
  }
}

export const lightTheme: DefaultTheme = {
	primaryColor: '#fff',
	secondaryColor: "#666",
};

export const darkTheme: DefaultTheme = {
	primaryColor: "#e3f2fd",
	secondaryColor: "#cacaca",
};