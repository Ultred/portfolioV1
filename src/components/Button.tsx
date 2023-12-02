interface ButtonProps {
  text: string;
  onClick?: () => void;
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="mainButton shadowcustom font-courierReg"
      onClick={onClick}
    >
      {text}
      <span className="button-background"></span>
    </button>
  );
}

export default Button;
