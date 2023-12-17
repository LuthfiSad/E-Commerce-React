import { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";

const Label = ({ htmlfor, children }) => {
    const {isDarkMode, setIsDarkMode} = useContext(DarkModeContext)
  return (
    <label
      htmlFor={htmlfor}
      className={`block ${isDarkMode ? "text-slate-300" : "text-slate-700"} text-sm font-bold mb-2`}
    >
      {children}
    </label>
  );
};
export default Label;
