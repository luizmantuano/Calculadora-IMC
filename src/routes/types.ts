export type DrawerParamsType = {
  [Screens.HOME]: undefined;
  [Screens.INFORMATION]: { imc: string };
};

export enum Screens {
  HOME = 'Home',
  INFORMATION = 'Information',
}
