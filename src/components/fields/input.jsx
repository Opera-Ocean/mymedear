import React from "react";

import { BaseIcon } from "../icons";
import "../comp.css";

const Field = ({
  icon,
  type,
  place,
  value,
  handleClick,
  register,
  name,
  required,
}) => {
  return (
    <div className="field-container">
      <BaseIcon icon={icon} />
      <input
        className="field"
        type={type}
        placeholder={place}
        value={value}
        onClick={handleClick}
        {...register(name, { required })}
      />
    </div>
  );
};

export default Field;
