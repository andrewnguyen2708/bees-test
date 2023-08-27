import "./styles.scss";

export interface ICheckboxProps {
  label?: string;
  checked?: boolean;
  onClick?: () => void;
}

export default function Checkbox(props: ICheckboxProps) {
  const { label, checked, onClick } = props;
  return (
    <label className="container">
      {label}
      <input type="checkbox" checked={checked} onClick={onClick} {...props} />
      <span className="checkmark"></span>
    </label>
  );
}
