import "./styles.scss";
export interface IStatusProps {
  status: boolean;
}

export default function Status(props: IStatusProps) {
  const status: string = props.status ? "active" : "inactive";
  return <span className={`status__text status__text-${status}`}>{status}</span>;
}
