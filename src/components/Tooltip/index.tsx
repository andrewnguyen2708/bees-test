import * as React from "react";
import "./styles.scss";

export interface ITooltipProps {
  title: string;
  children: React.ReactNode;
  width?: string;
}

export default function Tooltip(props: ITooltipProps) {
  return (
    <div className="tooltip">
      {props.children}
      <span className="tooltiptext" style={{ width: props.width }}>
        {props.title}
      </span>
    </div>
  );
}
