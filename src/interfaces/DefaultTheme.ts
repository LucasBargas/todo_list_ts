import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      darkBtnColor: string;
      borderColor: string;
      greenColor: string;
      greenColorHover: string;
      lightColor: string;
    };

    fonts: {
      roboto: string;
    };
  }
}
