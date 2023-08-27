import * as React from "react";

export interface IButtonProps {
  children: React.ReactNode;
  color?: string;
  variant?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button(props: IButtonProps) {
  const {
    color = "primary",
    children,
    onClick,
    variant = "contained",
    disabled,
  } = props;
  return (
    <button
      className={`btn btn-${variant}-${!disabled && color} btn-${disabled}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
