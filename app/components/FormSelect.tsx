type FormSelectProps = {
    children: React.ReactNode;
    name: string;
    className: string;
    text: string;
    value?: string;
    onChange: (event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => void;
}

const FormSelect = (props:FormSelectProps) => {
    const { children, name, className, text, value, onChange } = props;
  return (
    <>
    <label className="font-bold">{text}</label>
    <select name={name} className={className} value={value} onChange={onChange}>
        {children}
    </select>
    </>
  )
}
export default FormSelect