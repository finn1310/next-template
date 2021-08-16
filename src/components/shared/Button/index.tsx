import React, { VFC, memo } from "react";
import {
  Button as MuiButton,
  makeStyles,
  ButtonTypeMap,
} from "@material-ui/core";

type IButtonProps = ButtonTypeMap["props"] & {
  children: string | React.ReactNode;
  className?: string;
};

const defaultButtonProps = {
  children: "Let's Go",
  variant: "contained" as const,
};

const Button: VFC<IButtonProps> = (props) => {
  const { children, ...rest } = props;

  const defaultClasses = useStyles();

  return (
    <MuiButton classes={{ root: defaultClasses?.root }} disableRipple {...rest}>
      {children}
    </MuiButton>
  );
};

Button.defaultProps = defaultButtonProps as Partial<IButtonProps>;

export default memo(Button);

const useStyles = makeStyles(() => ({
  root: {},
}));
