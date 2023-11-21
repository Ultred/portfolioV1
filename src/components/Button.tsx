function Button({ text }: { text: string }) {
  return (
    <button className="mainButton shadowcustom font-courierReg">
      {text}
      <span className="button-background"></span>
    </button>
  );
}

export default Button;
