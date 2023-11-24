import { useField } from "formik";

const CustomTextarea = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "form_control textarea input_error"
            : "form_control textarea"
        }
      ></textarea>
      {meta.touched && meta.error ? (
        <p className="text_error">{meta.error}</p>
      ) : null}
    </>
  );
};
export default CustomTextarea;
