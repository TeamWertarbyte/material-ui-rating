import * as React from "react";
import { StandardProps } from "@material-ui/core";

export type IconRenderer = (
  props: RatingProps & { index: number }
) => React.ReactNode;

export interface RatingProps
  extends StandardProps<
    React.HTMLAttributes<HTMLDivElement>,
    RatingClassKey,
    "onChange"
  > {
  component?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  disabled?: boolean;
  disableHover?: boolean,
  iconFilled?: React.ReactNode;
  iconFilledRenderer?: IconRenderer;
  iconHovered?: React.ReactNode;
  iconHoveredRenderer?: IconRenderer;
  iconNormal?: React.ReactNode;
  iconNormalRenderer?: IconRenderer;
  max?: number;
  onChange?: (newValue: number) => void;
  readOnly?: boolean;
  value?: number;
}

export type RatingClassKey =
  | "root"
  | "iconButton"
  | "icon"
  | "disabled"
  | "readOnly";

declare const Rating: React.ComponentType<RatingProps>;

export default Rating;
