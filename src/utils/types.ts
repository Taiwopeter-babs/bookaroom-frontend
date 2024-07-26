export enum ButtonColor {
  Default = "teal",
  Rose = "rose",
}

export type ButtonProp = {
  name: string;
  buttonColor?: ButtonColor;
  onClick?: () => void;
};
