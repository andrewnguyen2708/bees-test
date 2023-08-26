import { ReactNode } from "react";
import "./GlobalStyles.scss"

export default function GlobalStyles(props: { children: ReactNode }) {
  return props.children;
}
