const Button = ({classname, children, onclick=()=>{}, type="button"}) => {
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} onClick={onclick} type={type}>
          {children}
        </button>
    )
};
export default Button;