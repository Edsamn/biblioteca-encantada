import ButtonDefaultStyled from "./ButtonDefaultStyled";

interface ButtonDefaultProps {
  label: string;
  action?: () => void;
  type?: "submit";
}

function ButtonDefault({label, action, type}: ButtonDefaultProps) {
  return (
    <>
      <ButtonDefaultStyled type={type} onClick={action}>
        {label}
      </ButtonDefaultStyled>
    </>
  );
}

export default ButtonDefault;
