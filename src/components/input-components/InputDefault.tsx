import InputDefaultStyled from "./InputDefaultStyled";

interface InputDefaultProps {
  label: string;
  key: string;
  value: string;
  action: (value: string) => void;
}

function InputDefault({key, label, value, action}: InputDefaultProps) {
  return (
    <>
      <label style={{color: "#1b1a1a", display: "flex", alignSelf: "center"}} htmlFor={key}>
        {label}:
      </label>
      <InputDefaultStyled type="text" name={key} key={key} value={value} onChange={(e) => action(e.target.value)} />
      <br />
    </>
  );
}
export default InputDefault;
