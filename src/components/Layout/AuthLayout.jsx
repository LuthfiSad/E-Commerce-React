import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext';
import Button from '../Elements/Button/Index';

const AuthLayout = ({ children, title, type }) => {
  const {isDarkMode, setIsDarkMode} = useContext(DarkModeContext)
  
  return (
    <div className={`flex justify-center items-center min-h-screen ${isDarkMode ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="w-full max-w-xs">
      <Button classname={`absolute top-5 h-8 px-3 text-xs right-5 ${isDarkMode ? "bg-slate-600" : "bg-blue-600"}`} onclick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light" : "Dark"}
      </Button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className={`font-mesium ${isDarkMode ? "text-slate-300" : "text-slate-500"} mb-8`}>
          Welcome, Please enter your detail
        </p>
        {children}
        <p className={`text-sm mt-5 text-center ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
        {type == "login" ? "Don't have an account? " : "Already have an account? " }
        { type == "login" && <Link to="/register" className='font-bold text-blue-600 hover:text-blue-500'>Register</Link> }
        { type == "register" && <Link to="/login" className='font-bold text-blue-600 hover:text-blue-500'>Login</Link>}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
