type ButtonProps = {
  backgroundColor: string;
  fontSize: number;
  rounded: boolean;
  buttonText?: string;
  border?: number;
  onClickFun: () => string;
  //padding: number[];//this is n element array
  //   padding: [string, string, string, string];
  padding: string;
};
const Button = ({
  backgroundColor,
  fontSize,
  rounded,
  buttonText,
  padding,
  border,
  onClickFun
}: ButtonProps) => {
  return (
    <button
      onClick={() => onClickFun()}
      style={{
        background: `${backgroundColor}`,
        fontSize: `${fontSize}px`,
        borderRadius: `${rounded ? "20%" : "0px"}`,
        padding: `${padding}`,
        border: `${border || 5}px solid green`
      }}
    >
      {buttonText || "Click"}
    </button>
  );
};

export default Button;
