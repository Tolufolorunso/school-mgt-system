import React from "react";

const FormRow = ({type,name,value,handleChange,labelText}) => {
  if(type === 'select') {
    return (
      <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select value={value} name={name} onChange={handleChange}>
          <option value='' disabled>choose</option>
          <option value="Principal">Principal</option>
          <option value="Teacher">Teacher</option>
          <option value="Accountant">Accountant</option>
      </select>
      </div>
    )
  }
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full form-input"
      />
    </div>
  );
};

export default FormRow;
