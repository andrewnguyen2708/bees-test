import * as React from "react";

export interface IButtonProps {
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
}

export default function Button(props: IButtonProps) {
  const { color = "primary", children, onClick } = props;
  return (
    <button className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
}
