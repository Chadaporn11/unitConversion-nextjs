"use client"

type FormContainerProps = {
  children: React.ReactNode;
  action: () => void;
};

function FormContainer(props: FormContainerProps) {
    const { children,action } = props;

  return (
    <>
      <form action={action}>{children}</form>
    </>
  );
}
export default FormContainer;
