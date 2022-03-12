import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    red: string;
    orange: string;
    blue: string;
    textColor: string;
    navColor: string;
    backgroundColor: {
      grey: string;
      white: string;
    };
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
      grey: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
  }
}
