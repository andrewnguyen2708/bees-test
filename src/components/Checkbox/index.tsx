import "./styles.scss";

export interface ICheckboxProps {
  label?: string;
}

export default function Checkbox(props: ICheckboxProps) {
  return (
      <label className="container">
        <input type="checkbox" {...props} />
        <span className="checkmark"></span>
      </label>
  );
}
