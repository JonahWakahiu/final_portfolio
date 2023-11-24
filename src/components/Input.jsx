import { useField } from "formik";

const Input = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "form_control input-error"
            : "form_control"
        }
      />
      {meta.touched && meta.error ? (
        <p className="text_error">{meta.error}</p>
      ) : null}
    </>
  );
};
export default Input;
