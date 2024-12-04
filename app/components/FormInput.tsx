type FormInputProp = {
  id?: string;
  name: string;
  type: string;
  label?: string;
  defaultValue?: string | number;
  placeholder?: string;
  className?: string;
  value?: string | number;
  text: string;
  onChange: (event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => void;
  checked?: boolean;
};

function FormInput(props:FormInputProp) {
    const { id, name, type, defaultValue, className, value, text, onChange, checked } = props;
  return (
    <div>
      <label className={`${className} font-bold`} htmlFor={name}>{text}</label>
      <input
        id={id}
        defaultValue={defaultValue}
        name={name}
        type={type}
        className={className}
        value={value}
        onChange={(e) => onChange(e)}
        checked={checked}
      />
    </div>
  );
}
export default FormInput;
