import { useState } from "react";
import "./Form.css";

const FormType = (validation) => {
  const [validationmessage, setmessage] = useState(false);
  const { label, wrongmessage, update, ...information } = validation;

  const handlemessage = (e) => {
    setmessage(true);
  };

  return (
    <div className="validation-content">
      <label>{label}</label>
      <input
        {...information}
        onChange={update}
        onBlur={handlemessage}
        onFocus={() =>
          information.name === "confirmPassword" && setmessage(true)
        }
        message={validationmessage.toString()}
      />
      <span>{wrongmessage}</span>
    </div>
  );
};

export default FormType;