import React from "react";
import "./Toggle.css";
import { FiSun, FiMoon } from "react-icons/fi";

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
        {isDarkMode ? <FiSun className="text-yellow-500" /> : <FiMoon />}
      </label>
    </div>
  );
};

export default Toggle;
