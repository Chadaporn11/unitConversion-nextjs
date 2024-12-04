type btnType = "submit" | "reset" | "button" | undefined;

type ButtonProps = {
  className?: string;
  type?: btnType;
  text?: string;
  onClick?: () => void;
};

function Button(props: ButtonProps) {
  const { className, type, text, onClick } = props;
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {text}
      </button>
    </>
  );
}
export default Button;
