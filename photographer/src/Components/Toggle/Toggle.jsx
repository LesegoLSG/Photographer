import React from "react";
import "./Toggle.css";

const Toggle = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={() => setIsDarkMode(!isDarkMode)}
        checked={isDarkMode}
      />
      <label htmlFor="check" className="dark:text-white">
        {isDarkMode ? "Light" : "Dark"}
      </label>
    </div>
  );
};

export default Toggle;
