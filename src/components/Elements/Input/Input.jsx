import { forwardRef } from "react";

const Input = forwardRef(({placeholder, name, type}, ref) => (
        <input type={type} id={name} name={name} ref={ref} className="text-sm border rounded w-full py-1 px-3 text-slate-700 placeholder:opacity-50 active: outline-slate-500" placeholder={placeholder} />
))

export default Input;