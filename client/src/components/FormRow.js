const FormRow = ({
  labelText,
  name,
  type,
  value,
  handleChange,
  handleBlur,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        className="form-input"
        onBlur={handleBlur}
      />
    </div>
  );
};
export default FormRow;
