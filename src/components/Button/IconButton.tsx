import * as React from "react";
import "./styles.scss";

export interface IIconButtonProps {
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
  onClick?: () => void;
}

export default function IconButton(props: IIconButtonProps) {
  const { color, fontSize, onClick } = props;
  return (
    <span
      className={`icon-button icon-button-${color}`}
      style={{ fontSize: fontSize }}
      onClick={onClick}
    >
      {props.children}
    </span>
  );
}
