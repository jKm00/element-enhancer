export interface StyleOptions {
  // Colors
  textColor?: string;
  textColorHover?: string;
  textColorFocus?: string;
  textColorSelected?: string;

  bgColor?: string;
  bgColorHover?: string;
  bgColorFocus?: string;
  bgColorSelected?: string;

  borderColor?: string;
  borderColorHover?: string;
  borderColorFocus?: string;
  borderColorSelected?: string;

  neutralColor?: string;

  // Typography
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;

  // Borders
  borderThickness?: string;
  borderStyle?:
    | 'dotted'
    | 'dashed'
    | 'solid'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset'
    | 'none'
    | 'hidden';
  borderRadius?: string;

  // Sizing
  minWidth?: string;
  maxWidth?: string;
  spacingX?: string;
  spacingY?: string;

  // Shadow
  shadowX?: string;
  shadowY?: string;
  shadowBlur?: string;
  shadowOffset?: string;
  shadowColor?: string;

  // Animation
  animationDuration?: string;
  animationFunction?: string;
}
