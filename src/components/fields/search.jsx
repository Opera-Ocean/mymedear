import React from "react";

import { BaseIcon } from "../icons";
import "../comp.css";

const SearchField = ({
  icon,
  type,
  place,
  value,
  handleClick,
}) => {
  return (
    <div className="field-container">
      <BaseIcon icon={icon} />
      <input
        className="search-field"
        type={type}
        placeholder={place}
        value={value}
        onClick={handleClick}
      />
    </div>
  );
};

export default SearchField;
